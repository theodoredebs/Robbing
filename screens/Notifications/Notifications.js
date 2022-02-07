import React from "react";
import { View, Text } from "react-native";

const Notifications = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => navigation.navigate("notificationsDetailed")}>
        Notifications Page
      </Text>
    </View>
  );
};

export default Notifications;
