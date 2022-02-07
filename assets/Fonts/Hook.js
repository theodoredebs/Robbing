import * as Font from "expo-font";
import React from "react";

export default useFonts = async () =>
  await Font.loadAsync({
    "Roboto-Bold": require("./Roboto-Bold.ttf"),
    "Roboto-Italic": require("./Roboto-Italic.ttf"),
    "Roboto-Medium": require("./Roboto-Medium.ttf"),
    "Roboto-Regular": require("./Roboto-Regular.ttf"),
    "Roboto-Light": require("./Roboto-Light.ttf"),
  });
