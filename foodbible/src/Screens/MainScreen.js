import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Foodlist } from "../Components/Foodlist";
import { NavButton } from "../Components/NavButton";
import styles from "../Styles/styles";

type Props = {};
class MainScreen extends Component<Props> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
          <NavButton buttonText={"<"} />
        </View>
        <View style={styles.subCont}>
          <Text>Launge Menu</Text>
          <Text>Mains</Text>
          <Foodlist />
          <Foodlist />
          <Foodlist />
          <Foodlist />
          <Foodlist />
          <Foodlist />
          <Foodlist />
          <Foodlist />
          <Foodlist />
        </View>
      </ScrollView>
    );
  }
}

export { MainScreen };
