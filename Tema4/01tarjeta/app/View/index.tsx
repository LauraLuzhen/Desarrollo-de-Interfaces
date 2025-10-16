import { Text, StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { useUsuariosViewModel } from "../ViewModels/indexMV";

export default function Index() {
  const { usuarios } = useUsuariosViewModel();

  return (
    <FlatList
      data={usuarios}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text}>{item.nombre} {item.apellido}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3ff',
    alignItems: 'center',
  },
  text: {
    fontSize: 17
  }
});