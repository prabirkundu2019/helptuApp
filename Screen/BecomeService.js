import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  TextInput,
  Image,
  View,
  ImageBackground,
  ScrollView,
  StyleSheet
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BecomeService = () => {

  return(    
    <View style={styles.mainWrapper}>
      <View style={styles.upperTextSec}>
        <Text style={styles.heading}>Become a Service Provider</Text>
        <Text style={styles.subHeading}>Please enter your personal details</Text>
      </View>
      <View style={styles.curveArea}>
          <ScrollView>
          <View style={styles.inputWrapper}>
            <TextInput placeholder="Your Name *" style={styles.inputField} />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput placeholder="Your Phone *" style={styles.inputField}/>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput placeholder="Your E-mail Id *" style={styles.inputField}/>
          </View>
          <View style={styles.inputWrapper}>
            <TextInput placeholder="Enter Your Location *" style={styles.inputField}/>
            <Icon name="map-marker" size={20} color="#da3015" style={styles.icon} />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Additional Requests</Text>
            <TextInput placeholder="Is there any more informations you'd like to ad about the restaurant? Mention it here......." multiline={true} scrollEnabled style={styles.inputField}/>
          </View>
          <TouchableOpacity style={styles.btnSubmit}><Text style={styles.btnLabel}>Submit</Text></TouchableOpacity>
          </ScrollView>
      </View>
    </View>
  )
}

export default BecomeService;

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
  heading:{
    color:"#FFF",
    fontSize:24,
    fontWeight:'700',
    marginBottom:5
  },
  subHeading:{
    color:"#FFF",
    fontSize:14
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
  inputWrapper:{
    marginBottom:20
  },
  inputField:{
    borderBottomColor:'#dbdbdb',
    borderBottomWidth:1,
    fontSize:16,
    color:"#6d6d6d",
    paddingLeft:10,
    paddingRight:30
  },
  icon:{
    position:'absolute',
    right:0,
    top:16,
  },
  inputLabel:{
    color:'#404040',
    fontSize:16,
    fontWeight:'700',
    marginBottom:10
  },
  btnSubmit:{
    backgroundColor:'#da3015',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    height:40,
    marginTop:20
  },
  btnLabel:{
    color:"#FFF",
    fontSize:15
  }
});