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



class ServiceList extends Component {
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
        <View style={styles.imageArea}>
          <Image source={require('./images/details-image.jpg')} style={styles.banner} />
        </View>
        <View style={styles.bodyArea}>
          <Text style={styles.pageTitle}>Mike West</Text>
          <Text style={styles.address}><Icon name="map-marker" color="#da3015" size={20} /> 18/9 Western city mall Kolkata-700123</Text>
          <View style={{flexDirection:'row', marginBottom:12}}>
            <View>
              <Text style={styles.number}>
              <Icon name="star" color="#4c7cff" size={14} />
              <Icon name="star" color="#4c7cff" size={14} />
              <Icon name="star" color="#4c7cff" size={14} />
              <Icon name="star" color="#dedede" size={14} />
              <Icon name="star" color="#dedede" size={14} /> 3.2</Text>
            </View>
            <View>
              <Text style={[styles.number, {marginLeft:18}]}>
                <FatherIcon name="phone-call" color="#da3015" size={14} />  +91 9875516658</Text>
            </View>
          </View>

          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            <View>
              <View style={{flexDirection:'row'}}>
                <Text style={[styles.para, {color:'#da3015', marginRight:3}]}>Skill :</Text>
                <Text style={styles.para}>Beautician</Text>
              </View>
            </View>
            <View style={{marginLeft:14}}>
              <View style={{flexDirection:'row'}}>
                <Text style={[styles.para, {color:'#da3015', marginRight:3}]}>Total Service :</Text>
                <Text style={styles.para}>200</Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection:'row'}}>
                <Text style={[styles.para, {color:'#da3015', marginRight:3}]}>Cost :</Text>
                <Text style={styles.para}>$ 100 / hr (approx)</Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection:'row', flexWrap:'wrap'}}>
              <Text style={[styles.paraBig, {color:'#0749ff', marginRight:3}]}>Open Now :</Text>
              <Text style={styles.paraBig}>10am to 5pm(Sun-Fri)</Text>
          </View>
          

        </View>
    </View>
  )
  }
}

export default ServiceList;

const styles = StyleSheet.create({
  mainWrapper:{
    flex:1,
    backgroundColor:'#FFF'
  },
  imageArea:{
    height:350,
    backgroundColor:"#000",
    overflow:'hidden'
  },
  banner:{
    width:'100%',
    height:'100%',
    resizeMode:"contain"
  },
  bodyArea:{
    flex:2,
    paddingVertical:12,
    paddingHorizontal:20
  },
  pageTitle:{
    color:"#404040",
    fontSize:22,
    fontWeight:'700',
    marginBottom:10
  },
  address:{
    color:"#6d6d6d",
    fontSize:15,
    marginBottom:10
  },
  number:{
    color:"#6d6d6d",
    fontSize:16
  },
  para:{
    color:"#6d6d6d",
    fontSize:14,
    marginBottom:10
  },
  paraBig:{
    fontSize:16,
    color:'#6d6d6d'
  }
  
});



