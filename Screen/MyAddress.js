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


class MyAddress extends Component {
  checkRadio = (value) =>{
    this.setState({
        type: value
    })
  }
  render(){
    return(    
        <View style={[styles.container, styles.bgWhite]}>
            <ScrollView>
                <View style={{}}>
                <SafeAreaView style={styles.p_20}>
                    <View>
                    <TouchableOpacity>
                        <Feather
                        name="arrow-left"
                        style={styles.colorTheme}
                        size={25}
                        onPress={() => this.props.navigation.goBack()}
                    />
                    </TouchableOpacity>
                    <View style={styles.mt_20}>
                        <Text style={[styles.titlePage]}>My Addresses</Text>
                        {/* <Text style={[styles.titleSub]}>We are happy to help you</Text> */}
                    </View>
                    </View>

                    <View>
                    <View style={styles.action}>
                        <TextInput
                        style={styles.inputStyle}
                        label="Add Address"
                        //underlineColor="#fd3400"
                        placeholder="123 A/1, xyz Road...."
                        />
                        <Feather
                        style={[styles.inputIcon, styles.colorTheme]}
                        name="plus"
                        //color="#ACACAC"
                        size={30}
                        />
                    </View>
                    </View>

                    <View
                    style={[
                        styles.justifyBetween,
                        styles.borderBtm,
                        styles.py_10,
                        styles.mt_20,
                    ]}>
                    <Text style={[styles.addressCount]}>1)</Text>
                    <View style={styles.f1}>
                        <Text style={styles.addressPlace}>Home</Text>
                        <Text>28, Dixon lane, Bose Avenue Kolkata- 700145</Text>
                    </View>
                    <View style={{alignSelf: 'flex-end'}}>
                        <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={
                            <Text onPress={openMenu}>
                            <Feather
                                style={[styles.colorTheme, styles.p_0]}
                                name="more-vertical"
                                size={32}
                            />
                            </Text>
                        }>
                        <Menu.Item onPress={() => {}} title="Edit" />
                        <Menu.Item onPress={() => {}} title="Delete" />
                        </Menu>
                    </View>
                    </View>

                    <View
                    style={[
                        styles.justifyBetween,
                        styles.borderBtm,
                        styles.py_10,
                        styles.mt_20,
                    ]}>
                    <Text style={[styles.addressCount]}>2)</Text>
                    <View style={styles.f1}>
                        <Text style={styles.addressPlace}>Office</Text>
                        <Text>
                        5/18/1 Neogi Para Road, Deshbandhu Road, Kolkata- 7000067
                        </Text>
                    </View>
                    <View style={{alignSelf: 'flex-end'}}>
                        <Menu
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={
                            <Text onPress={openMenu}>
                            <Feather
                                style={[styles.colorTheme, styles.p_0]}
                                name="more-vertical"
                                size={32}
                            />
                            </Text>
                        }>
                        {/* <Menu.Item onPress={() => {}} title="Edit" />
                        <Menu.Item onPress={() => {}} title="Delete" /> */}
                        </Menu>
                    </View>
                    </View>
                </SafeAreaView>
                </View>
            </ScrollView>
        </View>
    )
  }
}

export default MyAddress;

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