import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Button,
  Text,
  TextInput,
  Image,
  View,
  ImageBackground,
} from 'react-native';
//import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthContext} from '../App';
import axios from 'axios';

export default function LoginScreen({navigation}) {
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
    <View style={styles.mainWrapper}>
      <View style={styles.container}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Welcome Back </Text>
          <Text style={styles.headerText}>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt{' '}
          </Text>
        </View>
        <View style={styles.formContainer}>
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
          <View style={styles.forgotPass}>
            <TouchableOpacity>
              <Text
                style={styles.forgotPassText}
                onPress={() => navigation.navigate('Registration')}>
                Forgot Password ?
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => signIn({username, password})}>
            <Text style={styles.loginText}>Sign In</Text>
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
            <Text style={styles.havAcc}>Don't have an account? </Text>
            <TouchableOpacity>
              <Text
                style={styles.signUp}
                onPress={() => navigation.navigate('Registration')}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
  },
  container: {
    //flex: 1,
    // width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center'
    width: '100%',
    height: '100%',
    backgroundColor: '#da3015',
  },
  headerContent: {
    padding: 30,
    paddingTop: 100,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  headerText: {
    color: '#ffffff',
  },
  formContainer: {
    width: '100%',
    height: '78%',
    backgroundColor: '#ffffff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  /* logo: {
    width: 500,
    height: 100,
    backgroundColor: '#FF0000',
  }, */
  inputView: {
    width: '80%',
    height: 50,
    //borderRadius: 25,
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 2,
    marginBottom: 20,
    justifyContent: 'center',
    //padding: 20,
  },
  inputText: {
    height: 50,
  },
  /* forgot: {
    color: 'white',
    fontSize: 11,
  }, */
  loginBtn: {
    width: '80%',
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
    width: '80%',
  },
  forgotPassText: {
    color: '#a4a4a4',
    textAlign: 'right',
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
    width: 50,
    height: 50,
    paddingRight: 0,
    paddingLeft: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerBottom: {
    flexDirection: 'row',
    marginTop: 20,
  },
  havAcc: {
    color: '#a4a4a4',
  },
  signUp: {
    color: '#1e1e1e',
    fontWeight: 'bold',
    fontSize: 15,
    paddingLeft: 5,
  },
});
