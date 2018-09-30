import React, { Component } from "react";
import { Text, View } from "react-native";

import { FoodCard } from './FoodCard';
import styles from "../Styles/styles";

const Foodlist = (props) => {
  return (
    <View style={styles.foodlistCont}>
      <FoodCard />
    </View>
  );
};

export { Foodlist };
