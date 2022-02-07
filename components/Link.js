import { Text, TouchableOpacity, StyleSheet, Platform } from "react-native";

const LinkComponent = (props) => {
  const chosenStyles = props.settings.map((item) => styles[item]);
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={props.style}>
      <Text style={[chosenStyles]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

// <------ STYLES CHANGES DEPENDING ON PROPS ------>

const styles = StyleSheet.create({
  null: {
    color: "#E61A23",
  },
  primary: {
    color: "#E61A23",
  },
  danger: {
    color: "#E61A23",
  },
  white: {
    color: "white",
  },
  grey: {
    color: "grey",
  },
  position: {
    alignSelf: "flex-end",
  },
  bold: {
    fontWeight: Platform.OS === "ios" ? "600" : "bold",
  },
  large: {
    fontSize: 14,
  },
});

export default LinkComponent;
