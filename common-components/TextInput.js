import { TextInput, StyleSheet } from "react-native";

const TextInputField = (props) => {
  return (
    <TextInput
      placeholder={props.placeHolder}
      style={styles.textInput}
      onChangeText={props.onChangeText}
      value={props.value}
      onSubmitEditing={props.onSubmitEditing}
    />
  );
};
const styles = StyleSheet.create({
  textInput: {
    borderColor: "#828282",
    borderWidth: 1,
    padding: 3,
    paddingLeft: 10,
    height: 34,
    marginRight: 6,
    borderRadius: 10,
  },
});

export default TextInputField;
