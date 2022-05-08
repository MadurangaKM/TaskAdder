import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
      <Text style={{ color: "#ffff", fontWeight: "bold" }}>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#59BCC8",
    height: 34,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Button;
