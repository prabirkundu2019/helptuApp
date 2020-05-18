import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  Text,
  TextInput,
  Image,
  View,
  ScrollView,
  ImageBackground,
  ViewBase,
} from 'react-native';
//import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthContext} from '../App';
import axios from 'axios';

export default function LoginScreen({navigation}) {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const {signIn} = React.useContext(AuthContext);

  // GoogleSignin.configure({
  //   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  //   webClientId: '770482334222-it2m5p0lrafa25gu8h5tmr4t1m5ch48a.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  // });

  signIn1 = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      this.setState({userInfo});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.servDtlHeader}
        source={require('../assets/img/bg-header.jpeg')}>
        <View style={[styles.headerContent, styles.verticalItem]}>
          <Image
            style={styles.userCircleTop}
            source={require('../assets/img/person-1.jpg')}
            //imageStyle={{borderRadius: 40}}
          />
          <View>
            <Text style={styles.userName}>Kate Wilson </Text>
            <Text style={styles.userShortText}>Book a service </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.formContainer}>
        <ScrollView>
          <View style={styles.flexWrapper}>
            <View style={styles.bookingDetails}>
              <Text style={styles.titleMain}>Booking Details</Text>
              <View style={[styles.formContainer, styles.bgLightGray, styles.px_10]}>
                <View style={styles.verticalItem}>
                  <Text>Today</Text>
                  <View style={[styles.mlAuto, styles.verticalItem]}>
                    <Icon name="calendar" />
                    <Text style={styles.ml_10}>Pick Date</Text>
                  </View>
                </View>
                <View style={styles.verticalItem}>
                  <Text>5:00 pm</Text>
                  <View style={[styles.mlAuto, styles.verticalItem]}>
                    <Icon name="clock-o" />
                    <Text style={styles.ml_10}>Pick Time</Text>
                  </View>
                </View>
                <View style={styles.verticalItem}>
                  <Text>How many hours</Text>
                </View>
                <View style={styles.verticalItem}>
                  <Text>2 hrs</Text>
                  <View style={[styles.mlAuto, styles.verticalItem]}>
                    <TouchableOpacity>
                      <Icon size={30} name="plus-square" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Icon
                        size={30}
                        style={styles.ml_20}
                        name="minus-square"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                
                <View style={styles.hr} />
                
                <View style={styles.verticalItem}>
                  <Text>Bill</Text>
                </View>
                <View style={styles.verticalItem}>
                  <Text>RPH : $40</Text>
                  <View style={[styles.mlAuto]}>
                    <Text style={styles.ml_10}>$40</Text>
                  </View>
                </View>
                <View style={styles.verticalItem}>
                  <Text>Service Fee : @25%</Text>
                  <View style={[styles.mlAuto]}>
                    <Text style={styles.ml_10}>$8</Text>
                  </View>
                </View>
                <View style={styles.verticalItem}>
                  <Text>Total Amount</Text>
                  <View style={[styles.mlAuto]}>
                    <Text style={styles.ml_10}>$48.00</Text>
                  </View>
                </View>
              </View>
              <View style={styles.formItem}>
                <Text style={styles.label}>Name</Text>
                <Input
                  placeholder="Name"
                  value={name}
                  onChangeText={setName}
                  style={styles.inputText}
                  errorStyle={styles.errorStyle}
                  //errorMessage="ENTER A VALID ERROR HERE"
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.formItem}>
                <Text style={styles.label}>Email</Text>
                <Input
                  placeholder="Email"
                  value={username}
                  onChangeText={setUsername}
                  style={styles.inputText}
                  errorStyle={styles.errorStyle}
                  //errorMessage="ENTER A VALID ERROR HERE"
                  secureTextEntry={true}
                />
              </View>
              <View style={styles.formItem}>
                <Text style={styles.label}>Phone Number</Text>
                <Input
                  placeholder="Phone No."
                  value={username}
                  onChangeText={username}
                  style={styles.inputText}
                  errorStyle={styles.errorStyle}
                  //errorMessage="ENTER A VALID ERROR HERE"
                  secureTextEntry={true}
                />
              </View>
            </View>
            <View style={styles.bottomView}>
              <TouchableOpacity
                style={styles.bookBtn}
                onPress={() => signUp({name, username, password})}>
                <Text style={styles.loginText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  verticalItem: {
    flexDirection: 'row',
  },
  horizontalItem: {
    flexDirection: 'column',
  },
  userCircleTop: {
    width: 62,
    height: 62,
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 10,
  },
  bgLightGray: {
    backgroundColor: '#f4f4f4',
  },
  hr: {
    width: '90%',
    margin: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  ml_10: {
    marginLeft: 10,
  },
  ml_20: {
    marginLeft: 20,
  },
  mlAuto: {
    marginLeft: 'auto',
  },
  px_10: {
    paddingHorizontal: 10,
  },
  errorStyle: {
    color: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  servDtlHeader: {
    flex: 0.5,
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 50,
    overflow: 'hidden',
  },
  headerContent: {
    //flex: 0.5,
    //justifyContent: 'flex-start',
    //alignItems: 'flex-end',
    paddingHorizontal: 15,
    paddingLeft: 30,
    paddingBottom: 50,
    marginTop: 'auto',
  },
  userName: {
    color: '#ffffff',
    fontSize: 35,
    fontWeight: 'bold',
    paddingBottom: 5,
    fontFamily: 'Circular Std Bold',
  },
  userShortText: {
    color: '#ffffff',
    fontSize: 20,
  },
  headerText: {
    width: '60%',
    color: '#ffffff',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    /* borderTopRightRadius: 20,
    borderTopLeftRadius: 20, */
    paddingHorizontal: 5,
    paddingVertical: 30,
  },
  flexWrapper: {
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookingDetails: {
    width: '100%',
    textAlign: 'left',
  },
  textAcitve: {
    color: '#8fd219',
  },
  titleMain: {
    fontWeight: 'bold',
    fontSize: 35,
    marginBottom: 5,
    color: '#404040',
  },
  decrip: {
    marginBottom: 5,
  },
  rateHold: {
    marginBottom: 25,
  },
  rateImg: {
    marginTop: 10,
  },
  rateText: {
    marginLeft: 10,
    fontSize: 20,
  },
  inputView: {
    width: '100%',
  },
  inputText: {
    // height: 50,
    color: '#6d6d6d',
    fontFamily: 'CircularStd Book',
  },
  forgotPass: {
    marginLeft: 'auto',
    textAlign: 'right',
  },
  forgotPassText: {
    color: '#a4a4a4',
  },
  bottomView: {
    width: '100%',
    //height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    /* position: 'absolute',
    bottom: 0, */
  },
  bookBtn: {
    width: '100%',
    //backgroundColor:"#FF0000",
    backgroundColor: '#da3015',
    borderRadius: 10,
    paddingVertical: 20,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    /* height: 50,
    justifyContent: 'center', */
    //marginTop: 20,
    //marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  /* forgotPass: {
    paddingRight: 20,
    color: '#a4a4a4',
    marginRight: 35,
    marginBottom: 0,
  }, */
  socialRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  itemFacebook: {
    //flex: 1,
    width: 40,
    height: 40,
    paddingRight: 0,
    paddingLeft: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orText: {
    display: 'flex',
    color: '#000000',
    marginTop: 10,
  },
  footerBottom: {
    flexDirection: 'row',
    marginTop: 30,
  },
  havAcc: {
    color: '#a4a4a4',
  },
  /* bottomText: {
    color: '#1e1e1e',
    fontWeight: 'bold',
  }, */
  signUp: {
    color: '#1e1e1e',
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 5,
  },
});
