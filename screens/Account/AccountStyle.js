import { Dimensions, Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Title: {
    fontFamily: "Roboto-Normal",
    fontSize: 24,
    alignSelf: "flex-start",
    color: "#E61A23",
    marginTop: 50,
    marginHorizontal: 30,
  },
  TO: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width * 0.9,
    backgroundColor: "white",
    padding: 2,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderColor: "white",
    elevation: 3,
  },
  Text: {
    fontFamily: "Roboto-Regular",
    color: "black",
    fontSize: 20,
    marginLeft: 20,
  },
});
