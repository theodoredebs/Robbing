import React, { useState } from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { styles } from "./AboutStyle";
import { Ionicons, FontAwesome, Feather } from "@expo/vector-icons";
import {
  Text,
  Alert,
  DocumentPicker,
  ImagePicker,
  Switch,
  ActivityIndicator,
  Picker,
  ViewContainer,
  CheckBox,
  MultiSelect,
  ScrollView,
  HeaderText,
} from "../../components/index";

const About = ({ navigation }) => {
  const [document, setDocument] = useState();
  const [image, setImage] = useState();
  const [switchToggle, setSwitchToggle] = useState(false);
  const [selected, setSelected] = useState();
  const [checked, setChecked] = useState(false);
  const [multiple, setMultiple] = useState();

  return (
    <ScrollView>
      <ViewContainer style={{ paddingHorizontal: 20 }}>
        <HeaderText style={styles.headerText}>About Us</HeaderText>
        {/* <Text onPress={() => navigation.navigate("aboutDetailed")}>About Page</Text> */}
        {/* <DocumentPicker
                text="Get document"
                leftIcon={{
                    icon: <Entypo name="text-document" size={24} color="black" />
                }}
                rightIcon={{
                    icon: <Entypo name="aircraft" size={24} color="black" />
                }}

                // onPress={()=>}
                setDocument={(e) => setDocument(e)}
                types={["pdf","docx"]}
            /> */}
        {/* <DocumentPicker
          text="Get document without right icon"
          leftIcon={{
            icon: <Entypo name="text-document" size={24} color="black" />,
          }}
          setDocument={(e) => setDocument(e)}
          types={["pdf", "docx"]}
        /> */}
        {/* <TouchableOpacity
          onPress={() =>
            Alert(
              "State",
              document
                ? document
                : "I didn't receive the document from the child component yet"
            )
          }
        >
          <Text>Press me to test if I received the state or not</Text>
        </TouchableOpacity> */}
        {/* <ImagePicker
          setImage={(e) => setImage(e)}
          icon={<Entypo name="camera" size={24} color="black" />}
        /> */}
        {/* <ImagePicker setImage={(e) => setImage(e)} /> */}
        {/* {image && (
          <Image
            source={{ uri: image }}
            resizeMode="cover"
            style={{ width: 300, height: 300 }}
          />
        )} */}
        {/* <Switch
          onValueChange={() => setSwitchToggle(!switchToggle)}
          value={switchToggle}
          left="Switch"
        />
        <Switch
          onValueChange={() => setSwitchToggle(!switchToggle)}
          value={switchToggle}
          right="Switch"
        /> */}
        {/* <Picker
          text="Fruits"
          items={[
            {
              name: "Fruits",
              id: 1,
              children: [
                { name: "Apples", id: 2 },
                { name: "Oranges", id: 3 },
              ],
            },
          ]}
          onSelectedItemsChange={(e) => {
            setSelected(e);
          }}
          selectedItems={selected}
        /> */}
        {/* <CheckBox
          value={checked}
          onValueChange={() => setChecked(!checked)}
          left="Checkbox"
        /> */}
        {/* <MultiSelect
          text="Brands"
          items={[
            {
              name: "Apple",
              id: 1,
              children: [
                { name: "Laptop", id: 2 },
                { name: "Iphone", id: 3 },
              ],
            },
            {
              name: "Samsung",
              id: 4,
              children: [
                { name: "Laptop", id: 5 },
                { name: "Iphone", id: 6 },
              ],
            },
          ]}
          onSelectedItemsChange={(e) => {
            setSelected(e);
          }}
          selectedItems={selected}
        /> */}

        <Image
          style={styles.Banner}
          source={require("../../assets/Banner.png")}
          resizeMethod="auto"
          resizeMode="cover"
        />
        <Text style={styles.Text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo
          eget arcu faucibus varius tincidunt id nunc. Aliquam pretium lorem id
          elementum sodales. Quisque varius lectus id tempus ullamcorper.
          Curabitur in eros sodales metus convallis molestie.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo
          eget arcu faucibus varius tincidunt id nunc. Aliquam pretium lorem id
          elementum sodales. Quisque varius lectus id tempus ullamcorper.
          Curabitur in eros sodales metus convallis molestie.
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo
          eget arcu faucibus varius tincidunt id nunc. Aliquam pretium lorem id
          elementum sodales. Quisque varius lectus id tempus ullamcorper.
          Curabitur in eros sodales metus convallis molestie.
        </Text>
      </ViewContainer>
    </ScrollView>
  );
};

export default About;
