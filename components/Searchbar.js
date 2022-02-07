import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Searchbar } from "react-native-paper";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const SearchbarC = (props) => {
  return (
    <Searchbar
      style={{
        borderColor: "#E61A23",
        borderWidth: 1,
        borderRadius: 30,
        height: 40,
        margin: 10,
      }}
      {...props}
      selectionColor="#E61A23"
      activeOutlineColor="#E61A23"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
  },
});

export default SearchbarC;
