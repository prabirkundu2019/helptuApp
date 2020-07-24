import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import {
    DefaultTheme,
    TextInput,
    Button,
    Switch,
    Provider,
  } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: '#fd3400',
        accent: '#2b2b2b',
    },
};


class NotificationPreference extends Component {
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
                        Notification Preferences
                        </Text>
                        <Text style={[styles.titleSub, styles.colorWhite]}>
                        Change your notification preferences
                        </Text>
                    </View>
                    </View>
                </SafeAreaView>
                </View>
                <View>
                <SafeAreaView style={[styles.p_20]}>
                    <View
                    style={[
                        styles.alignCenterBetween,
                        styles.py_20,
                        styles.borderBtm,
                    ]}>
                    <View>
                        <Text style={styles.titleTheme}>Enable all</Text>
                        <Text>Tap to receive notifications</Text>
                    </View>
                    <View>
                        <Switch
                            theme={theme}
                        />
                    </View>
                    </View>

                    <View style={[styles.py_20, styles.borderBtm]}>
                    <View>
                        <Text style={styles.titleTheme}>Social notifications</Text>
                        <Text>
                        Get notified when someone follows your profile, or when you
                        get likes and comments on reviews and photos posted by you.
                        </Text>
                    </View>
                    <View style={[styles.alignCenterBetween, styles.mt_10]}>
                        <View style={styles.itemInline}>
                        <Feather
                            style={[styles.titleTheme, styles.pr_10]}
                            name="bell"
                            size={25}
                        />
                        <Text>Push</Text>
                        </View>
                        <View>
                        <Switch
                            theme={theme}
                        />
                        </View>
                    </View>
                    </View>

                    <View style={[styles.py_20, styles.borderBtm]}>
                    <View>
                        <Text style={styles.titleTheme}>Promos and offers</Text>
                        <Text>Receive promos and money-saving offers</Text>
                    </View>
                    <View style={[styles.alignCenterBetween, styles.mt_10]}>
                        <View style={styles.itemInline}>
                        <Feather
                            style={[styles.titleTheme, styles.pr_10]}
                            name="bell"
                            size={25}
                        />
                        <Text>Push</Text>
                        </View>
                        <View>
                        <Switch
                            theme={theme}
                        />
                        </View>
                    </View>
                    </View>

                    <View style={[styles.py_20, styles.borderBtm]}>
                    <View>
                        <Text style={styles.titleTheme}>Orders and purchases</Text>
                        <Text>
                        Receive updates related to your order status, memberships,
                        bookings and more
                        </Text>
                    </View>
                    <View style={[styles.alignCenterBetween, styles.mt_10]}>
                        <View style={styles.itemInline}>
                        <Feather
                            style={[styles.titleTheme, styles.pr_10]}
                            name="bell"
                            size={25}
                        />
                        <Text>Push</Text>
                        </View>
                        <View>
                        <Switch
                            theme={theme}
                        />
                        </View>
                    </View>
                    </View>

                    <TouchableOpacity
                    style={[styles.themeBg, styles.radius5, styles.mt_20]}>
                    <Text
                        style={[styles.py_10, styles.textCenter, styles.colorWhite]}>
                        Save Changes
                    </Text>
                    </TouchableOpacity>
                </SafeAreaView>
                </View>
            </ScrollView>
        </View>
    )
  }
}

export default NotificationPreference;

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