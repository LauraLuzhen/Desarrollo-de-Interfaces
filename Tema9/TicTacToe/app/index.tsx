import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useGameViewModel } from "./ui/viewmodels/GameViewModel";

export default function App() {
  const vm = useGameViewModel();

  // 1. Pantalla de Login
  if (!vm.joined) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TicTacToe</Text>
        <Text style={styles.connection}>
          {vm.isConnected ? "🟢 Conectado" : "🔴 Conectando..."}
        </Text>

        {/* Fondito cute para el nombre */}
        <View style={styles.playerNameBox}>
          <TextInput
            placeholder="Tu nombre"
            placeholderTextColor="#D98AB3"
            style={styles.input}
            value={vm.name}
            onChangeText={vm.setName}
          />
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={vm.joinGame}>
          <Text style={styles.primaryButtonText}>Unirse al juego</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // 2. Pantalla de Juego
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TicTacToe</Text>

      {/* Fondito cute para la ficha */}
      <View style={styles.tokenBox}>
        <Text style={styles.subinfo}>Tu ficha: {vm.myToken}</Text>
      </View>

      <Text style={styles.status}>{vm.status}</Text>

      <View style={styles.board}>
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

      <TouchableOpacity style={styles.secondaryButton} onPress={vm.leaveGame}>
        <Text style={styles.secondaryButtonText}>Volver a jugar</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE6F2",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 42,
    fontWeight: "900",
    color: "#FF3FA8",
    marginBottom: 10,
    letterSpacing: 2,
    textShadowColor: "rgba(255, 105, 180, 0.4)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },

  connection: {
    marginBottom: 20,
    fontSize: 16,
    color: "#C74F7A",
  },

  /* Fondito cute para el nombre */
  playerNameBox: {
    backgroundColor: "#FFD1EC",
    padding: 10,
    borderRadius: 16,
    marginBottom: 10,
    shadowColor: "#FFBEEA",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },

  input: {
    width: 240,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: "#FFF0F8",
    borderWidth: 2,
    borderColor: "#FF9BD4",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#D63384",
  },

  primaryButton: {
    backgroundColor: "#FF66B3",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 14,
    elevation: 3,
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
  },

  /* Fondito cute para la ficha */
  tokenBox: {
    backgroundColor: "#FFD1EC",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 16,
    marginBottom: 8,
    shadowColor: "#FFBEEA",
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },

  subinfo: {
    fontSize: 22,
    fontWeight: "900",
    color: "#FF4FA3",
    textShadowColor: "rgba(255, 150, 200, 0.5)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  },

  status: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "700",
    color: "#FF4FA3",
  },

  board: {
    width: 240,
    height: 240,
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 20,
    backgroundColor: "#FFD6EB",
    borderRadius: 16,
    shadowColor: "#FF8AC9",
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },

  cell: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "#FFB3D9",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  cellText: {
    fontSize: 38,
    fontWeight: "900",
    color: "#FF4FA3",
  },

  secondaryButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FF66B3",
  },

  secondaryButtonText: {
    color: "#FF66B3",
    fontSize: 16,
    fontWeight: "700",
  },
});
