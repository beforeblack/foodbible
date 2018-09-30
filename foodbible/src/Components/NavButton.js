import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "../Styles/styles";

const NavButton = (props) => {
    return (
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>{props.buttonText}</Text>
      </TouchableOpacity>
    );
  };

export { NavButton };
