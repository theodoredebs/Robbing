import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Auth/Login";
import Register from "../screens/Auth/Register";
import ForgotPassword from "../screens/Auth/ForgotPassword";

const AStack = createStackNavigator();

const AuthStack = () => {
  return (
    <AStack.Navigator detachInactiveScreens>
      <AStack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <AStack.Screen
        name="register"
        component={Register}
        options={{ headerShown: false }}
      />
      <AStack.Screen
        name="Forgot Password"
        component={ForgotPassword}
        options={{ headerShown: true }}
      />
    </AStack.Navigator>
  );
};

export default AuthStack;
