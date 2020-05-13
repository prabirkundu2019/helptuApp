import React, { Component, PropTypes } from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, TextInput, Image, View, FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import SQLite from "react-native-sqlite-2";
//import { openDatabase } from 'react-native-sqlite-storage';
import { AuthContext } from "../App";
//var SQLite = require('react-native-sqlite-storage'); 

//let db = openDatabase({ name: 'MetricsDatabase.db', location: 'Library', createFromLocation: '~MetricsDatabase.db'  });
class CompanyScreen extends React.PureComponent{
    constructor(props) {
        super(props);
        
        this.state = {
            refreshing: false,
            setRefreshing: false,
            HeadTable: ['Company Name'],
            company: [],
            isListEnd: false,
            fetching_from_server: false,
            searchText: ''
        }
    }

    // getDatarows = async () => { 
    //     const db = SQLite.openDatabase("MetricsDatabase.db", "1.0", "", 1);
    //     db.transaction(function(txn) {
    //     txn.executeSql("DROP TABLE IF EXISTS Users", []);
    //     txn.executeSql(
    //         "CREATE TABLE IF NOT EXISTS Users(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30))",
    //         []
    //     );
    //     txn.executeSql("INSERT INTO Users (name) VALUES (:name)", ["nora"]);
    //     txn.executeSql("INSERT INTO Users (name) VALUES (:name)", ["takuya"]);
    //     txn.executeSql("SELECT * FROM `users`", [], function(tx, res) {
    //         for (let i = 0; i < res.rows.length; ++i) {
    //         console.log("item:", res.rows.item(i));
    //         }
    //     });
    //     });
            
    // };

    componentDidMount() {  
        //this.getDatarows();
        //console.log(AsyncStorage.getItem("token"));
        //this.loadMoreData();
    }

    renderHeader = () => {
        return (
            <SearchBar
                placeholder="Type Here..."
                lightTheme
                round
                editable={true}
                value={this.state.searchText}
                onChangeText={this.updateSearch}
            />
        );
    };

    render() {
        console.log(this.props);
        return(
            <View style={styles.MainContainer}>
                <Text>sdsd</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 30,
    },

    item: {
        flex: 1,
        padding: 20,
        fontSize: 18,
        height: 44
    },
});

export default CompanyScreen;