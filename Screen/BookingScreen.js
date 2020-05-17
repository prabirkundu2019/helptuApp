import React, {Component, PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  Text,
  TextInput,
  Image,
  View,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListItem, SearchBar} from 'react-native-elements';
import {Input} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import SQLite from "react-native-sqlite-2";
//import { openDatabase } from 'react-native-sqlite-storage';
import {AuthContext} from '../App';
//var SQLite = require('react-native-sqlite-storage');

//let db = openDatabase({ name: 'MetricsDatabase.db', location: 'Library', createFromLocation: '~MetricsDatabase.db'  });
class BookingScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      refreshing: false,
      setRefreshing: false,
      HeadTable: ['Company Name'],
      company: [],
      isListEnd: false,
      fetching_from_server: false,
      searchText: '',
      demoArray: [1, 2, 3, 4],
    };
  }

  componentDidMount() {
    //this.getDatarows();
    //console.log(AsyncStorage.getItem("token"));
    //this.loadMoreData();
  }

  render() {
    console.log(this.props);
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
                  />
                </View>
                <View style={styles.formItem}>
                  <Text style={styles.label}>Email</Text>
                  <Input
                    placeholder="Email"
                  />
                </View>
                <View style={styles.formItem}>
                  <Text style={styles.label}>Phone Number</Text>
                  <Input
                    placeholder="Phone No."
                  />
                </View>
              </View>
              <View style={styles.bottomView}>
                <TouchableOpacity
                  style={styles.bookBtn}>
                  <Text style={styles.loginText}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
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

export default BookingScreen;