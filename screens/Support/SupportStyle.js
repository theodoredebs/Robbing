import { Dimensions, Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Text: {
    textAlign: "left",
    // marginHorizontal: 50,
    marginVertical: 10,
    fontSize: 16,
  },
  textContainer: {
    display: "flex",
    justifyContent: "flex-start",
    width: Dimensions.get("screen").width,
    paddingHorizontal: 20,
  },
  headerText: {
    alignSelf: "flex-start",
    marginBottom: 30,
  },
  Title: {
    fontSize: 24,
    fontWeight: Platform.OS === "ios" ? "600" : "normal",
    color: "#E61A23",
  },
  Button: {
    paddingTop: 15,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 20,
    height: 100,
    borderColor: Platform.OS === "ios" ? "white" : "whitesmoke",
    elevation: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    shadowColor: "#A6A6A6",
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 1 },
    backgroundColor: "white",
  },
  Subtitle: {
    fontSize: 16,
  },
  Title: {
    color: "black",
    fontSize: 20,
    fontFamily: "Roboto-Bold",
  },
  Accordion: {
    paddingHorizontal: 25,
  },
});
