import React, { Component, PropTypes } from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, TextInput, Image, View, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { getActivities } from '../src/actions/company';
import axios from 'axios';
let token = "";
class AddLeadActivityScreen extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {
            lead_id: 0,
            message: ""
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('token').then((value) => {
            if (value !== null) {
                token = value;
            }
        });
        this.setState({
            lead_id: this.props.route.params.lead_id
        })
    }

    ValidatingData() {
        if (this.state.message.trim() == '') {
          alert("Please enter activity");
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
                lead_id: this.state.lead_id,
                message: this.state.message
            }
            axios.post('http://192.168.0.102/metricserp/index.php/api/addLeadActivity',data,{
                headers: headers
            })
            .then(response => {(response.data.status === "Error") ? alert(response.data.message) :
                this.props.getActivities(this.state.lead_id);
                this.setState({
                    message: ''
                }, this.props.navigation.navigate('Activity',{lead_id: this.state.lead_id}))
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
                    onChangeText={(message) => this.setState({message})}/>
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
    activityR: state.company.activity
});
const mapDispatchToProps = {
    getActivities
}
export default connect(mapStateToProps, mapDispatchToProps)(AddLeadActivityScreen);