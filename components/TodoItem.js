import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, del }) {
  return (
    <TouchableOpacity
      onPress={() => {
        del(item.key);
      }}
    >
      <View style={styles.items}>
        <Text>{item.text}</Text>
        <MaterialIcons name="delete" size={20} color="#444" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  items: {
    padding: 16,
    marginTop: 15,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
