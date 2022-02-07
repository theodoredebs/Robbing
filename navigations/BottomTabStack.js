import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";

import NotificationsStack from "./NotificationsStack";
import SettingStack from "./SettingsStack";
import HomeStack from "./HomeStack";
import AccountStack from "./AccountStack";
import CartStack from "./CartStack";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      // initialRouteName="HomeStack"
      backBehavior="initialRoute"
      screenOptions={{
        // tabBarShowLabel: false,
        tabBarActiveTintColor: "#E61A23",
        //   tabBarActiveBackgroundColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: " ",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/B2C.png")}
              style={{ height: 40, width: 40, marginTop: 20 }}
              name="home"
            />
          ),
        }}
      />

      <Tab.Screen
        name="NotificationsStack"
        component={NotificationsStack}
        options={{
          headerShown: false,
          tabBarLabel: "Notification",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name="notifications-outline"
              name="notifications"
              color={focused ? "red" : "grey"}
              size={focused ? 30 : 26}
            />
          ),
          //   tabBarBadge: 3,
        }}
      />

      <Tab.Screen
        name="CategoriesStack"
        component={NotificationsStack}
        options={{
          headerShown: false,
          tabBarLabel: "Categories",
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="search1"
              color={focused ? "red" : "grey"}
              size={focused ? 30 : 26}
            />
          ),
          //   tabBarBadge: 3,
        }}
      />

      <Tab.Screen
        name="cartStack"
        component={CartStack}
        options={{
          headerShown: false,
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="shoppingcart"
              color={focused ? "red" : "grey"}
              size={focused ? 30 : 26}
            />
          ),
          //   tabBarBadge: 3,
        }}
      />

      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          headerShown: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="account"
              color={focused ? "red" : "grey"}
              size={focused ? 30 : 26}
            />
          ),
          //   tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  IconContainer: {
    alignItems: "center",
  },
  IconTitle: {
    fontSize: 12,
  },
});

export default MyTabs;
