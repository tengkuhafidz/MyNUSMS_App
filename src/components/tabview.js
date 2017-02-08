import React, { Component } from 'react';
import { Animated, View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Posts from './posts';
import Events from './events';
import Musollas from './musollas';


var halfWidth = Dimensions.get('window').width * 0.333;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  indicator: {
    backgroundColor: '#333',
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    margin: 8,
  },
  tabbar: {
    backgroundColor: '#fff',
  },
  tab: {
    opacity: 1,
    width: halfWidth,
  },
  page: {
    backgroundColor: '#f9f9f9',
  },
});

export default class Tabview extends Component {

  static title = 'Scroll views';
  static backgroundColor = '#fff';
  static tintColor = '#B4B7C0';
  static appbarElevation = 0;

  static propTypes = {
    style: View.propTypes.style,
  };

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Posts' },
      { key: '2', title: 'Events' },
      { key: '3', title: 'Musollas' },
    ],
  };

  _first: Object;
  _second: Object;
  _third: Object;

  _handleChangeTab = (index) => {
    this.setState({
      index,
    });
  };

  _handleTabItemPress = route => {
    if (route !== this.state.routes[this.state.index]) {
      return;
    }
    switch (route.key) {
    case '1':
      this._first.scrollTo({ y: 0 });
      break;
    case '2':
      this._second.scrollTo({ y: 0 });
      break;
    }
  };

  _renderLabel = (props: any) => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(inputIndex => inputIndex === index ? '#333' : '#B4B7C0');
    const color = props.position.interpolate({
      inputRange,
      outputRange,
    });

    return (
      <Animated.Text style={[ styles.label, { color } ]}>
        {route.title}
      </Animated.Text>
    );
  };

  _renderHeader = (props) => {
    return (
      <TabBar
        {...props}
        pressColor='rgba(255, 64, 129, .5)'
        onTabPress={this._handleTabItemPress}
        renderLabel={this._renderLabel(props)}
        indicatorStyle={styles.indicator}
        tabStyle={styles.tab}
        style={styles.tabbar}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <Posts />;
    case '2':
      return <Events />;
    case '3':
      return <Musollas />;      
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={[ styles.container, this.props.style ]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}