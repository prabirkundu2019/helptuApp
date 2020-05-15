import * as React from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, TextInput, Image, View, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions } from '@react-navigation/native';

import LoginScreen from './Screen/LoginScreen';
import RegistrationScreen from './Screen/RegistrationScreen';
import AllService from './Screen/AllService';

import axios from 'axios';

export const AuthContext = React.createContext();
const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={LoginScreen}  options={{headerShown: false}} />
    <AuthStack.Screen name="Registration" component={RegistrationScreen}  options={{headerShown: false}} />
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Service" component={AllService}   options={{headerShown: false}} />
  </HomeStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="My Booking" component={HomeStackScreen} />
    <Tabs.Screen name="Help" component={HomeStackScreen} />
    <Tabs.Screen name="Profile" component={HomeStackScreen} />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeStackScreen} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={TabsScreen}
        options={{
          animationEnabled: false
        }}
      />
    ) : (
      <RootStack.Screen name="Auth" component={AuthStackScreen} options={{ animationEnabled: false }}
      />
    )}
  </RootStack.Navigator>
);

function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});



export default function App({ navigation }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        setIsLoading(true);
        axios.post('https://carekro.com/helptu/index.php/api/login', data)
        .then(res=>{
          setIsLoading(false);
          if(res.data.status == 1)
          {
            setUserToken(res.data.token);
            AsyncStorage.setItem('token', res.data.token);
            dispatch({ type: 'SIGN_IN', token: res.data.token });
          }else{
            alert(res.data.msg);
          }
        })
      },
      signOut: () => setUserToken(null),
      signUp: async data => {
        setIsLoading(true);
        axios.post('https://carekro.com/helptu/index.php/api/registration', data)
        .then(res=>{
          setIsLoading(false);
          if(res.data.status == 1)
          {
            setUserToken(res.data.token);
            AsyncStorage.setItem('token', res.data.token);
            dispatch({ type: 'SIGN_IN', token: res.data.token });
          }else{
            alert(res.data.msg);
          }
        })
      },
    }),
    []
  ); 
  
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  // if(setIsLoading){
  //   <ActivityIndicator color={"#fff"} />
  // }

  // if (isLoading) {
  //   return SplashScreen();
  // }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}