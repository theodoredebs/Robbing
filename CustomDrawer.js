import React, { useContext } from "react";
import { styles } from "./AppStyle";
import { View, Image, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MainContext } from "./MainContext";
import { MaterialIcons } from "@expo/vector-icons";

const CustomItem = (props) => {
  return (
    <DrawerItem
      label={props.label}
      onPress={props.onPress}
      icon={props.icon}
      activeBackgroundColor="transparent"
      activeTintColor="black"
      inactiveTintColor="black"
    />
  );
};

export const CustomDrawer = (props) => {
  const { signOut } = useContext(MainContext);
  const clickLogout = () => {
    signOut();
    props.navigation.navigate("Home");
  };
  return (
    <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
      <View style={styles.LogoImgContainer}>
        <Image
          source={require("./assets/B2C.png")}
          style={styles.LogoImg}
          resizeMode="cover"
        />
      </View>
      {props.LoggedIn && (
        <View style={styles.LoggedinContainer}>
          <Text style={styles.LoggedinText}>
            Logged in as {props.UserData.email}
          </Text>
        </View>
      )}
      <CustomItem
        label="Home"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
        icon={({ focused, color, size }) => (
          <MaterialCommunityIcons name="home" size={28} color="#E61A23" />
        )}
      />
      <CustomItem
        label="About"
        onPress={() => {
          props.navigation.navigate("About");
        }}
        icon={({ focused, color, size }) => (
          <MaterialCommunityIcons
            name="account-question"
            size={28}
            color="#E61A23"
          />
        )}
      />
      <CustomItem
        label="Contact"
        onPress={() => {
          props.navigation.navigate("Contact");
        }}
        icon={({ focused, color, size }) => (
          <MaterialIcons name="contact-page" size={24} color="#E61A23" />
        )}
      />

      <CustomItem
        label="Support"
        onPress={() => {
          props.navigation.navigate("Support");
        }}
        icon={({ focused, color, size }) => (
          <MaterialIcons name="contact-support" size={28} color="#E61A23" />
        )}
      />
      {props.LoggedIn && (
        <CustomItem
          label="Products"
          onPress={() => {
            props.navigation.navigate("Products");
          }}
          icon={({ focused, color, size }) => (
            <MaterialCommunityIcons
              name="zip-box-outline"
              size={28}
              color="#E61A23"
            />
          )}
        />
      )}
      <CustomItem
        label={props.LoggedIn ? "Logout" : "Login"}
        onPress={() =>
          props.LoggedIn ? clickLogout() : props.navigation.navigate("Auth")
        }
        icon={({ focused, color, size }) => (
          <MaterialCommunityIcons
            name={props.LoggedIn ? "logout" : "login"}
            size={28}
            color="#E61A23"
          />
        )}
      />
    </DrawerContentScrollView>
  );
};
