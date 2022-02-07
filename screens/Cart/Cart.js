import React from "react";
import { View, TouchableOpacity, Dimensions, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ScrollViewIndicator from "react-native-scroll-indicator";
import {
  TextInput,
  PassInput,
  Link,
  KeyboardAvoidingView,
  CheckBox,
  Alert,
  Text,
} from "../../components";
import { styles } from "./CartStyle";
import { ScrollView } from "react-native-gesture-handler";

const Cart = ({ navigation, route }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Text style={styles.Title}>Your Cart</Text>
        <Text style={styles.SubTitle}>3 items in Cart </Text>
      </View>

      <View
        style={{
          height: 345,
          backgroundColor: "white",
          width: Dimensions.get("screen").width * 0.9,
          overflow: "scroll",
        }}
      >
        <ScrollViewIndicator
          shouldIndicatorHide={false}
          flexibleIndicator={false}
          scrollIndicatorStyle={{ backgroundColor: "red" }}
          scrollIndicatorContainerStyle={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            width: 4,
          }}
        >
          <View style={styles.Product}>
            <Image
              style={styles.Image}
              source={require("../../assets/Note9.png")}
            />
            <View
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Text style={styles.ProductName}>Galaxy Note 9</Text>
              <Text style={styles.Specs}>128 GB - Black - Excellent</Text>
              <Text style={styles.Price}>USD $250.00</Text>
            </View>
          </View>
          <View style={styles.Product}>
            <Image
              style={styles.Image}
              source={require("../../assets/Note9.png")}
            />
            <View
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Text style={styles.ProductName}>Galaxy Note 9</Text>
              <Text style={styles.Specs}>128 GB - Black - Excellent</Text>
              <Text style={styles.Price}>USD $250.00</Text>
            </View>
          </View>
          <View style={styles.Product}>
            <Image
              style={styles.Image}
              source={require("../../assets/Note9.png")}
            />
            <View
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Text style={styles.ProductName}>Galaxy Note 9</Text>
              <Text style={styles.Specs}>128 GB - Black - Excellent</Text>
              <Text style={styles.Price}>USD $250.00</Text>
            </View>
          </View>
          <View style={styles.Product}>
            <Image
              style={styles.Image}
              source={require("../../assets/Note9.png")}
            />
            <View
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Text style={styles.ProductName}>Galaxy Note 9</Text>
              <Text style={styles.Specs}>128 GB - Black - Excellent</Text>
              <Text style={styles.Price}>USD $250.00</Text>
            </View>
          </View>
        </ScrollViewIndicator>
      </View>

      <View>
        <Text style={styles.Title2}>Your Order</Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Subtotal</Text>
          <Text>USD $250.00</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Shipping</Text>
          <Text>USD $500.00</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Cart;
