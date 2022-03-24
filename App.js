import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy a chocolate", key: "1", completed: false },
    { text: "Learn react native", key: "2", completed: false },
    { text: "Watch animes", key: "3", completed: false },
  ]);

  const deleteTodos = (key) => {
    let newTodo = todos.filter((todo) => todo.key != key);
    setTodos(newTodo);
  };

  const addTodo = (texts) => {
    if (texts.length > 2) {
      let newKey = new Date().getTime().toString();
      setTodos((prevTodos) => {
        return [{ text: texts, key: newKey, completed: false }, ...prevTodos];
      });
    } else {
      Alert.alert("Oh God, Noooo", "Todos length must be greater than 2", [
        { text: "Okay" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} del={deleteTodos} />
              )}
            />
            <AddTodo addTodo={addTodo} />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
