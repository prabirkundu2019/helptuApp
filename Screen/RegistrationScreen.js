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

export default function RegistrationScreen({navigation}) {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  // GoogleSignin.configure({
  //   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  //   webClientId: '770482334222-it2m5p0lrafa25gu8h5tmr4t1m5ch48a.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
  // });

  const {signUp} = React.useContext(AuthContext);

  return (
    <View style={styles.container}>
      <ImageBackground
        //resizeMode="center"
        style={styles.bgHeader}
        source={require('../assets/img/bg-header.jpeg')}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Create Account </Text>
          <Text style={styles.headerText}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt{' '}
          </Text>
        </View>
        <View style={styles.formContainer}>
          <ScrollView>
            <View style={styles.flexWrapper}>
              <View style={styles.inputView}>
                <Input
                  placeholder="Name"
                  value={name}
                  onChangeText={setName}
                  //style={styles.inputText}
                  leftIcon={{
                    type: 'font-awesome',
                    name: 'user',
                    color: '#d73633',
                    size: 20,
                  }}
                  style={styles.inputText}
                  errorStyle={styles.errorStyle}
                  //errorMessage="ENTER A VALID ERROR HERE"
                />
                <Input
                  placeholder="Email"
                  value={username}
                  onChangeText={setUsername}
                  leftIcon={{
                    type: 'font-awesome',
                    name: 'envelope',
                    color: '#d73633',
                    size: 15,
                  }}
                  style={styles.inputText}
                  errorStyle={styles.errorStyle}
                  //errorMessage="ENTER A VALID ERROR HERE"
                />
                <Input
                  placeholder="Password"
                  value={password}
                  onChangeText={setPassword}
                  leftIcon={{
                    type: 'font-awesome',
                    name: 'lock',
                    color: '#d73633',
                    size: 25,
                  }}
                  style={styles.inputText}
                  errorStyle={styles.errorStyle}
                  //errorMessage="ENTER A VALID ERROR HERE"
                  secureTextEntry={true}
                />
              </View>

              {/* <View style={styles.inputView}>
                <TextInput
                  placeholder="Name"
                  value={name}
                  onChangeText={setName}
                  style={styles.inputText}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Email"
                  value={username}
                  onChangeText={setUsername}
                  style={styles.inputText}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Password"
                  value={password}
                  style={styles.inputText}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </View>
               */}
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => signUp({name, username, password})}>
                <Text style={styles.loginText}>Sign Up</Text>
              </TouchableOpacity>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.orText}>OR</Text>
              </View>
              <View style={styles.socialRow}>
                <Icon.Button
                  style={styles.itemFacebook}
                  name="facebook"
                  backgroundColor="#3b5998"
                  onPress={() => alert('Login with Facebook')}
                />
              </View>
              <View style={styles.footerBottom}>
                <Text style={styles.havAcc}>Already have an account? </Text>
                <TouchableOpacity>
                  <Text
                    style={styles.signIn}
                    onPress={() => navigation.navigate('SignIn')}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  errorStyle: {
    color: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: '#da3015',
  },
  bgHeader: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  headerContent: {
    flex: 0.5,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
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
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  flexWrapper: {
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    width: '100%',
  },
  inputText: {
    // height: 50,
    color: '#6d6d6d',
    fontFamily: 'CircularStd Book',
  },
  /* forgot: {
    color: 'white',
    fontSize: 11,
  }, */
  loginBtn: {
    width: '100%',
    //backgroundColor:"#FF0000",
    backgroundColor: '#da3015',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
  forgotPass: {
    paddingRight: 20,
    color: '#a4a4a4',
    marginRight: 35,
    marginBottom: 0,
  },
  orText: {
    display: 'flex',
    color: '#000000',
    marginTop: 10,
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
  signIn: {
    color: '#1e1e1e',
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 5,
  },
});
