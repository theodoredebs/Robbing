import { createStackNavigator } from "@react-navigation/stack";

import NotificationScreen from "../screens/Notifications/Notifications";
import NotificationsDetailedScreen from "../screens/Notifications/NotificationsDetailed";

const NStack = createStackNavigator();

const NotificationsStack = () => {
  return (
    <NStack.Navigator>
      <NStack.Screen
        name="notifications"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <NStack.Screen
        name="notificationsDetailed"
        component={NotificationsDetailedScreen}
        options={{ headerShown: false }}
      />
    </NStack.Navigator>
  );
};

export default NotificationsStack;
