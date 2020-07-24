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
        <ScrollView>
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
            <View style={{marginTop:20}}>
              <View style={{flexDirection:'row', alignItems:"center", justifyContent:'space-between', borderBottomColor:'#707070', borderBottomWidth:1}}>
                <View style={{flexDirection:'row', alignItems:"center"}}>
                  <Text style={styles.reviewTitle}>All Reviews</Text>
                  <Text style={styles.reviewCount}>28</Text>
                </View>
                <View style={{flexDirection:'row', alignItems:"center", borderBottomWidth:2, borderBottomColor:"#da3015"}}>
                  <Picker style={{ height:30, width: 130 }}>
                    <Picker.Item label="Newest" value="Newest" />
                  </Picker>
                  <Icon name="bell" color="#737272" size={16}/>
                </View>
              </View>
              <View style={styles.singleReview}>
                <Image source={require('./images/review-user.png')} />
                <View style={{width:'80%', paddingLeft:10}}>
                  <View style={{flexDirection:'row', alignItems:"flex-end", marginBottom:8}}>
                    <Text style={styles.reviewerName}>Jean Dolly</Text>
                    <Text style={styles.ratings}><Icon name="star" color="#4c7cff"/> . 2 DAYS AGO</Text>
                  </View>
                  <Text style={styles.reviewText}>Too much professional.I just loved the hair spa & I'll highly recommend her. She is awesome at her work.</Text>
                </View>
              </View>
            </View>
            <View style={styles.bottomView}>
              <TouchableOpacity
                style={styles.bookBtn}
                onPress={() =>
                  this.props.navigation.navigate('BookingScreen', {service_id: this.props.route.params.service_id, user_id: this.props.route.params.user_id})
                }>
                <Text style={styles.loginText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
  },
  reviewTitle:{
    color:"#000000",
    fontSize:14
  },
  reviewCount:{
    color:"#000000",
    fontSize:12,
    marginLeft:5,
    backgroundColor:'#e5e2e2',
    paddingHorizontal:3,
    paddingVertical:3
  },
  singleReview:{
    flexDirection:'row',
    alignItems:'flex-start',
    borderBottomColor:'#dbdbdb',
    borderBottomWidth:1,
    paddingVertical:14
  },
  reviewerName:{
    fontSize:14,
    color:"#da3015",
    fontWeight:'500',
    marginRight:8
  },
  ratings:{
    color:"#da3015",
    fontSize:10
  },
  reviewText:{
    color:"#6d6d6d",
    fontSize:12,
    fontWeight:"500",
    lineHeight:14
  },
  bottomView: {
    width: '100%',
    //height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    /* position: 'absolute',
    bottom: 0, */
  },
  bookBtn: {
    width: '100%',
    //backgroundColor:"#FF0000",
    backgroundColor: '#da3015',
    borderRadius: 10,
    paddingVertical: 20,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 'auto'
    /* height: 50,
    justifyContent: 'center', */
    //marginTop: 20,
    //marginBottom: 10,
  },
  loginText: {
    color: 'white',
  }
  
});