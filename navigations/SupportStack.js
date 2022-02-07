import { createStackNavigator } from "@react-navigation/stack";

import SupportScreen from "../screens/Support/Support";
import SupportDetailedScreen from "../screens/Support/SupportDetailed";

const SStack = createStackNavigator();

const SupportStack = () => {
  return (
    <SStack.Navigator detachInactiveScreens>
      <SStack.Screen
        name="support"
        component={SupportScreen}
        options={{ headerShown: false }}
      />
      <SStack.Screen
        name="supportDetailed"
        component={SupportDetailedScreen}
        options={{ headerShown: false }}
      />
    </SStack.Navigator>
  );
};

export default SupportStack;
