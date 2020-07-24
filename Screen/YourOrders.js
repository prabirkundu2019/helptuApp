import React, {useState} from 'react';
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
import Ficon from 'react-native-vector-icons/FontAwesome';
import Micon from 'react-native-vector-icons/MaterialIcons';

const YourOrders = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return(    
    <View style={styles.mainWrapper}>
        <ScrollView style={styles.padding}>
            <View>
              <Text style={styles.mainHeading}>Your Orders</Text>
            </View>
            <View style={styles.singleOrders}>
              <View style={styles.orderHeader}>
                <View style={styles.fav}>
                  <Micon name="favorite" size={16} color="#da3015" />
                </View>
                <View style={styles.flex}>
                  <Image source={require('./images/user-image.png')} style={{width:60, height:60, borderRadius:8}} />
                  <View style={{width:'55%', paddingLeft:15}}>
                    <Text style={[styles.mainHeading, {fontSize:18, marginBottom:5}]}>Jone Kater</Text>
                    <View style={[styles.flex, {alignItems:'flex-start'}]}>
                      <Icon name="map-marker" size={15} color="#404040" style={{marginTop:2}} /><Text style={styles.subheading}>62 Kings Road Watford Wd30 3WX , Uk</Text></View>
                  </View>
                </View>
              </View>
              <View style={styles.orderDetails}>
                <View style={{marginBottom:10}}>
                  <Text style={styles.headingText}>Ac Reapairing</Text>
                  <Text style={styles.subHeadingText}>Hitachi Ac</Text>
                </View>
                <View style={{marginBottom:10}}>
                  <Text style={styles.headingText}>Ordered On</Text>
                  <Text style={styles.subHeadingText}>19 Jun 2020 at 1.56 pm</Text>
                </View>
                <View>
                  <Text style={styles.headingText}>Total Amount</Text>
                  <Text style={styles.subHeadingText}>$ 50.00</Text>
                </View>
              </View>
              <View style={[styles.flex, {paddingVertical:10, justifyContent:'space-between'}]}>
                <View>
                  <View style={styles.flex}>
                    <Text style={styles.statusText}>Delivered <Icon name="star" size={15} color="#da3015" style={{marginTop:2}} /></Text><Text style={[styles.statusText, {color:"#6d6d6d"}]}>4.5</Text>
                    </View>
                </View>
                <View>
                  <TouchableOpacity><Text style={styles.statusText}><Ficon name="repeat" size={15} color="#da3015" style={{marginTop:2}} /> Repeat order</Text></TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.singleOrders}>
              <View style={styles.orderHeader}>
                <View style={styles.flex}>
                  <Image source={require('./images/user-image.png')} style={{width:65, height:65, borderRadius:8}} />
                  <View style={{width:'55%', paddingLeft:15}}>
                    <Text style={[styles.mainHeading, {fontSize:18, marginBottom:5}]}>Jone Kater</Text>
                    <View style={[styles.flex, {alignItems:'flex-start'}]}>
                      <Icon name="map-marker" size={15} color="#404040" style={{marginTop:2}} /><Text style={styles.subheading}>62 Kings Road Watford Wd30 3WX , Uk</Text></View>
                  </View>
                </View>
              </View>
              <View style={styles.orderDetails}>
                <View style={{marginBottom:10}}>
                  <Text style={styles.headingText}>Ac Reapairing</Text>
                  <Text style={styles.subHeadingText}>Hitachi Ac</Text>
                </View>
                <View style={{marginBottom:10}}>
                  <Text style={styles.headingText}>Ordered On</Text>
                  <Text style={styles.subHeadingText}>19 Jun 2020 at 1.56 pm</Text>
                </View>
                <View>
                  <Text style={styles.headingText}>Total Amount</Text>
                  <Text style={styles.subHeadingText}>$ 50.00</Text>
                </View>
              </View>
              <View style={[styles.flex, {paddingVertical:10, justifyContent:'space-between'}]}>
                <View>
                  <View style={styles.flex}>
                    <Text style={styles.statusText}>Delivered <Icon name="star" size={15} color="#da3015" style={{marginTop:2}} /></Text><Text style={[styles.statusText, {color:"#6d6d6d"}]}>4.5</Text>
                    </View>
                </View>
                <View>
                  <TouchableOpacity><Text style={styles.statusText}><Ficon name="repeat" size={15} color="#da3015" style={{marginTop:2}} /> Repeat order</Text></TouchableOpacity>
                </View>
              </View>
            </View>
        </ScrollView>
    </View>
  )
}

export default YourOrders;

const styles = StyleSheet.create({
  mainWrapper:{
    flex:1,
    backgroundColor:'#FFF'
  },
  padding:{
    paddingVertical:25,
    paddingHorizontal:20
  },
  mainHeading:{
    color:'#da3015',
    fontSize:24,
    fontWeight:'700',
    marginBottom:20
  },
  orderHeader:{
    paddingBottom:15,
    borderBottomWidth:2,
    borderBottomColor:'#eae9e9'
  },
  flex:{
    flexDirection:'row',
    alignItems:'center'
  },
  subheading:{
    color:'#404040',
    fontSize:13
  },
  singleOrders:{
    borderWidth:1,
    borderColor:'#eae9e9',
    borderRadius:8,
    paddingHorizontal:10,
    paddingTop:10,
    marginBottom:30
  },
  orderDetails:{
    paddingTop:14,
    paddingBottom:15,
    borderBottomWidth:2,
    borderBottomColor:'#eae9e9'
  },
  headingText:{
    color:"#404040",
    fontSize:18,
    marginBottom:5
  },
  subHeadingText:{
    fontSize:15,
    color:"#6d6d6d"
  },
  statusText:{
    fontSize:15,
    color:"#da3015"
  },
  fav:{
    width:26,
    height:26,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    right:0,
    top:20,
    backgroundColor:"#FFF",
    borderRadius:50,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  }
  
});



