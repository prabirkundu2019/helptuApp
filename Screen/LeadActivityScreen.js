import React, { Component, PropTypes } from 'react';
import { StyleSheet, TouchableOpacity, Button, Text, TextInput, Image, View, FlatList } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { getActivities } from '../src/actions/company';
import { AuthContext } from "../App";
//let db = openDatabase({ name: 'MetricsDatabase.db', createFromLocation: 1  });

class LeadActivityScreen extends React.PureComponent{
    constructor(props) {
        super(props);
        
        this.state = {
            refreshing: false,
            lead_id: 0,
            activity: [],
            isListEnd: false,
            fetching_from_server: false
        }
    }

    componentDidMount() { 
        this.setState({
            lead_id: this.props.route.params.lead_id
        })
        //console.log(AsyncStorage.getItem("token"));
        this.loadMoreData();
    }

    loadMoreData = () => {
        if (!this.state.fetching_from_server && !this.state.isListEnd) {
            //On click of Load More button We will call the web API again
            this.setState({ fetching_from_server: true }, () => {
                this.props.getActivities(this.state.lead_id);
            })
        }
    }

    onRefreshHandler = () => {
        this.setState({
            refreshing:true,
        },()=>{this.props.getActivities(this.state.lead_id)})
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

    renderHeader = () => {
        return (
            <SearchBar
                placeholder="Type Here..."
                lightTheme
                round
            />
        );
    };

    onItemClickHandler(lead_id){
        //this.props.navigation.navigate('Lead');
        this.props.navigation.navigate('Activity', { lead_id: lead_id })
    }

    // static getDerivedStateFromProps(props, state) {
    //     let retrunObj = {}
    //     if (props.leadR !== state.lead && props.leadR.length > 0) {
    //         retrunObj.lead = props.leadR
    //         //retrunObj.posts = [...state.posts, ...props.postR];
    //        // retrunObj.offset = props.offset;
    //         retrunObj.fetching_from_server = false;
    //         retrunObj.refreshing = false;
    //     }
    //     return retrunObj
    // }

    render() {
        //console.log(this.props.leadR);
        return(
            <View style={styles.MainContainer}>
                <Button 
                    title="Add Activity"
                    onPress={() => this.props.navigation.navigate('Add Lead Activity', { lead_id: this.state.lead_id })}
                />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.props.activityR }
                    onRefresh={this.onRefreshHandler}
                    refreshing={this.state.refreshing}
                    renderItem={({ item, index }) => (
                        <ListItem
                            title={item.message}
                            containerStyle={{ borderBottomWidth:0 }}
                        />
    //                     <View key={item.leads_id} style={{flexDirection: 'column', flex: 1, padding:10, margin: 1, flexWrap: 'wrap', borderWidth: 2,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,backgroundColor: 'pink'}}>
    //                         <Text styles={styles.item}>{item.lead_name}</Text>
    //                         <Text styles={styles.item}>{item.lead_contact_name}</Text>
    //                         <Text styles={styles.item}>{item.lead_mobile}</Text>
    //                     </View>
                    )}
                    keyExtractor={item => item.leads_id}
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
    activityR: state.company.activity
});
const mapDispatchToProps = {
    getActivities
}
export default connect(mapStateToProps, mapDispatchToProps)(LeadActivityScreen);