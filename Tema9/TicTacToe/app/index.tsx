import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useGameViewModel } from "./ui/viewmodels/GameViewModel";

export default function App() {
  const vm = useGameViewModel();

  // 1. Pantalla de Login
  if (!vm.joined) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TicTacToe</Text>
        <Text>{vm.isConnected ? "🟢 Conectado" : "🔴 Conectando..."}</Text>
        <TextInput
          placeholder="Tu nombre"
          style={styles.input}
          value={vm.name}
          onChangeText={vm.setName}
        />
        <Button title="Unirse al juego" onPress={vm.joinGame} />
      </View>
    );
  }

  // 2. Pantalla de Juego (Sin espacios fantasma)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TicTacToe</Text>
      <Text>Tu ficha: {vm.myToken}</Text>
      <Text style={styles.status}>{vm.status}</Text>
      
      <View style={styles.board}>
        {/* Usamos el operador ?. para evitar errores si board no ha cargado */}
        {vm.board?.map((cell, i) => (
          <TouchableOpacity
            key={i}
            style={styles.cell}
            onPress={() => vm.play(i)}
          >
            <Text style={styles.cellText}>{cell}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="Volver a jugar" onPress={vm.leaveGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    width: 200,
    padding: 8,
    marginVertical: 10,
    textAlign: "center",
  },
  status: {
    marginVertical: 10,
    fontSize: 16,
  },
  board: {
    width: 240,
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 20,
  },
  cell: {
    width: 80,
    height: 80,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cellText: {
    fontSize: 32,
  },
});