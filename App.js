import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import FlashMessage from "react-native-flash-message";
import { showMessage } from "react-native-flash-message";
import Button from "./common-components/Button";
import TextInputField from "./common-components/TextInput";
import Card from "./common-components/Card";
export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [allGoalsset, setAllGoalsset] = useState([]);

  const textInputHandler = (text) => {
    setEnteredGoal(text);
  };

  const addHanler = () => {
    if (enteredGoal == "") {
      showMessage({
        message: "Item Can Not Be Bank",
        type: "danger",
      });
      return;
    }
    let isSame = allGoalsset.filter((item) => {
      return item.value == enteredGoal;
    });

    if (Object.keys(isSame).length !== 0) {
      showMessage({
        message: "Item Is Already Exit",
        type: "warning",
      });
      return;
    }
    setAllGoalsset([
      ...allGoalsset,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    setEnteredGoal("");
    showMessage({
      message: "Sucessfully Added Item",
      type: "success",
    });
  };
  const handleDelete = (id) => {
    setAllGoalsset((allGoalsset) => {
      return allGoalsset.filter((item) => item.key !== id);
    });
    showMessage({
      message: "Sucessfully Deleted Item",
      type: "success",
    });
  };

  return (
    <View style={styles.root}>
      <View style={styles.inputView}>
        <View style={{ flex: 0.8 }}>
          <TextInputField
            placeholder="Add your task"
            onChangeText={textInputHandler}
            value={enteredGoal}
            onSubmitEditing={addHanler}
          />
        </View>
        <View style={{ flex: 0.2 }}>
          <Button onPress={addHanler} title="ADD" />
        </View>
      </View>
      <FlatList
        data={allGoalsset}
        renderItem={(itemData) => (
          <Card
            value={itemData.item.value}
            onPress={handleDelete.bind(this, itemData.item.key)}
          />
        )}
        keyExtractor={(item, index) => item.key}
      />
      <FlashMessage position="top" statusBarHeight={50} icon={"auto"} />
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    padding: 20,
    paddingTop: 60,
    marginBottom: 50,
  },
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },
});
