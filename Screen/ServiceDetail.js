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
  Picker,
  ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import { getUser } from '../src/actions/service';
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
class ServiceDetail extends React.PureComponent {
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
    //alert(this.props.route.params.user_id);
    //this.getDatarows();
    //console.log(AsyncStorage.getItem("token"));
    //this.loadMoreData();
    this.props.getUser(this.props.route.params.user_id);
  }

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        editable={true}
        value={this.state.searchText}
        onChangeText={this.updateSearch}
      />
    );
  };

  render() {
    //console.log(this.props.user.name);
    return (
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          style={styles.servDtlHeader}
          source={require('../assets/img/servDtl-banner.jpg')}>
          <View style={styles.headerContent}>
            {/* <Text style={styles.headerTitle}>Welcome Back </Text>
            <Text style={styles.headerText}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt{' '}
            </Text> */}
          </View>
          <View style={styles.formContainer}>
            <ScrollView>
              <View style={styles.flexWrapper}>
                <View style={styles.item}>
                  <Text style={styles.userName}>{this.props.user.name}</Text>
                  <Text style={styles.decrip}>
                    Excepteur sint occaecat cupidatat
                  </Text>
                  <View style={[styles.verticalItem, styles.rateHold]}>
                    <Image
                      style={styles.rateImg}
                      source={require('../assets/img/starRate-3of4.png')}
                    />
                    <Text style={styles.rateText}>3.4</Text>
                  </View>
                  <Text style={{}}>Skil : Beautician</Text>
                  <Text style={{}}>Cost : $ 250</Text>
                  <View style={styles.verticalItem}>
                    <Text style={styles.textAcitve}>Open Now</Text>
                    <Text style={styles.textMute}> : 10am to 5pm </Text>
                  </View>
                </View>               

                <View style={styles.bottomView}>
                  <TouchableOpacity
                    style={styles.bookBtn}
                    onPress={() =>
                      this.props.navigation.navigate('BookingScreen', {service_id: this.props.route.params.service_id, user_id: this.props.route.params.user_id})
                    }>
                    <Text style={styles.loginText}>Book Now</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{marginTop:20}}>
                <View style={{flexDirection:'row', alignItems:"center", justifyContent:'space-between', borderBottomColor:'#707070', borderBottomWidth:1}}>
                  <View style={{flexDirection:'row', alignItems:"center"}}>
                    <Text style={styles.reviewTitle}>All Reviews</Text>
                    <Text style={styles.reviewCount}>28</Text>
                  </View>
                  <View style={{flexDirection:'row', alignItems:"center", borderBottomWidth:2, borderBottomColor:"#da3015"}}>
                    <Picker style={{ height:30, width: 130 }}>
                      <Picker.Item label="Newest" value="Newest" />
                    </Picker>
                    <Icon name="bell" color="#737272" size={16}/>
                  </View>
                </View>
                <View style={styles.singleReview}>
                  <Image source={require('./images/review-user.png')} />
                  <View style={{width:'80%', paddingLeft:10}}>
                    <View style={{flexDirection:'row', alignItems:"flex-end", marginBottom:8}}>
                      <Text style={styles.reviewerName}>Jean Dolly</Text>
                      <Text style={styles.ratings}><Icon name="star" color="#4c7cff"/> . 2 DAYS AGO</Text>
                    </View>
                    <Text style={styles.reviewText}>Too much professional.I just loved the hair spa & I'll highly recommend her. She is awesome at her work.</Text>
                  </View>
                </View>
              </View>

            </ScrollView>
          </View>
        </ImageBackground>
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
  errorStyle: {
    color: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: '#da3015',
  },
  servDtlHeader: {
    //flex: 1,
    width: '100%',
    height: '100%',
  },
  headerContent: {
    //flex: 0.5,
    height: '27%',
    //height: 150,
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    paddingLeft: 30,
    paddingBottom: 50,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 35,
    fontWeight: 'bold',
    paddingBottom: 10,
    fontFamily: 'Circular Std Bold',
  },
  headerText: {
    width: '60%',
    color: '#ffffff',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 30,
    position: 'relative',
  },
  flexWrapper: {
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: '100%',
    textAlign: 'left',
  },
  textMute: {
    color: '#bbbbbb',
  },
  textAcitve: {
    color: '#8fd219',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
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

  // sonai style
  reviewTitle:{
    color:"#000000",
    fontSize:14
  },
  reviewCount:{
    color:"#000000",
    fontSize:12,
    marginLeft:5,
    backgroundColor:'#e5e2e2',
    paddingHorizontal:3,
    paddingVertical:3
  },
  singleReview:{
    flexDirection:'row',
    alignItems:'flex-start',
    borderBottomColor:'#dbdbdb',
    borderBottomWidth:1,
    paddingVertical:14
  },
  reviewerName:{
    fontSize:14,
    color:"#da3015",
    fontWeight:'500',
    marginRight:8
  },
  ratings:{
    color:"#da3015",
    fontSize:10
  },
  reviewText:{
    color:"#6d6d6d",
    fontSize:12,
    fontWeight:"500",
    lineHeight:14
  }
});

const mapStateToProps = state => ({
  user: state.service.user
});
const mapDispatchToProps = {
  getUser
}
export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetail);