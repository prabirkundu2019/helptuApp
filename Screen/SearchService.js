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
import axios from 'axios';

class SearchService extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
        "results": []
    }
  }

  componentDidMount() {
  }

  onSearch = (search) => {
    if(search.trim() != "")
    {
        let data = {
            "search": search
        }
        axios.post('https://carekro.com/helptu/index.php/serviceApi/searchService',data)
        .then(response => {
          this.setState({
            "results": response.data.data
          })
        })
    }
  }

  render(){
    let result = this.state.results.map((service,index) => {
        return(
            <View style={styles.searchBox} key={index}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ServiceProvider', {service_id: service.service_id})}>
                    <Text>{service.service_name}</Text>
                </TouchableOpacity>
            </View>
        )
    })
    return(    
      <View style={styles.mainWrapper}>
          <ScrollView style={styles.padding}>  
              <View style={styles.searchBox}>
                <View style={styles.searchBoxInner}>
                  <TextInput 
                    placeholder="Search your services"
                    onChangeText={this.onSearch}
                  />
                </View>
              </View>
              {result}
          </ScrollView>
      </View>
    )
  }  
}

export default SearchService;

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