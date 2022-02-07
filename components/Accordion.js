import * as React from "react";
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { List, TextInput } from "react-native-paper";

const Accordion = (props) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View style={[styles.container, props.containerStyle]}>
      <List.Accordion
        style={[styles.accordion, props.accordionStyle]}
        title="What is Lorem ipsum dolor?"
        left={(props) => (
          <MaterialCommunityIcons
            name="numeric-1-circle-outline"
            size={30}
            color="#E61A23"
          />
        )}
      >
        {/* <List.Item
          titleStyle={{
            height: 300,
            flexWrap: "wrap",
            display: "flex",
            flexShrink: 1,
          }}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo eget arcu faucibus varius tincidunt id nunc."
        /> */}
        <Text style={[styles.text, props.textStyle]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo
          eget arcu faucibus varius tincidunt id nunc.Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec a justo eget arcu faucibus
          varius tincidunt id nunc.
        </Text>
      </List.Accordion>

      <List.Accordion
        style={[styles.accordion, props.accordionStyle]}
        title="What is Lorem ipsum dolor?"
        left={(props) => (
          <MaterialCommunityIcons
            name="numeric-2-circle-outline"
            size={30}
            color="#E61A23"
          />
        )}
      >
        <Text style={[styles.text, props.textStyle]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo
          eget arcu faucibus varius tincidunt id nunc.
        </Text>
      </List.Accordion>

      <List.Accordion
        style={[styles.accordion, props.accordionStyle]}
        title="What is Lorem ipsum dolor?"
        left={(props) => (
          <MaterialCommunityIcons
            name="numeric-3-circle-outline"
            size={30}
            color="#E61A23"
          />
        )}
      >
        <Text style={[styles.text, props.textStyle]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo
          eget arcu faucibus varius tincidunt id nunc.
        </Text>
      </List.Accordion>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: Dimensions.get("screen").width,
    display: "flex",
    flexDirection: "column",
  },

  accordion: {
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
    shadowColor: "#A6A6A6",
    shadowOpacity: 1,
    shadowOffset: { width: 5, height: 5 },
  },

  text: {
    color: "grey",
    fontSize: 16,
  },
});

export default Accordion;
