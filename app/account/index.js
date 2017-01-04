'use strict';

var React = require('react');
var ReactNative = require('react-native');
var Icon = require('react-native-vector-icons/Ionicons');
var {
    StyleSheet,
    Text,
    View,
} = ReactNative;

var Account = React.createClass({
    render(){
        return(
            <View style={styles.container}>
                <Text>账户页面</Text>
            </View>
        )
    }
});


const styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center',
    },
    tabText: {
        color: 'white',
        margin: 50,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

module.exports = Account;