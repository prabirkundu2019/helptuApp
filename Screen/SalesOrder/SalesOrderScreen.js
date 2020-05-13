import React, { Component, PropTypes } from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, TextInput, Image, View, FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { getSalesOrders, totalSalesOrders } from '../../src/actions/salesorder';
class SalesOrderScreen extends React.PureComponent{
    constructor(props) {
        super(props);
        
        this.state = {
            refreshing: false,
            setRefreshing: false,
            salesorder: [],
            isListEnd: false,
            fetching_from_server: false,
            searchText: ''
        }
    }

    componentDidMount() { 
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

    onRefreshHandler = () => {
        this.setState({
            refreshing:true,
            isListEnd:false,
        },()=>{this.props.getSalesOrders(this.state.searchText)})
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

    updateSearch = searchText => {
        this.setState({searchText}, () => {
            this.props.getSalesOrders(this.state.searchText)
        });
    }

    onItemClickHandler(so_header_id){
        //this.props.navigation.navigate('Lead');
        this.props.navigation.navigate('OrderLine', { so_header_id: so_header_id })
    }

    static getDerivedStateFromProps(props, state) {
        let retrunObj = {}
        if (props.salesorderR !== state.salesorder) {
            retrunObj.salesorder = props.salesorderR
            retrunObj.fetching_from_server = false;
            retrunObj.refreshing = false;
        }
        return retrunObj
    }

    render() {
        console.log(this.props);
        return(
            <View style={styles.MainContainer}>
                <Button 
                    title="Add Sales Order"
                    onPress={() => this.props.navigation.navigate('AddSalesOrder')}
                />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.props.salesorderR }
                    renderItem={({ item, index }) => (
                        <ListItem
                            title={item.customer_name}
                            containerStyle={{ borderBottomWidth:0 }}
                            chevron
                            onPress={() => this.onItemClickHandler(item.so_header_id)}
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

const mapStateToProps = state => ({
    salesorderR: state.salesorder.order,
    offset: state.salesorder.offset,
    totalOrder: state.salesorder.totalOrder
});
const mapDispatchToProps = {
    getSalesOrders,
    totalSalesOrders
}
export default connect(mapStateToProps, mapDispatchToProps)(SalesOrderScreen);