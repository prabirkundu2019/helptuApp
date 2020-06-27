import * as React from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, TextInput, Image, View, ActivityIndicator } from 'react-native';
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Spinner from 'react-native-loading-spinner-overlay';
import { DrawerContent } from './Screen/DrawerContent';

import LoginScreen from './Screen/LoginScreen';
import RegistrationScreen from './Screen/RegistrationScreen';

import HomeScreen from './Screen/HomeScreen';
import SearchService from './Screen/SearchService';
import AllService from './Screen/AllService';
import ServiceProvider from './Screen/ServiceProvider';
import MapServiceProvider from './Screen/MapServiceProvider';
import ServiceDetail from './Screen/ServiceDetail';
import BookingScreen from './Screen/BookingScreen';

import BecomeService from './Screen/BecomeService';

import MyBooking from './Screen/MyBooking';
import Profile from './Screen/Profile';

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
const BookingStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} 
    options={{
      title: '',
      headerStyle: {
        backgroundColor: '#FFF',
        elevation: 0
      },
      headerRight: () => (
        <MatIcon onPress={() => navigation.toggleDrawer()} name="menu" color="#000" size={24} style={{marginRight:15}}/>
      ),
    }}/>
    <HomeStack.Screen name="Search" component={SearchService} />
    <HomeStack.Screen name="Service" component={AllService}   options={{headerShown: false}} />
    <HomeStack.Screen name="ServiceProvider" component={ServiceProvider}   options={{headerShown: false}} />
    <HomeStack.Screen name="MapServiceProvider" component={MapServiceProvider} />
    <HomeStack.Screen name="ServiceDetail" component={ServiceDetail}   options={{headerShown: true}} />
    <HomeStack.Screen name="BookingScreen" component={BookingScreen}   options={{headerShown: false}} />
  </HomeStack.Navigator>
);

const BookingStackScreen = () => (
  <BookingStack.Navigator>
    <BookingStack.Screen name="MyBooking" component={MyBooking}   options={{headerShown: false}} />
    <BookingStack.Screen name="BecomeService" component={BecomeService}   options={{headerShown: false}} />
  </BookingStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    activeColor= "#da3015"
    inactiveColor="#000"
  >
    <Tabs.Screen 
      name="Home" 
      component={HomeStackScreen} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tabs.Screen 
      name="My Booking" 
      component={BookingStackScreen}
      options={{
        tabBarLabel: 'My Booking',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="book" color={color} size={26} />
        ),
      }}
    />
    <Tabs.Screen 
      name="Help" 
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Help',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="help" color={color} size={26} />
        ),
      }}
    />
    <Tabs.Screen 
      name="Profile" 
      component={BecomeService} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tabs.Navigator>
);

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={TabsScreen} />
  </Drawer.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
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
  const [spinner, setSpinner] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);
  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        setSpinner(true);
        axios.post('https://carekro.com/helptu/index.php/api/login', data)
        .then(res=>{
          setSpinner(false);
          if(res.data.status == 1)
          {
            setUserToken(res.data.token);
            AsyncStorage.setItem('token', res.data.token);
            AsyncStorage.setItem('name', res.data.name);
            dispatch({ type: 'SIGN_IN', token: res.data.token });
          }else{
            alert(res.data.msg);
          }
        })
      },
      signOut: () => setUserToken(null),
      signUp: async data => {
        setSpinner(true);
        axios.post('https://carekro.com/helptu/index.php/api/registration', data)
        .then(res=>{
          setSpinner(false);
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
      <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      /> 
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
}