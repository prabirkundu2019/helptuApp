import React from 'react';
import { View, StyleSheet, Dimensions, ImageBackground,TouchableOpacity, Image } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import FontIcon5 from 'react-native-vector-icons/FontAwesome5'

//import{ AuthContext } from '../components/context';


export function DrawerContent(props) {

    const paperTheme = useTheme();

    //const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(     
        <View style={{flex:1, backgroundColor:"#da3015"}}>            
            <DrawerContentScrollView {...props}>               
                <View style={styles.drawerContent}>                
                    <View style={styles.userInfoSection}>
                            <Avatar.Image 
                                source={require('./images/bell.png')}
                                size={62}
                            />
                            <View>
                                <Title style={styles.title}>Kate Wilson</Title>
                            </View>
                    </View>
                    <View style={{paddingHorizontal:20}}>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Become a service</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.drawerSection}>                    
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon name="home" color="#FFF" size={20} style={styles.MenuIcon} />
                            )}
                            label="Home"
                            labelStyle={{color:'#FFF'}}
                            onPress={() => {props.navigation.navigate('Home')}}
                            style={{height:30}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontIcon name="user" color="#FFF" size={20} style={styles.MenuIcon} />
                            )}
                            label="Profile"
                            labelStyle={{color:'#FFF'}}
                            onPress={() => {props.navigation.navigate('Home')}}
                            style={{height:30}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontIcon name="map-marker" color="#FFF" size={20} style={styles.MenuIcon} />
                            )}
                            label="Nearby Me"
                            labelStyle={{color:'#FFF'}}
                            onPress={() => {props.navigation.navigate('Home')}}
                            style={{height:32}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontIcon name="heart" color="#FFF" size={20} style={styles.MenuIcon} />
                            )}
                            label="Favorites"
                            labelStyle={{color:'#FFF'}}
                            onPress={() => {props.navigation.navigate('Home')}}
                            style={{height:32}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('./images/bell.png')} style={styles.MenuIconImage} />
                            )}
                            label="Notification"
                            labelStyle={{color:'#FFF'}}
                            onPress={() => {props.navigation.navigate('Home')}}
                            style={{height:33}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('./images/bookmark-icon.png')} style={styles.MenuIconImage} />
                            )}
                            label="Address Book"
                            labelStyle={{color:'#FFF'}}
                            onPress={() => {props.navigation.navigate('Home')}}
                            style={{height:32}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('./images/scooter-icon.png')} style={styles.MenuIconImage} />
                            )}
                            label="Your Orders"
                            labelStyle={{color:'#FFF'}}
                            onPress={() => {props.navigation.navigate('Home')}}
                            style={{height:35}}
                        />                    
                    </View>

                    <View style={styles.drawerSection}>                    
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Image source={require('./images/tag.png')} style={styles.MenuIconImage} />
                            )}
                            label="Promotions"
                            labelStyle={{color:'#FFF'}}
                            onPress={() => {props.navigation.navigate('Home')}}
                            style={{height:34}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon name="settings" color="#FFF" size={20} style={styles.MenuIcon} />
                            )}
                            label="Settings"
                            labelStyle={{color:'#FFF'}}
                            onPress={() => {props.navigation.navigate('Home')}}
                            style={{height:33}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontIcon5 name="headset" color="#FFF" size={20} style={styles.MenuIcon} />
                            )}
                            label="Help"
                            labelStyle={{color:'#FFF'}}
                            onPress={() => {props.navigation.navigate('Home')}}
                            style={{height:32}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon name="thumbs-up-down" color="#FFF" size={20} style={styles.MenuIcon} />
                            )}
                            label="Send Feedback"
                            labelStyle={{color:'#FFF'}}
                            onPress={() => {props.navigation.navigate('Home')}}
                            style={{height:32}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <FontIcon name="star" color="#FFF" size={20} style={styles.MenuIcon} />
                            )}
                            label="Rate us on the Play Store"
                            labelStyle={{color:'#FFF'}}
                            onPress={() => {props.navigation.navigate('Home')}}
                            style={{height:33}}
                        />                   
                    </View>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color="#FFF"
                        size={20}
                        style={styles.MenuIcon}
                        />
                    )}
                    labelStyle={{color:'#FFF'}}
                    label="Logout"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent:{
        paddingHorizontal:15
    },
    bottomDrawerSection:{
        paddingHorizontal:15
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
    userInfoSection: {
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        paddingVertical:20        
    },
    title: {
      fontSize: 18,
      marginTop: 3,
      fontWeight: '400',
      color:'#FFF',
      marginLeft:15
    },
    btn:{
        width:180,
        paddingHorizontal:20,
        paddingVertical:7,
        alignItems:'center',
        backgroundColor:'#eb3d21',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnText:{
        color:"#FFF",
        fontSize:15,
        fontWeight:'700'
    },
    drawerSection:{
        paddingBottom:10,
        borderBottomColor:'#ee9e92',
        borderBottomWidth:2
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    MenuIcon:{
        width:23,
        height:20,
        alignItems:'center'
    },
    MenuIconImage:{
        width:23,
        resizeMode:'contain'
    }
  });