import React, {Component, PropTypes} from 'react';
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
import { connect } from 'react-redux';
import { getServices } from '../src/actions/service';
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      "userName": ""
    }
  }

  async componentDidMount() {
    let userName = await AsyncStorage.getItem('name');
    this.setState({
      "userName": userName
    })
    //this.getDatarows();
    //console.log(AsyncStorage.getItem("token"));
    //this.loadMoreData();
    this.props.getServices();
  }

  render(){
    console.log(this.props.services);
    let service = this.props.services.map((category, index) => {
      return(
        <View style={styles.SingleService}>
          <Text style={styles.serviceHeading}>{category.category_name}</Text>
          <View style={{width:50, height:3, backgroundColor:"#da3015", marginBottom:10}}></View>
          <ScrollView horizontal={true}>
          {category.services.map((service) => 
            { 
              var serviceImage = {uri: 'https://carekro.com/helptu/new_admin/uploads/1591180147download.jpg'}
              return(
                <View style={styles.SingleServiceBox}>
                  <View style={styles.imageArea}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ServiceProvider', {service_id: service.service_id})}>
                      <Image source={require('./images/fs1.png')} />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.serviceCaption}>{service.service_name}</Text>
                </View>
              )
            }
          )}
          </ScrollView>
        </View>
      )
    })
    return(    
      <View style={styles.mainWrapper}>
          <ScrollView style={styles.padding}>
              <View style={styles.profileInfo}>
                  <Image source={require('./images/user-image.png')} />
                  <View style={{marginLeft:15}}>
                    <Text style={styles.heading}>Hello!</Text>
                    <Text style={styles.userName}>{this.state.userName}</Text>
                  </View>
              </View>
  
              <View style={styles.searchBox}>
                <View style={styles.searchBoxInner}>
                  <Icon name='map-marker' size={20} color="#da3015" style={styles.marker} />
                  <TextInput
                    onTouchStart={()=>  this.props.navigation.navigate('Search')}
                    placeholder="Please enter your text" />
                  <View style={styles.pickerWrapper}>
                    <Picker
                    //selectedValue={selectedValue}
                    style={{ height: 40, width: 120, fontSize:10 }}
                    itemStyle={{color:'#000'}}
                    //onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                      <Picker.Item label="Kolkata" value="Kolkata" />
                      <Picker.Item label="Asansol" value="Asansol" />
                    </Picker>
                  </View>
                </View>
              </View>
              {service}
          </ScrollView>
      </View>
    )
  }  
}

const mapStateToProps = state => ({
  services: state.service.services
});
const mapDispatchToProps = {
  getServices
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  mainWrapper:{
    flex:1,
    backgroundColor:'#FFF'
  },
  padding:{
    paddingHorizontal:15,
    paddingVertical:30
  },
  profileInfo:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:30
  },
  heading:{
    color:"#da3015",
    fontSize:22,
    fontWeight:'700'
  },
  userName:{
    color:"#192130",
    fontSize:15
  },
  serviceHeading:{
    color:"#da3015",
    fontSize:22,
    fontWeight:'700',
    marginBottom:10
  },
  SingleService:{
    marginBottom:30
  },
  SingleServiceBox:{
    width:130,
    padding:10,
    alignItems:'center',
  },
  imageArea:{
    width:'100%',
    height:100,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FFF',
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginBottom:10
  },
  serviceCaption:{
    color:"#000",
    fontSize:14
  },
  searchBox:{
    paddingHorizontal:5,
    marginBottom:30
  },
  searchBoxInner:{
    flexDirection:"row",
    alignItems:'center',
    paddingLeft:30,
    paddingRight:130,
    paddingVertical:5,
    backgroundColor:"#FFF",
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation:3,
  },
  marker:{
    position:'absolute',
    left:10
  },
  pickerWrapper:{
    position:'absolute',
    right:0,
    borderLeftColor:'#e5e5e5',
    borderLeftWidth:2
  }
  
});