import * as React from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, TextInput, Image, View, ImageBackground } from 'react-native';
//import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AuthContext } from "../App";
import axios from 'axios';

export default function RegistrationScreen({ navigation }) {
    const [name, setName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    // GoogleSignin.configure({
    //   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
    //   webClientId: '770482334222-it2m5p0lrafa25gu8h5tmr4t1m5ch48a.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    // });

    const { signUp } = React.useContext(AuthContext);
  
    return (
      <View style={{flex: 1}}>
        <View          
          style={{width: '100%', height: '100%'}}
        >
          <View
                style={styles.logo}
          />
          <View style={styles.container}>
            <View style={styles.inputView} >
              <TextInput
                placeholder="Name"
                value={name}
                onChangeText={setName}
                style={styles.inputText}
              />
            </View>
            <View style={styles.inputView} >
              <TextInput
                placeholder="Email"
                value={username}
                onChangeText={setUsername}
                style={styles.inputText}
              />
            </View>
            <View style={styles.inputView} >
              <TextInput
                placeholder="Password"
                value={password}
                style={styles.inputText}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
            <View style={{alignSelf: 'flex-end'}}>
              <TouchableOpacity>
                <Text style={styles.forgotPass} onPress={() => navigation.navigate('Registration')}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.loginBtn} onPress={() => signUp({ name, username, password })}>
              <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'column' }}>
                <Text style={styles.orText}>OR</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}> 
            
            {/* <GoogleSigninButton
              style={{ width: 192, height: 48 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={this.signIn1} /> */}
              
              <Icon.Button
                name="facebook"
                backgroundColor="#3b5998"
                onPress={() => alert('Login with Facebook')} />
            </View>
            <View style={styles.footerBottom}>
              <Text style={styles.havAcc}>Already have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.bottomText} onPress={() => navigation.navigate('SignIn')}>Sign In</Text>
              </TouchableOpacity>
            </View>
            
            {/* <TouchableOpacity>
              <Text style={styles.loginText} onPress={() => navigation.navigate('Registration')}>Signup</Text>
            </TouchableOpacity>   */}
          </View>
          
        </View>        
      </View>
    ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  logo:{
    width:500,
    height:100,
    backgroundColor: '#FF0000'
  },
  inputView:{
    width:"80%",
    borderRadius:25,
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 2,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    //backgroundColor:"#FF0000",
    backgroundColor:"#da3015",
    borderRadius:10,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  },
  forgotPass:{
    paddingRight:20,
    color: "#a4a4a4",
    marginRight: 35,
    marginBottom: 0
  },
  orText:{
    display:"flex",
    color: "#000000",
    marginTop: 10
  },
  footerBottom:{
    flexDirection: 'row',
    marginTop:40
  },
  havAcc:{
    color: "#a4a4a4"
  },
  bottomText:{
    color: "#1e1e1e",
    fontWeight: "bold"
  }
});