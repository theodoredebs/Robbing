import { StyleSheet, KeyboardAvoidingView } from "react-native";

export const KeyboardAvoiding = (props) => {
  return (
    <KeyboardAvoidingView
      style={[styles.container, props.style]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {props.children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
});

export default KeyboardAvoiding;
