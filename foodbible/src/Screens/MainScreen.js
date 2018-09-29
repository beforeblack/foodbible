import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Foodlist } from '../Components/Foodlist';

type Props = {};
class MainScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Works</Text>
        <Text>Refresh Test</Text>
        <Foodlist />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export { MainScreen };
