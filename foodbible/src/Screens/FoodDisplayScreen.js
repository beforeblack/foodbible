import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { AlbumList } from "../Components/CardList/AlbumList";
import styles from "../Styles/styles";

type Props = {};
class FoodDisplayScreen extends Component<Props> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <AlbumList />
      </ScrollView>
    );
  }
}

export { FoodDisplayScreen };
