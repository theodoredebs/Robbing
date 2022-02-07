import { Dimensions, Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Title: {
    marginTop: 40,
    fontSize: 30,
    fontFamily: "Roboto-Bold",
    color: "#E61A23",
    marginBottom: -5,
  },
  SubTitle: {
    fontFamily: "Roboto-Normal",
    fontSize: 16,
    color: "#9A9A9A",
  },
  Product: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 15,
    height: 150,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    elevation: 10,
    shadowColor: "#A6A6A6",
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 1 },
  },
  Image: {
    marginHorizontal: 20,
    height: 52 * 1.7,
    width: 30 * 1.7,
  },
  ProductName: {
    fontFamily: "Roboto-Bold",
    marginVertical: 2,
    fontSize: 20,
  },

  Specs: {
    fontFamily: "Roboto-Bold",
    marginTop: 2,
    marginBottom: 5,
    fontSize: 12,
  },

  Price: {
    fontFamily: "Roboto-Bold",
    marginVertical: 5,
    color: "#E52525",
    fontSize: 18,
  },

  Title2: {
    width: Dimensions.get("screen").width,
    fontSize: 28,
    fontFamily: "Roboto-Bold",
    color: "#E61A23",
  },
});
