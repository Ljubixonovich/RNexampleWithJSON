import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Search from './src/screens/Search';
import About from './src/screens/About';


const navigator = createStackNavigator({
  Search: Search,
  About: About
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Search JSON'
  }
});

export default createAppContainer(navigator);
