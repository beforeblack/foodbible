import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainScreen } from './Screens/MainScreen';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <MainScreen />
    );
  }
}
