import { Dimensions, Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  SignIn: {
    marginVertical: 10,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width,
    backgroundColor: "#EEEEEE",
  },
  Text: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
  },
  SignInBtn: {
    backgroundColor: "#D1D1D1",
    paddingHorizontal: 40,
    marginVertical: 10,
    borderRadius: 50,
  },
  SignInTxt: {
    fontFamily: " Roboto-Bold",
    color: "black",
  },
});
