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
            searchText: '',
            demoArray: [1,2,3,4]
        }
    }

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
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.demoArray }
                    renderItem={({ item, index }) => (
                        <ListItem
                            title='Test1'
                            containerStyle={{ borderBottomWidth:0 }}
                            chevron
                        />
                    )}
                    keyExtractor={item => item.so_header_id}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                />
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