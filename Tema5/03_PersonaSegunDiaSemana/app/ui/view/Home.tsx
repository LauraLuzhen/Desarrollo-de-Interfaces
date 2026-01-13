import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { homeVM } from "../../core/container";

export default function Home() {
  const persona = homeVM.personaDelDia;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Persona del Día</Text>
      {persona ? (
        <View style={styles.card}>
          <Text style={styles.nombre}>{persona.nombre}</Text>
          <Text style={styles.apellidos}>{persona.apellidos}</Text>
        </View>
      ) : (
        <Text>No hay persona disponible</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    alignItems: "center",
  },
  nombre: {
    fontSize: 20,
    fontWeight: "bold",
  },
  apellidos: {
    fontSize: 18,
    marginTop: 5,
    color: "#555",
  },
});
