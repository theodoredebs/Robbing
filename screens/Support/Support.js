import React, { useState } from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { styles } from "./SupportStyle";
import {
  Ionicons,
  FontAwesome,
  Feather,
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  Text,
  TextInput,
  Alert,
  DocumentPicker,
  ImagePicker,
  Switch,
  ActivityIndicator,
  Picker,
  ViewContainer,
  CheckBox,
  MultiSelect,
  CountryCode,
  ScrollView,
  HeaderText,
  Accordion,
} from "../../components/index";

const Support = ({ navigation }) => {
  const [document, setDocument] = useState();
  const [image, setImage] = useState();
  const [switchToggle, setSwitchToggle] = useState(false);
  const [selected, setSelected] = useState();
  const [checked, setChecked] = useState(false);
  const [multiple, setMultiple] = useState();

  const [userCred, setUserCred] = useState({
    email: "",
    fullname: "",
    phone: "",
    message: "",
  });

  const settingCreds = (e, t) => {
    setUserCred({ ...userCred, [t]: e });
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <ViewContainer style={{ paddingHorizontal: 20 }}>
        <HeaderText style={styles.headerText}>Support</HeaderText>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={styles.Button}>
            <FontAwesome name="support" size={30} color="#E61A23" />
            <Text style={styles.Subtitle}>Get started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <MaterialCommunityIcons
              name="account-multiple"
              size={35}
              color="#E61A23"
            />
            <Text style={styles.Subtitle}>Accounts</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={styles.Button}>
            <MaterialIcons name="subscriptions" size={30} color="#E61A23" />
            <Text style={styles.Subtitle}>Subscription</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <MaterialIcons name="help-center" size={30} color="#E61A23" />
            <Text style={styles.Subtitle}>Help</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.Title}>Frequently asked questions</Text>
        </View>

        <View>
          <Accordion containerStyle={styles.Accordion} />
        </View>

        {/* <Image
          style={styles.Banner}
          source={require("../../assets/Banner.png")}
          resizeMethod="auto"
          resizeMode="cover"
        />

        <View style={styles.textContainer}>
          <Text style={styles.Text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            justo eget arcu faucibus varius tincidunt id nunc. Aliquam pretium
            lorem id elementum sodales. Quisque varius lectus id tempus
            ullamcorper. Curabitur in eros sodales metus convallis molestie.
          </Text>
          <View style={styles.Separator}></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
            }}
          >
            <View style={styles.Cover}>
              <Feather name="eye" size={24} color="white" />
            </View>
            <Text style={styles.Title}>Our Vision</Text>
          </View>
          <Text style={styles.Text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            justo eget arcu faucibus varius tincidunt id nunc. Aliquam pretium
            lorem id elementum sodales. Quisque varius lectus id tempus
            ullamcorper. Curabitur in eros sodales metus convallis molestie.
          </Text>
          <View style={styles.Separator}></View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "flex-start",
            }}
          >
            <View style={styles.Cover}>
              <Feather name="eye" size={24} color="white" />
            </View>
            <Text style={styles.Title}>Our Mission</Text>
          </View>
          <Text style={styles.Text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            justo eget arcu faucibus varius tincidunt id nunc. Aliquam pretium
            lorem id elementum sodales. Quisque varius lectus id tempus
            ullamcorper. Curabitur in eros sodales metus convallis molestie.
          </Text>
        </View> */}
      </ViewContainer>
    </ScrollView>
  );
};

export default Support;
