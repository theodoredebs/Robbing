import { StyleSheet, Text, Platform } from "react-native";
import React from "react";

const HeaderText = (props) => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: Platform.OS == "ios" ? 50 : 30,
    marginVertical: Platform.OS == "ios" ? 10 : 20,
    fontFamily: "Roboto-Bold",
    color: "#E61A23",
  },
});

export default HeaderText;
