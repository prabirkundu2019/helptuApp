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
  Picker
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ficon from 'react-native-vector-icons/FontAwesome5';
import Micon from 'react-native-vector-icons/MaterialIcons';
import FatherIcon from 'react-native-vector-icons/Feather';


class RadioButton extends Component {
	state = {
		value: null,
	};

	render() {
    const { options } = this.props;
		const { value } = this.state;

		return (
			<View style={styles.radioWrapper}>
				{options.map(item => {
					return (
						<View key={item.key} style={styles.buttonContainer}>
              <TouchableOpacity
                  style={styles.circle}
                  onPress={() => {
                      this.setState({
                          value: item.key,
                      });
                  }}
							>
							{value === item.key && <View style={styles.checkedCircle} />}
							</TouchableOpacity>
              <Text 
                  style={styles.radioLable} 
                  onPress={() => { this.setState({ value: item.key });}}>
                      {item.text}
              </Text>							
						</View>
					);
				})}
			</View>
		);
	}
}


class SettingScreen extends Component {
  checkRadio = (value) =>{
    this.setState({
        type: value
    })
  }
  render(){
  let options = [
    {
        key: 'Add a Place',
        text: 'Add a Place',
    },
    {
        key: 'Places you’ve Added',
        text: 'Places you’ve Added',
    }
  ];
  return(    
    <View style={styles.mainWrapper}>
        <View style={styles.upperTextSec}>
          <Text style={styles.heading1}>Settings</Text>
        </View>
        <View style={styles.curveArea}>
          <ScrollView style={styles.padding}>
            <View>
              <View style={styles.singleRow}>
                <FatherIcon name="map-pin" size={18} color="#de4831" style={styles.icon}/>
                <Text style={styles.heading}>Place</Text>
                <RadioButton options={options} onSelecting={this.checkRadio} />
              </View>

              <View style={styles.singleRow}>
                <Ficon name="user-edit" size={16} color="#de4831" style={styles.icon}/>
                <Text style={styles.heading}>Edit Profile</Text>
                <Text style={styles.subHeading}>Change your name, description and profile photo</Text>
              </View>

              <View style={styles.singleRow}>
                <Micon name="notifications" size={18} color="#de4831" style={styles.icon}/>
                <Text style={styles.heading}>Notification Settings</Text>
                <Text style={styles.subHeading}>Define what alets and notifications you want to see</Text>
              </View>

              <View style={styles.singleRow}>
                <Ficon name="link" size={18} color="#de4831" style={styles.icon}/>
                <Text style={styles.heading}>Connected Accounts</Text>
                <Text style={styles.subHeading}>Facebook Permission</Text>
              </View>

              <View style={[styles.singleRow, {borderBottomWidth:0}]}>
                <Icon name="settings" size={18} color="#de4831" style={styles.icon}/>
                <Text style={styles.heading}>Account Settings</Text>
                <Text style={styles.subHeading}>Change your Email or delete your account</Text>
              </View>
            </View>
          </ScrollView>
        </View>
    </View>
  )
  }
}

export default SettingScreen;

const styles = StyleSheet.create({
  mainWrapper:{
    flex:1,
    backgroundColor:'#da3015'
  },
  upperTextSec:{
    justifyContent:'center',
    height:160,
    paddingHorizontal:22
  },
  heading1:{
    color:"#fff",
    fontSize:25,
    fontWeight:'700',
    marginBottom:5
  },
  curveArea:{
    width:'100%',
    flex:1,
    backgroundColor:'#FFF',
    borderTopLeftRadius:35,
    borderTopRightRadius:35,
    paddingHorizontal:22,
    paddingVertical:22
  },
  padding:{
    paddingHorizontal:15,
    paddingVertical:20
  },
  flex:{
    flexDirection:'row',
    alignItems:'center'
  },
  singleRow:{
    paddingLeft:30,
    paddingBottom:15,
    borderBottomWidth:1,
    borderBottomColor:"#e2e2e2",
    marginBottom:15
  },
  icon:{
    position:'absolute',
    left:0,
    top:5
  },
  heading:{
    color:'#404040',
    fontSize:20,
    marginBottom:8
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
},
radioWrapper:{
  flexDirection:"row",
},
  circle: {
    height: 14,
    width:14,
    borderRadius: 10,
    borderWidth:1,
    borderColor: '#6e6e6e',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:4,
},

checkedCircle: {
  width: 12,
  height: 12,
  borderRadius: 7,
  backgroundColor: '#de4831',
},
radioLable:{
  fontSize:15,
  color: '#6d6d6d',
  marginRight:15
},
subHeading:{
  fontSize:15,
  color: '#6d6d6d'
}
});



