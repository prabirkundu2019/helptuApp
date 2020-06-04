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
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListItem, SearchBar} from 'react-native-elements';
import {Input} from 'react-native-elements';
import { connect } from 'react-redux';
import { getService } from '../src/actions/service';
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
      show: false,
      date: new Date(),
      mode: 'date',
      selectedDate: new Date().toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
      }).replace(/ /g, '-'),
      totalHour: 2,
      name: '',
      email: '',
      phone: '',
      spinner: false
    };
  }

  componentDidMount() {
    //this.getDatarows();
    //console.log(AsyncStorage.getItem("token"));
    //this.loadMoreData();
    this.props.getService(this.props.route.params.service_id);
  }

  showMode = currentMode => {
    this.setState({
      show: true,
      mode: currentMode
    })
  };

  showDatepicker = () => {
    this.showMode('date');
  };

  onChange = (event, selectedDate) => {
    if (selectedDate === undefined) { 
      this.setState({
        show: false
      })
    }else{
      let currentDate = selectedDate.toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
      }).replace(/ /g, '-');
      this.setState({
        show: false,
        selectedDate: currentDate
      })
    }
  };

  setHour = (type) => {
    if(type == 'plus'){
      this.setState({
        totalHour: this.state.totalHour + 1
      })
    }else{
      if(this.state.totalHour > 2){
        this.setState({
          totalHour: this.state.totalHour - 1
        })
      }
    }
  }

  submitForm = () => {
    this.setState({
      spinner: true
    })
    let data = {
        user_id: this.props.route.params.user_id,
        service_id: this.props.route.params.service_id,
        booking_date: this.state.selectedDate,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        total_hour: this.state.totalHour
    }
    axios.post('https://carekro.com/helptu/index.php/serviceApi/booking',data)
    .then(response => {(response.data.status === "Error") ? alert(response.data.message) :
        this.setState({
            email: '',
            name: '',
            phone: '',
            spinner: false 
        }, alert('Thanks for your booking. Your booking no is '+response.data.booking_no))
    })
  }

  render() {
    let total_rate = this.props.service.service_fee * this.state.totalHour;
    let service_fee = total_rate * 0.25;
    let total_amount = total_rate + service_fee;
    return (
       
      <View style={styles.container}>
        <Spinner
          visible={this.state.spinner}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <ScrollView>
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
            <View style={styles.flexWrapper}>
              <View style={styles.bookingDetails}>
                <Text style={styles.titleMain}>Booking Details</Text>
                <View
                  style={[
                    styles.formContainer,
                    styles.bgLightGray,
                    styles.px_10,
                  ]}>
                  <View style={[styles.verticalItem, styles.mb_5]}>
                    <Text style={styles.bookBold}>{this.state.selectedDate}</Text>
                    <View style={[styles.mlAuto, styles.verticalItem]}>
                      <Icon name="calendar" onPress={this.showDatepicker} />
                      <Text style={styles.ml_10} onPress={this.showDatepicker}>Pick Date</Text>
                      {this.state.show && (
                        <DateTimePicker
                          testID="datetimePicker"
                          dateFormat={"year day month"} 
                          timeZoneOffsetInMinutes={0}
                          value={this.state.date}
                          mode={this.state.mode}
                          is24Hour={true}
                          display="default"
                          onChange={this.onChange}
                        />
                      )}
                    </View>
                  </View>
                  <View style={[styles.verticalItem, styles.mb_5]}>
                    <Text style={styles.bookBold}>5:00 pm</Text>
                    <View style={[styles.mlAuto, styles.verticalItem]}>
                      <Icon name="clock-o" />
                      <Text style={styles.ml_10}>Pick Time</Text>
                    </View>
                  </View>
                  <View style={[styles.verticalItem, styles.mb_5]}>
                    <Text style={styles.bookTextLight}>How many hours</Text>
                  </View>
                  <View style={[styles.verticalItem, styles.mb_5]}>
                    <Text style={styles.bookBold}>{this.state.totalHour} hrs</Text>
                    <View style={[styles.mlAuto, styles.verticalItem]}>
                      <TouchableOpacity>
                        <Icon
                          size={20}
                          style={styles.bookRoundIcon}
                          name="plus"
                          onPress={() => this.setHour('plus')}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Icon
                          size={20}
                          style={[styles.bookRoundIcon, styles.ml_20]}
                          name="minus"
                          onPress={() => this.setHour('minus')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  
                  <View style={styles.hr} />
                  
                  <View style={[styles.verticalItem, styles.mb_5]}>
                    <Text style={styles.bookTextLight}>Bill</Text>
                  </View>
                  <View style={[styles.verticalItem, styles.mb_5]}>
                    <Text style={styles.bookTextLight}>RPH : ${this.props.service.service_fee}</Text>
                    <View style={[styles.mlAuto]}>
                      <Text style={styles.ml_10}>${total_rate}</Text>
                    </View>
                  </View>
                  <View style={[styles.verticalItem, styles.mb_5]}>
                    <Text style={styles.bookTextLight}>Service Fee : @25%</Text>
                    <View style={[styles.mlAuto]}>
                      <Text style={styles.ml_10}>${service_fee}</Text>
                    </View>
                  </View>
                  <View style={styles.verticalItem}>
                    <Text style={styles.bookBold}>Total Amount</Text>
                    <View style={styles.mlAuto}>
                      <Text style={[styles.bookBold, styles.ml_10]}>
                        ${total_amount}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.formItem}>
                  <Text style={styles.formInputLabel}>Name</Text>
                  <Input 
                    style={styles.formInput} 
                    placeholder="Name"
                    onChangeText={(name) => this.setState({name})} 
                  />
                </View>
                <View style={styles.formItem}>
                  <Text style={styles.formInputLabel}>Email</Text>
                  <Input 
                    style={styles.formInput} 
                    placeholder="Email"
                    onChangeText={(email) => this.setState({email})} 
                  />
                </View>
                <View style={styles.formItem}>
                  <Text style={styles.formInputLabel}>Phone Number</Text>
                  <Input 
                    style={styles.formInput} 
                    placeholder="Phone No"
                    onChangeText={(phone) => this.setState({phone})} 
                  />
                </View>
              </View>
              <View style={styles.bottomView}>
                <TouchableOpacity style={styles.bookBtn} onPress={this.submitForm}>
                  <Text style={styles.loginText}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
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
    borderBottomColor: '#707070',
    borderBottomWidth: 1,
  },
  mb_5: {
    marginBottom: 5,
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
  bookBold: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  bookRoundIcon: {
    backgroundColor: '#da3015',
    color: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  servDtlHeader: {
    //flex: 0.5,
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 50,
    overflow: 'hidden',
  },
  headerContent: {
    paddingHorizontal: 15,
    paddingLeft: 30,
    paddingBottom: 50,
    marginTop: 'auto',
  },
  bookTextLight: {
    color: '#6d6d6d',
  },
  userName: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 2,
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
    fontSize: 25,
    marginBottom: 15,
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
  formItem: {
    backgroundColor: 'transparent',
    marginHorizontal: -5,
    marginTop: 10,
  },
  formInputLabel: {
    paddingHorizontal: 15,
    color: '#6d6d6d',
  },
  formInput: {
    marginHorizontal: -10,
    backgroundColor: '#000000',
    marginTop: -10,
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

const mapStateToProps = state => ({
  service: state.service.service
});
const mapDispatchToProps = {
  getService
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingScreen);