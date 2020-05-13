import React, { Component, PropTypes } from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, TextInput, Image, View, TouchableHighlight, Picker } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { connect } from 'react-redux';
import { getItems, getSalesOrderLines } from '../../src/actions/salesorder';
import axios from 'axios';
let token = "";
class AddOrderLine extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = { 
            so_header_id: 0,           
            selectedItem: ''
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('token').then((value) => {
            if (value !== null) {
                token = value;
            }
        });
        this.setState({
            so_header_id: this.props.route.params.so_header_id
        })
        this.props.getItems();
    }

    onClickListener = () => {
        //if (this.ValidatingData()) {
            const headers = {  
                "authorization":  token
            }
            let data = {
                so_header_id: this.state.so_header_id,
                item_id: this.state.selectedItem
            }
            axios.post('http://192.168.0.102/metricserp/index.php/salesorderapi/addSalesOrderLine',data,{
                headers: headers
            })
            .then(response => {(response.data.status === "Error") ? alert(response.data.message) :
                this.props.getSalesOrderLines(this.state.so_header_id);
                this.props.navigation.navigate('OrderLine', {so_header_id: this.state.so_header_id})
            })
        //}
    }

    updateCustomer = (value) => {
        this.setState({
            selectedCustomer: value
        })
    }


    render(){
        //console.log(this.props.customer);
        return(
            <View style={styles.container}>
                <SearchableDropdown
                    onTextChange={text => console.log(text)}
                    //On text change listner on the searchable input
                    onItemSelect={item => this.setState({selectedItem: item.item_id})}
                    //onItemSelect called after the selection from the dropdown
                    containerStyle={{ padding: 5 }}
                    //suggestion container style
                    textInputStyle={{
                        //inserted text style
                        padding: 12,
                        borderWidth: 1,
                        borderColor: '#ccc',
                        backgroundColor: '#FAF7F6',
                    }}
                    itemStyle={{
                        //single dropdown item style
                        padding: 10,
                        marginTop: 2,
                        backgroundColor: '#FAF9F8',
                        borderColor: '#bbb',
                        borderWidth: 1,
                    }}
                    itemTextStyle={{
                        //text style of a single dropdown item
                        color: '#222',
                    }}
                    itemsContainerStyle={{
                        //items container style you can pass maxHeight
                        //to restrict the items dropdown hieght
                        maxHeight: '50%',
                    }}
                    items={this.props.itemR}
                    //mapping of item array
                    defaultIndex={2}
                    //default selected item index
                    placeholder="placeholder"
                    //place holder for the search input
                    resetValue={false}
                    //reset textInput Value with true and false state
                    underlineColorAndroid="transparent"
                    //To remove the underline from the android input
                    />
                <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={() => this.onClickListener()}>
                    <Text style={styles.signUpText}>Submit</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:"80%",
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:"80%",
        borderRadius:30,
    },
    signupButton: {
        backgroundColor: "#FF4DFF",
    },
    signUpText: {
        color: 'white',
    }
});

const mapStateToProps = state => ({
    itemR: state.salesorder.item
});
const mapDispatchToProps = {
    getItems,
    getSalesOrderLines
}
export default connect(mapStateToProps, mapDispatchToProps)(AddOrderLine);