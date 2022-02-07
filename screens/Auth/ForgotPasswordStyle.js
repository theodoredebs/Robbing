import { Dimensions, Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Page: {
    display: "flex",
    alignItems: "center",
    height: Dimensions.get("screen").height,
    backgroundColor: "white",
  },
  LogoImgContainer: {
    alignItems: "center",
    marginVertical: 30,
  },
  Title: {
    fontSize: 26,
    fontFamily: "Roboto-Thin",
    color: "#E61A23",
    marginBottom: 50,
  },
});
