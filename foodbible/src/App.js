import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainScreen } from './Screens/MainScreen';
import { LoginScreen } from './Screens/LoginScreen';
import { FoodDisplayScreen } from './Screens/FoodDisplayScreen'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <FoodDisplayScreen />
    );
  }
}
