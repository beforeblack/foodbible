import React, { Component } from "react";
import { Text, View } from "react-native";

import styles from "../Styles/styles";

class Foodlist extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.containerText}>This is the food component</Text>
      </View>
    );
  }
}

export { Foodlist };
