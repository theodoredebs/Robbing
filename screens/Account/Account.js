import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  TextInput,
  PassInput,
  Link,
  KeyboardAvoidingView,
  CheckBox,
  Alert,
  Text,
} from "../../components";
import { styles } from "./AccountStyle";

const Account = ({ navigation, route }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      {/* <Text onPress={() => navigation.navigate("accountDetailed")}>
        Account Page
      </Text> */}
      <Text style={styles.Title}>Account Details</Text>
      <View style={{ marginVertical: 20 }}>
        {/* <TouchableOpacity
          onPress={() =>
            navigation.navigate("detailed", { routeType: "Personal" })
          }
          text="Personal"
          settings={["full"]}
        /> */}

        <TouchableOpacity
          style={styles.TO}
          onPress={() =>
            navigation.navigate("accountDetailed", { routeType: "Personal+" })
          }
        >
          <Text style={styles.Text}>Personal</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={35}
            color="#E61A23"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TO}
          onPress={() => navigation.navigate("accountDetailed")}
        >
          <Text style={styles.Text}>Address</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={35}
            color="#E61A23"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TO}
          onPress={() => navigation.navigate("accountDetailed")}
          onPress={() =>
            navigation.navigate("accountDetailed", {
              screen: "Step1",
            })
          }
        >
          <Text style={styles.Text}>Paymen Info</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={35}
            color="#E61A23"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TO}
          onPress={() => navigation.navigate("accountDetailed")}
        >
          <Text style={styles.Text}>Change Password</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={35}
            color="#E61A23"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;
