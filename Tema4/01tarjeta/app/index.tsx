import React from 'react';
import { Text, View, Image, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    elevation: 4,
    margin: 16,
    borderColor: "#000",
    borderWidth: 1
  },
});

export default function Index() {
  return (
    <View style={Styles.card}>
      <Image
        source={
          require('../assets/images/flor.jpg')
        }
        style={{ width: 164, height: 164, borderRadius: 9999 }}
      />
      <Text>Hola</Text>
    </View>
  );
}