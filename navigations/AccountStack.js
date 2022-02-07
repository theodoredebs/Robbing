import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AccountScreen from "../screens/Account/Account";
import AccountDetailedScreen from "../screens/Account/AccountDetailed";

const AStack = createStackNavigator();

const AccountStack = () => {
  return (
    <AStack.Navigator>
      <AStack.Screen
        name="account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
      <AStack.Screen
        name="accountDetailed"
        component={AccountDetailedScreen}
        options={{ headerShown: false }}
      />
    </AStack.Navigator>
  );
};

export default AccountStack;
