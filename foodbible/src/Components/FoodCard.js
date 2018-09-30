import React, { Component } from "react";
import { Text, View, Image } from "react-native";

import styles from "../Styles/styles";

const FoodCard = props => {
  return (
    <View style={styles.foodCardLayout}>
      <View style= {styles.foodCardText}>
        <Text>This is a header</Text>
        <Text>This is the actual content with description</Text>
      </View>
      <View style={styles.foodCardText}>
        <Text style={styles.foodCardTextBtn}>X</Text>
      </View>
    </View>
  );
};

export { FoodCard };
