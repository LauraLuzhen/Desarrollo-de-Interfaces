import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

export default function FormularioLogin() {
  return (
    <View style={styles.formulario}>
      <TextInput
        placeholder="Correo electrónico"
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formulario: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    elevation: 4,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 15,
    paddingVertical: 8,
    fontSize: 16,
  },
});
