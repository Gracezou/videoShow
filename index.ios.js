/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

var React = require('react');
var ReactNative = require('react-native');
var Icon = require('react-native-vector-icons/Ionicons');

var List = require("./app/creation/index");
var Edit = require("./app/edit/index");
var Account =require("./app/account/index");

var {
    AppRegistry,
    StyleSheet,
    TabBarIOS,
    Navigator,
    Text,
    View,
} = ReactNative;


var videoShow = React.createClass({

    getInitialState: function() {
        return {
            selectedTab: 'list'
        };
    },

  render() {
    return (
        <TabBarIOS tintColor="#ee735c">
          <Icon.TabBarItem
              iconName="ios-videocam-outline"
              selectedIconName="ios-videocam"
              selected={this.state.selectedTab === 'list'}
              onPress={() => {
                this.setState({
                  selectedTab: 'list'
                });
              }}>
              <Navigator
                  initialRoute={{
                      name: 'list',
                      component: List
                  }}
                  configureScene={(route) => {
                      return Navigator.SceneConfigs.FloatFromRight
                  }}
                  renderScene={(route, navigator) => {
                      var Component = route.component;
                      return <Component {...route.params} navigator={navigator}/>
                  }}
              />
          </Icon.TabBarItem>
          <Icon.TabBarItem
              iconName="ios-recording-outline"
              selectedIconName="ios-recording"
              selected={this.state.selectedTab === 'edit'}
              onPress={() => {
                this.setState({
                  selectedTab: 'edit',
                });
              }}>
              <Edit/>
          </Icon.TabBarItem>
          <Icon.TabBarItem
              iconName="ios-more-outline"
              selectedIconName="ios-more"
              selected={this.state.selectedTab === 'account'}
              onPress={() => {
                this.setState({
                  selectedTab: 'account'
                });
              }}>
            <Account/>
          </Icon.TabBarItem>
        </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
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

AppRegistry.registerComponent('videoShow', () => videoShow);
