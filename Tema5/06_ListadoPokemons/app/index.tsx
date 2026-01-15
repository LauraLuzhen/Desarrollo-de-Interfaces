import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { ListadoPokemon } from "./ui/view/ListadoPokemon";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ListadoPokemon />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
});
