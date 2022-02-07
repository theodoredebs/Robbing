import React, { useContext, useEffect, useState } from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { RadioButton } from "react-native-paper";
import { OTP } from "react-native-otp-form";
import { AntDesign } from "@expo/vector-icons";
import AnimatedMultistep from "react-native-animated-multistep";
import {
  TextInput,
  PassInput,
  Link,
  TouchableOpacity,
  KeyboardAvoidingView,
  CheckBox,
  Alert,
} from "../../components";

const ForgotPassword = ({ navigation }) => {
  /* Define the steps  */

  const Step1 = (props) => {
    const [userCred, setUserCred] = useState({ email: "" });

    const settingCreds = (e, t) => {
      setUserCred({ ...userCred, [t]: e });
    };
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
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Image
            source={require("../../assets/B2C.png")}
            style={{
              marginTop: 100,
              marginBottom: 50,
              width: 100,
              height: 100,
            }}
            resizeMode="cover"
          />

          <Text
            style={{
              fontSize: 26,
              fontFamily: "Roboto-Normal",
              color: "#E61A23",
            }}
          >
            Forgot Password
          </Text>
        </View>
        <TextInput
          variant="flat"
          label="        Email"
          onChangeText={(e) => settingCreds(e, "email")}
          value={userCred.email}
          left="email-outline"
        />
        <TouchableOpacity
          textStyle={{
            color: "white",
          }}
          text="Continue"
          onPress={() => nextStep(props.next)}
          settings={["primary"]}
        />
      </View>
    );
  };

  const Step2 = (props) => {
    const [checked, setChecked] = React.useState("first");
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
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Image
            source={require("../../assets/B2C.png")}
            style={{
              marginTop: 100,
              marginBottom: 50,
              width: 100,
              height: 100,
            }}
            resizeMode="cover"
          />

          <Text
            style={{
              fontSize: 26,
              fontFamily: "Roboto-Normal",
              color: "#E61A23",
            }}
          >
            Reset Password
          </Text>
        </View>
        <View>
          <View
            style={{
              height: 50,
              marginBottom: 20,
              borderRadius: 10,
              borderWidth: 1,
              shadowColor: "#171717",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              borderColor: "white",
              width: Dimensions.get("screen").width * 0.8,
              backgroundColor: "white",
              elevation: 5,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: 10,
            }}
          >
            <RadioButton
              color="#E61A23"
              value="first"
              status={checked === "first" ? "checked" : "unchecked"}
              onPress={() => setChecked("first")}
            />

            <Text style={{ fontSize: 16 }}>Reset by Email</Text>
          </View>

          <View
            style={{
              height: 50,
              marginBottom: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: "white",
              shadowColor: "#171717",
              shadowOffset: { width: 1, height: 1 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              width: Dimensions.get("screen").width * 0.8,
              backgroundColor: "white",
              elevation: 5,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: 10,
            }}
          >
            <RadioButton
              color="#E61A23"
              value="second"
              status={checked === "second" ? "checked" : "unchecked"}
              onPress={() => setChecked("second")}
            />

            <Text style={{ fontSize: 16 }}>Reset by OTP</Text>
          </View>
        </View>
        <TouchableOpacity
          textStyle={{ color: "white" }}
          text="Continue"
          onPress={() => nextStep(props.next)}
          settings={["primary"]}
        />
        <TouchableOpacity
          textStyle={{ color: "white" }}
          text="Back"
          onPress={() => backStep(props.back)}
          settings={["primary"]}
        />
      </View>
    );
  };

  const Step3 = (props) => {
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
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Image
            source={require("../../assets/B2C.png")}
            style={{
              marginTop: 100,
              marginBottom: 50,
              width: 100,
              height: 100,
            }}
            resizeMode="cover"
          />

          <Text
            style={{
              fontSize: 26,
              fontFamily: "Roboto-Normal",
              color: "#E61A23",
            }}
          >
            OTP Code
          </Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View style={{ marginBottom: 20 }}>
            <OTP
              codeCount={4}
              containerStyle={{ marginTop: 5, marginBottom: 10 }}
              otpStyles={{
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "lightgrey",
                borderRadius: 15,
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "gray" }}>Didn’t receive a code? </Text>
              <Link
                text={" Resend"}
                settings={["primary", "underline", "position", "bold"]}
                // onPress={() =>
                //   navigation.navigate("Auth", { screen: "Forgot Password" })
                // }
              />
            </View>
          </View>
        </View>

        <TouchableOpacity
          textStyle={{ color: "white" }}
          text="Reset Password"
          onPress={() => nextStep(props.next)}
          settings={["primary"]}
        />
        <TouchableOpacity
          textStyle={{ color: "white" }}
          text="Back"
          onPress={() => backStep(props.back)}
          settings={["primary"]}
        />
      </View>
    );
  };

  const Step4 = (props) => {
    const [userCred, setUserCred] = useState({ email: "", password: "" });

    const settingCreds = (e, t) => {
      setUserCred({ ...userCred, [t]: e });
    };
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
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Image
            source={require("../../assets/B2C.png")}
            style={{
              marginTop: 100,
              marginBottom: 50,
              width: 100,
              height: 100,
            }}
            resizeMode="cover"
          />

          <Text
            style={{
              fontSize: 26,
              fontFamily: "Roboto-Normal",
              color: "#E61A23",
            }}
          >
            Reset Password
          </Text>
        </View>

        <View>
          <PassInput
            variant="flat"
            label="        New Password"
            onChangeText={(e) => settingCreds(e, "password")}
            value={userCred.password}
            left="lock-outline"
          />
          <PassInput
            variant="flat"
            label="        Confirm Password"
            onChangeText={(e) => settingCreds(e, "password")}
            value={userCred.password}
            left="lock-outline"
          />
        </View>

        <TouchableOpacity
          textStyle={{ color: "white" }}
          text="Reset Password"
          onPress={() => nextStep(props.next)}
          settings={["primary"]}
        />
      </View>
    );
  };

  const Step5 = (props) => {
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
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Image
            source={require("../../assets/B2C.png")}
            style={{
              marginTop: 100,
              marginBottom: 50,
              width: 100,
              height: 100,
            }}
            resizeMode="cover"
          />

          <AntDesign name="checkcircle" size={50} color="#E61A23" />

          <Text
            style={{
              fontSize: 26,
              fontFamily: "Roboto-Normal",
              color: "#E61A23",
              marginTop: 15,
            }}
          >
            Password Changed
          </Text>

          <Text style={{ margin: 30, fontSize: 20, textAlign: "center" }}>
            Your password has been changed successfully.
          </Text>
        </View>

        <TouchableOpacity
          text="Close"
          onPress={() => navigation.navigate("login")}
          settings={["primary"]}
        />
      </View>
    );
  };

  const allSteps = [
    { name: "step 1", component: Step1 },
    { name: "step 2", component: Step2 },
    { name: "step 3", component: Step3 },
    { name: "step 4", component: Step4 },
    { name: "step 5", component: Step5 },
  ];

  /* Define your class */
  const nextStep = (next) => {
    next();
  };

  const backStep = (back) => {
    back();
  };

  const onNext = () => {
    console.log("Next");
  };

  /* define the method to be called when you go on back step */

  const onBack = () => {
    console.log("Back");
  };

  /* define the method to be called when the wizard is finished */

  const finish = (finalState) => {
    console.log(finalState);
  };

  /* render MultiStep */
  return (
    <View style={{ flex: 1, backgroundColor: "#E61A23" }}>
      <AnimatedMultistep
        steps={allSteps}
        onFinish={finish}
        onBack={onBack}
        onNext={onNext}
        comeInOnNext="bounceInUp"
        OutOnNext="bounceOutDown"
        comeInOnBack="bounceInDown"
        OutOnBack="bounceOutUp"
      />
    </View>
  );
};

export default ForgotPassword;
