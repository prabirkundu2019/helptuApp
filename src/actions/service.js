import { SERVICES, PROVIDERS, SERVICE, USER } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
let token = "";
AsyncStorage.getItem('token').then((value) => {
  if (value !== null) {
      token = value;
  }
});

export const getServices = () => dispatch => {
  const headers = {  
    "authorization":  token
  }
  axios.get('https://carekro.com/helptu/index.php/serviceApi/allServices', {
    headers: headers
  })
  // .then(company => {
  //   console.log(company  );
  // })
  .then(service => dispatch({
    type: SERVICES,
    payload: service.data.data
  }));
}

export const getProviders = (serviceId) => dispatch => {
  const headers = {  
    "authorization":  token
  }
  axios.get('https://carekro.com/helptu/index.php/serviceApi/allServiceProviders/'+serviceId, {
    headers: headers
  })
  // .then(company => {
  //   console.log(company  );
  // })
  .then(provider => dispatch({
    type: PROVIDERS,
    payload: provider.data.data
  }));
}

export const getService = (serviceId) => dispatch => {
  const headers = {  
    "authorization":  token
  }
  axios.get('https://carekro.com/helptu/index.php/serviceApi/getService/'+serviceId, {
    headers: headers
  })
  // .then(company => {
  //   console.log(company  );
  // })
  .then(service => dispatch({
    type: SERVICE,
    payload: service.data.data
  }));
}

export const getUser = (userId) => dispatch => {
  const headers = {  
    "authorization":  token
  }
  axios.get('https://carekro.com/helptu/index.php/serviceApi/getUser/'+userId, {
    headers: headers
  })
  // .then(company => {
  //   console.log(company  );
  // })
  .then(user => dispatch({
    type: USER,
    payload: user.data.data
  }));
}

