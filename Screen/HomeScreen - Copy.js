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
class HomeScreen extends React.PureComponent {
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
    console.log(this.props);
    return (
      <View style={styles.container}>
        <ScrollView>
          <ImageBackground
            resizeMode="cover"
            style={styles.servDtlHeader}
            source={require('../assets/img/bg-header.jpeg')}>
            <View style={[styles.headerContent]}>
              <View style={styles.verticalItem}>
                <Image
                  style={styles.userCircleTop}
                  source={require('../assets/img/person-1.jpg')}
                  //imageStyle={{borderRadius: 40}}
                />
                <View>
                  <Text style={styles.userName}>Hi, Kate </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.formContainer}>
            <View style={styles.flexWrapper}>
              <TouchableOpacity
                style={styles.designBtn}
                onPress={() => this.props.navigation.navigate('Service')}>
                <Text style={styles.loginText}>Service Provider</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.designBtn}
                onPress={() => this.props.navigation.navigate('Service')}>
                <Text style={styles.loginText}>Service Seeker</Text>
              </TouchableOpacity>
              {/* <View style={styles.btnCenter}>
              </View> */}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 30,
  },

  item: {
    flex: 1,
    padding: 20,
    fontSize: 18,
    height: 44,
  },

  mainWrapper: {
    flex: 1,
  },
  textWhite: {
    color: '#ffffff',
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
  userCircleLeft: {
    width: 62,
    height: 62,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
  },
  servItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bgLightGray: {
    backgroundColor: '#f4f4f4',
  },
  bgYellow: {
    backgroundColor: '#fffaeb',
  },
  bgOrange: {
    backgroundColor: '#fff3f1',
  },
  bgViolet: {
    backgroundColor: '#fef2fd',
  },
  bgBlue: {
    backgroundColor: '#eff4ff',
  },
  hr: {
    width: '90%',
    margin: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  mr_10: {
    marginRight: 10,
  },
  mr_20: {
    marginRight: 20,
  },
  ml_10: {
    marginLeft: 10,
  },
  ml_20: {
    marginLeft: 20,
  },
  mb_20: {
    marginBottom: 20,
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
    flex: 1,
    width: '100%',
    height: 150,
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
    //width: '100%',
    height: 450,
    backgroundColor: '#ffffff',
    paddingHorizontal: 5,
    paddingVertical: 30,
    justifyContent: 'center',
    //backgroundColor: '#333333',
  },
  flexWrapper: {
    //width: '100%',
    height: '100%',
    marginHorizontal: 30,
    //alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 'auto',
    //backgroundColor: '#ffffff',
  },
  btnCenter: {
    //display: 'flex',
    //width: '100%',
    //textAlign: 'left',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAcitve: {
    color: '#8fd219',
  },
  titleMain: {
    fontWeight: 'bold',
    fontSize: 25,
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
    fontSize: 17,
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
  designBtn: {
    width: '100%',
    height: 50,
    //backgroundColor:"#FF0000",
    backgroundColor: '#da3015',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
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

export default HomeScreen;
