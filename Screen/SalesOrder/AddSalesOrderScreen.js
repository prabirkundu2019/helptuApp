import React, { Component, PropTypes } from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, TextInput, Image, View, TouchableHighlight, Picker } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { getSalesOrders, getCustomers } from '../../src/actions/salesorder';
import axios from 'axios';
let token = "";
class AddSalesOrderScreen extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {            
            selectedCustomer: ''
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('token').then((value) => {
            if (value !== null) {
                token = value;
            }
        });
        this.props.getCustomers();
    }

    loadUserTypes() {
        return this.props.customer.map(data => (
           <Picker.Item label={data.customer_name} value={data.customer_id} />
        ))
    }

    onClickListener = () => {
        //if (this.ValidatingData()) {
            const headers = {  
                "authorization":  token
            }
            let data = {
                customer_id: this.state.selectedCustomer
            }
            axios.post('http://192.168.0.102/metricserp/index.php/salesorderapi/addSalesOrder',data,{
                headers: headers
            })
            .then(response => {(response.data.status === "Error") ? alert(response.data.message) :
                this.props.getSalesOrders('', 0);
                this.props.navigation.navigate('SalesOrder')
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
                <Picker style={styles.inputContainer}
                    onValueChange={this.updateCustomer.bind()}
                    selectedValue ={this.state.selectedCustomer}
                >
                {this.loadUserTypes()}
                </Picker>
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
    salesorderR: state.salesorder.order,
    customer: state.salesorder.customer
});
const mapDispatchToProps = {
    getSalesOrders,
    getCustomers
}
export default connect(mapStateToProps, mapDispatchToProps)(AddSalesOrderScreen);