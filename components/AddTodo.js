import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState("");

  const changeText = (val) => {
    console.log(val);
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="Add todos"
        style={styles.input}
        onChangeText={changeText}
      />
      <Button
        title="Add Todo"
        onPress={() => {
          addTodo(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 40,
    marginBottom: 10,
    padding: 12,
    borderColor: "#1111ff",
    borderBottomWidth: 1,
  },
});
