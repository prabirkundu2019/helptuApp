import React, {Component,useState} from 'react';
import {
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


class CustomerSupport extends Component {
  checkRadio = (value) =>{
    this.setState({
        type: value
    })
  }
  render(){
    return(    
        <View style={[styles.container, styles.bgWhite]}>
        <ScrollView>
            <View style={[styles.themeBg, styles.radiusBtmLeft]}>
            <SafeAreaView style={styles.p_20}>
                <View>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Feather name="arrow-left" color="#fff" size={25} />
                </TouchableOpacity>
                <View style={styles.py_30}>
                    <Text style={[styles.titlePage, styles.colorWhite]}>
                    Customer Support
                    </Text>
                    <Text style={[styles.titleSub, styles.colorWhite]}>
                    We are happy to help you
                    </Text>
                </View>
                </View>
            </SafeAreaView>
            </View>
            <View>
            <SafeAreaView style={[styles.p_20]}>
                <TouchableOpacity style={[styles.justifyBetween, styles.pb_20]}>
                <View>
                    <Text>Manage all your bookings</Text>
                </View>
                <View>
                    <Feather name="chevron-right" color="#DA3015" size={25} />
                </View>
                </TouchableOpacity>
                <Text style={[styles.optnTitle, styles.bgLight]}>
                Popular Solutions
                </Text>

                <TouchableOpacity
                style={[styles.justifyBetween, styles.py_10, styles.borderBtm]}>
                <View>
                    <Text>Cancel & Reschedule</Text>
                </View>
                <View>
                    <Feather name="chevron-right" color="#DA3015" size={25} />
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                style={[styles.justifyBetween, styles.py_10, styles.borderBtm]}>
                <View>
                    <Text>Account Settings</Text>
                </View>
                <View>
                    <Feather name="chevron-right" color="#DA3015" size={25} />
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                style={[styles.justifyBetween, styles.py_10, styles.borderBtm]}>
                <View>
                    <Text>Safety & Covid- 19 Queries</Text>
                </View>
                <View>
                    <Feather name="chevron-right" color="#DA3015" size={25} />
                </View>
                </TouchableOpacity>
                <Text style={[styles.optnTitle, styles.bgLight]}>F.A.Q</Text>

                <TouchableOpacity
                style={[styles.justifyBetween, styles.py_10, styles.borderBtm]}>
                <View>
                    <Text>Booking Services</Text>
                </View>
                <View>
                    <Feather name="chevron-right" color="#DA3015" size={25} />
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                style={[styles.justifyBetween, styles.py_10, styles.borderBtm]}>
                <View>
                    <Text>Paying for Services</Text>
                </View>
                <View>
                    <Feather name="chevron-right" color="#DA3015" size={25} />
                </View>
                </TouchableOpacity>

                <TouchableOpacity
                style={[styles.justifyBetween, styles.py_10, styles.borderBtm]}>
                <View>
                    <Text>A guide to Help Tu</Text>
                </View>
                <View>
                    <Feather name="chevron-right" color="#DA3015" size={25} />
                </View>
                </TouchableOpacity>
            </SafeAreaView>
            </View>
        </ScrollView>
        </View>
    )
  }
}

export default CustomerSupport;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    itemInline: {
      display: 'flex',
      flexDirection: 'row',
    },
    justifyBetween: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      //alignItems: 'center',
    },
    alignCenterBetween: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textCenter: {
      textAlign: 'center',
    },
    f1: {
      flex: 1,
    },
    f2: {
      flex: 2,
    },
    xyz: {
      display: 'flex',
      //height: 300,
      flex: 2,
      alignItems: 'stretch',
    },
    themeBg: {
      backgroundColor: '#DA3015',
    },
    bgWhite: {
      backgroundColor: '#ffffff',
    },
    bgLight: {
      backgroundColor: '#F4F4F4',
    },
    colorTheme: {
      color: '#DA3015',
    },
    colorWhite: {
      color: '#FFFFFF',
    },
    textCenter: {
      textAlign: 'center',
    },
    mtAuto: {
      marginTop: 'auto',
    },
    p_0: {
      padding: 0,
    },
    pl_10: {
      paddingLeft: 10,
    },
    pr_10: {
      paddingRight: 10,
    },
    py_10: {
      paddingVertical: 10,
    },
    py_20: {
      paddingVertical: 20,
    },
    py_30: {
      paddingVertical: 30,
    },
    p_20: {
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    mt_10: {
      marginTop: 10,
    },
    mt_20: {
      marginTop: 20,
    },
    pb_20: {
      paddingBottom: 20,
    },
    borderBtm: {
      borderBottomWidth: 1,
      borderColor: '#DBDBDB57',
    },
    radius5: {
      borderRadius: 5,
    },
    radiusTop: {
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    radiusBtmLeft: {
      borderBottomLeftRadius: 30,
    },
    titlePage: {
      fontSize: 26,
    },
    optnTitle: {
      fontSize: 22,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    inputStyle: {
      flex: 1,
      //marginTop: Platform.OS === 'ios' ? 0 : -12,
      //marginTop: 20,
      //marginTop: 20,
      fontSize: 20,
      paddingLeft: 30,
      paddingBottom: 10,
      backgroundColor: 'transparent',
    },
    action: {
      flexDirection: 'row',
      //justifyContent: 'space-between',
      //marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5,
    },
    inputIcon: {
      position: 'absolute',
      left: 0,
      bottom: 20,
    },
    addressCount: {
      color: '#DA3015',
      fontSize: 20,
      marginRight: 10,
    },
    addressPlace: {
      fontSize: 20,
      marginRight: 10,
      paddingBottom: 2,
    },
    titleTheme: {
      fontSize: 23,
      color: '#DA3015',
    },
});



