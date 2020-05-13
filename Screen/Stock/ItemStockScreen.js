import React, { Component, PropTypes } from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, TextInput, Image, View, FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { getItemStocks } from '../../src/actions/itemStock';
class ItemStockScreen extends React.PureComponent{
    constructor(props) {
        super(props);
        
        this.state = {
            refreshing: false,
            setRefreshing: false,
            items: [],
            isListEnd: false,
            fetching_from_server: false,
            searchText: ''
        }
    }

    componentDidMount() { 
        this.props.getItemStocks();
    }

    componentWillUnmount() {
        //this.willFocusSubscription.remove();
    }

    renderSeparator = () => {
        return (
            <View
            style={{
                height: 1,
                width: '86%',
                backgroundColor: '#CED0CE',
                marginLeft: '14%',
            }}
            />
        );
    };

    render() {
        console.log(this.props);
        return(
            <View style={styles.MainContainer}>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.props.stockR }
                    renderItem={({ item, index }) => (
                        <ListItem
                            title={item.item_description+'('+item.org_name+')'}
                            subtitle={item.atr_qty}
                            containerStyle={{ borderBottomWidth:0 }}
                        />
                    )}
                    keyExtractor={item => item.item_id}
                    ItemSeparatorComponent={this.renderSeparator}
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

const mapStateToProps = state => ({
    stockR: state.itemstock.stock
});
const mapDispatchToProps = {
    getItemStocks
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemStockScreen);