import React, { Component, PropTypes } from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, TextInput, Image, View, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { getLeads } from '../src/actions/company';
import axios from 'axios';
let token = "";
class AddLeadScreen extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            company_id: 0,
            name: "",
            email: "",
            mobile: ""
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('token').then((value) => {
            if (value !== null) {
                token = value;
            }
        });
        this.setState({
            company_id: this.props.route.params.company_id
        })
    }

    ValidatingData() {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (this.state.email.trim() == '') {
          alert("Please enter email");
          return false;
        }
        else if (!this.state.email.match(mailformat)) {
          alert("You have entered an invalid email address!");
          return false
        }
        else if (this.state.mobile.trim() == '') {
          alert("Please enter phone number");
          return false
        }
        else {
          return true;
        }
    }

    onClickListener = () => {
        if (this.ValidatingData()) {
            const headers = {  
                "authorization":  token
            }
            let data = {
                company_id: this.state.company_id,
                email: this.state.email,
                name: this.state.name,
                mobile: this.state.mobile
            }
            axios.post('http://192.168.0.102/metricserp/index.php/api/addLead',data,{
                headers: headers
            })
            .then(response => {(response.data.status === "Error") ? alert(response.data.message) :
                this.props.getLeads(this.state.company_id);
                this.setState({
                    email: '',
                    name: '',
                    mobile: ''
                }, this.props.navigation.navigate('Lead',{company_id: this.state.company_id}))
            })
        }
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/male-user/ultraviolet/50/3498db'}}/>
                <TextInput style={styles.inputs}
                    placeholder="Name"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(name) => this.setState({name})}/>
                </View>

                <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => this.setState({email})}/>
                </View>
                <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                <TextInput style={styles.inputs}
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    underlineColorAndroid='transparent'
                    onChangeText={(mobile) => this.setState({mobile})}/>
                </View>

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
        backgroundColor: '#003f5c',
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
    leadR: state.company.lead
});
const mapDispatchToProps = {
    getLeads
}
export default connect(mapStateToProps, mapDispatchToProps)(AddLeadScreen);