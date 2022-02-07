import { createStackNavigator } from "@react-navigation/stack";

import ContactScreen from "../screens/Contact/Contact";
import ContactDetailedScreen from "../screens/Contact/ContactDetailed";

const CStack = createStackNavigator();

const ContactStack = () => {
  return (
    <CStack.Navigator detachInactiveScreens>
      <CStack.Screen
        name="contact"
        component={ContactScreen}
        options={{ headerShown: false }}
      />
      <CStack.Screen
        name="contactDetailed"
        component={ContactDetailedScreen}
        options={{ headerShown: false }}
      />
    </CStack.Navigator>
  );
};

export default ContactStack;
