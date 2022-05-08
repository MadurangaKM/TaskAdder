import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const Card = (props) => {
  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}>
      <View style={styles.card}>
        <View style={{ flex: 0.8 }}>
          <Text>{props.value}</Text>
        </View>
        <View style={{ flex: 0.2, alignItems: "center" }}>
          <TouchableOpacity
            onPress={props.onPress}
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Icon name="delete" size={24} color="#4C4C4C" />
          </TouchableOpacity>
        </View>
      </View>
    </IconComponentProvider>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EAEAEA",
    height: 50,
    alignItems: "center",
    paddingLeft: 15,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default Card;
