import React, { useEffect, useContext } from "react";
import { MainContext } from "../../MainContext";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TextInput,
  PassInput,
  Link,
  KeyboardAvoidingView,
  CheckBox,
  Alert,
  Text,
  SearchBar,
} from "../../components";
import Slideshow from "react-native-image-slider-show";
import { styles } from "./HomeStyle";

const Home = ({ navigation }) => {
  const { LoggedIn } = useContext(MainContext);
  useEffect(() => {}, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <View style={styles.SignIn}>
        <Text style={styles.Text}>Sign in to see personalised deals</Text>
        <TouchableOpacity
          text="Sign In"
          onPress={() => navigation.navigate("Auth")}
          settings={["home"]}
        />
      </View>

      <SearchBar placeholder="Search Here" />

      <Slideshow
        dataSource={[
          { url: "http://placeimg.com/640/480/any" },
          { url: "http://placeimg.com/640/480/any" },
          { url: "http://placeimg.com/640/480/any" },
        ]}
      />
    </View>
  );
};

export default Home;
