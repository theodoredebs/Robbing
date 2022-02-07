import React, { useContext, useEffect, useState } from "react";
import {
  View,
  TouchableOpacity as TO,
  Dimensions,
  svg,
  Linking,
  Image,
} from "react-native";
import { MainContext } from "../../MainContext";
import { formValidator } from "../../helpers/formValidator";
import {
  TextInput,
  PassInput,
  Link,
  TouchableOpacity,
  KeyboardAvoidingView,
  CheckBox,
  Alert,
  Text,
} from "../../components";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { styles } from "./LoginStyle";
import { storeData, removeKey, getData } from "../../helpers/asyncStorage";
import { emptyString } from "../../helpers/emptyString";
import AlertComponent from "../../components/Alert";

const Login = ({ navigation }) => {
  const { signIn } = useContext(MainContext);
  const [alert, setAlert] = useState({ visible: false, data: {} });

  const [showPass, setShowPass] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  const [userCred, setUserCred] = useState({ email: "", password: "" });

  const settingCreds = (e, t) => {
    setUserCred({ ...userCred, [t]: e });
  };

  const asyncRemember = async () => {
    if (!rememberMe && emptyString(userCred)) {
      Alert("Error", "Please insert both email and password first");
      return;
    } else {
      if (rememberMe) {
        setRememberMe(!rememberMe);
        await removeKey("remember_me");
      } else {
        setRememberMe(!rememberMe);
        await storeData("remember_me", userCred);
        // console.log("added")
      }
    }
  };

  const openUrl = async (url) => {
    await Linking.openURL(url);
  };

  useEffect(() => {
    // const checkForRemember = async () => {
    //   if ((await getData("remember_me")) !== undefined) {
    //     let json = await getData("remember_me");
    //     setUserCred({ email: json?.email + "", password: json?.password + "" });
    //     setRememberMe(true);
    //   }
    // };
    // checkForRemember();
  }, [setUserCred]);

  return (
    <View
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Image
        source={require("../../assets/B2C.png")}
        style={styles.LogoImg}
        resizeMode="cover"
      />

      <TextInput
        variant="flat"
        label="        Email"
        onChangeText={(e) => settingCreds(e, "email")}
        value={userCred.email}
        left="account-outline"
      />
      <View>
        <PassInput
          variant="flat"
          label="        Password"
          onChangeText={(e) => settingCreds(e, "password")}
          value={userCred.password}
          left="lock-outline"
        />
        <Link
          text={"Forgot Password"}
          settings={["grey", "underline", "position"]}
          onPress={() =>
            navigation.navigate("Auth", { screen: "Forgot Password" })
          }
        />
      </View>
      <View style={{ display: "flex", flexDirection: "column", marginTop: 15 }}>
        <TouchableOpacity
          style={{
            width: Dimensions.get("screen").width * 0.8,
          }}
          textStyle={{ color: "white" }}
          text="Login"
          onPress={() =>
            formValidator(userCred, "login", () => signIn(navigation))
          }
          settings={["primary"]}
        />
        {/* <TouchableOpacity
          style={{
            width: Dimensions.get("screen").width * 0.75,
            backgroundColor: "white",
            borderStyle: "solid",
            borderColor: "#E61A23",
            borderWidth: 2,
          }}
          textStyle={{ color: "#E61A23" }}
          text="Register"
          onPress={() =>
            formValidator(userCred, "login", () => signIn(navigation))
          }
          settings={["primary"]}
        /> */}

        {/* <TO
          style={styles.RegisterButton}
          onPress={() => navigation.navigate("Auth", { screen: "register" })}
        >
          <Text style={styles.RegisterText}>Register</Text>
        </TO> */}
      </View>
      {/* <Link
        text={"Register"}
        settings={["primary", "underline"]}
        onPress={() => navigation.navigate("Auth", { screen: "register" })}
      /> */}

      <View style={styles.loginContainer}>
        <View style={styles.line}></View>
        <Text style={styles.loginText}>or Log in using</Text>
        <View style={styles.line}></View>
      </View>

      <View style={styles.Icons}>
        <TO
          onPress={() => openUrl("https://www.facebook.com")}
          style={styles.Circle}
        >
          <FontAwesome name="facebook" size={32} color="#1877f2" />
        </TO>
        <TO
          onPress={() => openUrl("https://www.google.com")}
          style={styles.Circle}
        >
          <Image
            style={{ height: 30, width: 30 }}
            source={require("../../assets/google.png")}
          />
        </TO>
      </View>

      <View style={styles.NoAccountContainer}>
        <Text style={styles.loginText}>Don’t have an account?</Text>
        <Link
          text={"SIGN UP"}
          style={{ alignItems: "flex-end" }}
          settings={["primary", "bold", "large"]}
          onPress={() => navigation.navigate("Auth", { screen: "register" })}
        />
      </View>
    </View>
  );
};

export default Login;
