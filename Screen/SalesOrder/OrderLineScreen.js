import React, { Component, PropTypes } from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, TextInput, Image, View, FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { getSalesOrderLines } from '../../src/actions/salesorder';
class OrderLineScreen extends React.PureComponent{
    constructor(props) {
        super(props);
        
        this.state = {
            so_header_id: 0,
            refreshing: false,
            setRefreshing: false,
            salesorderlines: [],
            fetching_from_server: false
        }
    }

    componentDidMount() { 
        this.setState({
            so_header_id: this.props.route.params.so_header_id
        });
        this.props.getSalesOrderLines(this.state.so_header_id);
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
        },()=>{this.props.getSalesOrderLines(this.state.so_header_id)})
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
                    onPress={() => this.props.navigation.navigate('AddOrderLine', {so_header_id:this.state.so_header_id})}
                />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.props.orderlineR }
                    renderItem={({ item, index }) => (
                        <ListItem
                            title={item.item_description}
                            containerStyle={{ borderBottomWidth:0 }}
                        />
                    )}
                    keyExtractor={item => item.so_header_id}
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
    orderlineR: state.salesorder.orderline
});
const mapDispatchToProps = {
    getSalesOrderLines
}
export default connect(mapStateToProps, mapDispatchToProps)(OrderLineScreen);