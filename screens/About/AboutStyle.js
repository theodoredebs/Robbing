import { Dimensions, Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Text: {
    textAlign: "left",
    // marginHorizontal: 50,
    marginVertical: 10,
    fontSize: 16,
  },
  headerText: {
    alignSelf: "flex-start",
    marginBottom: 30,
  },
  Banner: {
    marginBottom: 30,
    width: Dimensions.get("screen").width - 20,
    borderRadius: 20,
  },
  Separator: {
    marginVertical: 20,
    width: 400,
    height: 1,
    flex: 1,
    backgroundColor: "lightgray",
    alignSelf: "center",
  },
  Title: {
    fontSize: 24,
    fontWeight: Platform.OS === "ios" ? "600" : "normal",
    color: "#E61A23",
  },
  Cover: {
    marginRight: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 40,
    width: 40,
    backgroundColor: "#E61A23",
  },
});
