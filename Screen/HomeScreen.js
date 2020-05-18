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
class Home extends React.PureComponent {
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
                  <Text style={styles.userShortText}>Need help ? </Text>
                </View>
              </View>
              <View style={styles.horizontalItem}>
                {/* <SearchBar
                placeholder="Type Here..."
                lightTheme
                round
                editable={true}
                value={this.state.searchText}
                onChangeText={this.updateSearch}
              /> */}
                <SearchBar
                  placeholder="Search for services"
                  lightTheme
                  inputStyle={{backgroundColor: 'white'}}
                  //rightIconContainerStyle={{backgroundColor: 'white',}}
                  //leftIconContainerStyle={{backgroundColor: 'red', padding: 0,}}
                  round
                  searchIcon={true}
                  placeholderTextColor={'#c6c6c6'}
                  style={{marginLeft: 0}}
                  containerStyle={{
                    backgroundColor: 'transparent',
                    //borderWidth: 0,
                    //backgroundColor: 'white',
                    borderWidth: 0, //no effect
                    shadowColor: 'white', //no effect
                    borderBottomColor: 'transparent',
                    borderTopColor: 'transparent',
                    marginLeft: -10,
                    //borderRadius: 50
                  }}
                  //inputStyle={{backgroundColor: 'white'}}
                  //placeholderTextColor={'#g5g5g5'}
                  editable={true}
                  value={this.state.searchText}
                  onChangeText={this.updateSearch}
                />
                <View style={styles.verticalItem}>
                  <Icon
                    style={[styles.textWhite, styles.mr_10]}
                    size={25}
                    name="map-marker"
                  />
                  <Text style={[styles.userShortText, styles.mr_10]}>
                    28, Dixon lane Kolkata
                  </Text>
                  <Icon
                    style={[styles.textWhite, styles.mr_10]}
                    size={25}
                    name="angle-down"
                  />
                </View>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.formContainer}>
            <View style={styles.flexWrapper}>
              <View style={styles.bookingDetails}>

                <View
                  style={[
                    styles.formContainer,
                    styles.bgYellow,
                    styles.px_10,
                    styles.mb_20,
                  ]}>
                  <View style={styles.verticalItem}>
                    <Image
                      style={[styles.userCircleLeft]}
                      source={require('../assets/img/Pet.jpg')}
                      //imageStyle={{borderRadius: 40}}
                    />
                    <View style={{width: 150, marginLeft: 10}}>
                      <Text style={styles.servItemTitle}>Pet Services </Text>
                      <Text style={{}}>Excepteur sint occaecat cupidatat </Text>
                    </View>

                    <View style={[styles.mlAuto]}>
                      <View style={styles.ml_10}>
                        <TouchableOpacity
                          // eslint-disable-next-line react-native/no-inline-styles
                          style={{
                            height: 40,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#e7bb2e',
                            borderRadius: 50,
                            marginLeft: 20,
                          }}
                          onPress={() =>
                            this.props.navigation.navigate('Service')
                          }>
                          <Icon
                            size={20}
                            //style={styles.ml_20}
                            name="long-arrow-right"
                            color="white"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    
                  </View>
                </View>


                <View
                  style={[
                    styles.formContainer,
                    styles.bgOrange,
                    styles.px_10,
                    styles.mb_20,
                  ]}>
                  <View style={styles.verticalItem}>
                    <Image
                      style={[styles.userCircleLeft]}
                      source={require('../assets/img/Garden.jpg')}
                      //imageStyle={{borderRadius: 40}}
                    />
                    <View style={{width: 150, marginLeft: 10}}>
                      <Text style={styles.servItemTitle}>Garden Services </Text>
                      <Text style={{}}>Excepteur sint occaecat cupidatat </Text>
                    </View>

                    <View style={[styles.mlAuto]}>
                      <View style={styles.ml_10}>
                        <TouchableOpacity
                          // eslint-disable-next-line react-native/no-inline-styles
                          style={{
                            height: 40,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#da3015',
                            borderRadius: 50,
                            marginLeft: 20,
                          }}
                          onPress={() =>
                            this.props.navigation.navigate('Service')
                          }>
                          <Icon
                            size={20}
                            //style={styles.ml_20}
                            name="long-arrow-right"
                            color="white"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    
                  </View>
                </View>

                <View
                  style={[
                    styles.formContainer,
                    styles.bgViolet,
                    styles.px_10,
                    styles.mb_20,
                  ]}>
                  <View style={styles.verticalItem}>
                    <Image
                      style={[styles.userCircleLeft]}
                      source={require('../assets/img/Fitness.jpg')}
                      //imageStyle={{borderRadius: 40}}
                    />
                    <View style={{width: 150, marginLeft: 10}}>
                      <Text style={styles.servItemTitle}>Fitness Services </Text>
                      <Text style={{}}>Excepteur sint occaecat cupidatat </Text>
                    </View>

                    <View style={[styles.mlAuto]}>
                      <View style={styles.ml_10}>
                        <TouchableOpacity
                          // eslint-disable-next-line react-native/no-inline-styles
                          style={{
                            height: 40,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#b92eb5',
                            borderRadius: 50,
                            marginLeft: 20,
                          }}
                          onPress={() =>
                            this.props.navigation.navigate('Service')
                          }>
                          <Icon
                            size={20}
                            //style={styles.ml_20}
                            name="long-arrow-right"
                            color="white"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    
                  </View>
                </View>

                <View
                  style={[
                    styles.formContainer,
                    styles.bgBlue,
                    styles.px_10,
                    styles.mb_20,
                  ]}>
                  <View style={styles.verticalItem}>
                    <Image
                      style={[styles.userCircleLeft]}
                      source={require('../assets/img/Food.jpg')}
                      //imageStyle={{borderRadius: 40}}
                    />
                    <View style={{width: 150, marginLeft: 10}}>
                      <Text style={styles.servItemTitle}>Food Services </Text>
                      <Text style={{}}>Excepteur sint occaecat cupidatat </Text>
                    </View>

                    <View style={[styles.mlAuto]}>
                      <View style={styles.ml_10}>
                        <TouchableOpacity
                          // eslint-disable-next-line react-native/no-inline-styles
                          style={{
                            height: 40,
                            width: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#235cda',
                            borderRadius: 50,
                            marginLeft: 20,
                          }}
                          onPress={() =>
                            this.props.navigation.navigate('Service')
                          }>
                          <Icon
                            size={20}
                            //style={styles.ml_20}
                            name="long-arrow-right"
                            color="white"
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    
                  </View>
                </View>

                {/* <View style={styles.MainContainer}>
                <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.state.demoArray}
                renderItem={({item, index}) => (
                    <ListItem
                    title="Test1"
                    containerStyle={{borderBottomWidth: 0}}
                    chevron
                    />
                )}
                keyExtractor={item => item.so_header_id}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader}
                />
            </View> */}
              </View>
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
    //flex: 0.5,
    width: '100%',
    height: 250,
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
    backgroundColor: '#ffffff',
    /* borderTopRightRadius: 20,
    borderTopLeftRadius: 20, */
    paddingHorizontal: 5,
    paddingVertical: 30,
    //paddingBottom: 10,
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

export default Home;