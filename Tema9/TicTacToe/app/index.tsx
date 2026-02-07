import * as signalR from "@microsoft/signalr";
import React, { useEffect, useState } from "react";
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function App() {
  const [connection, setConnection] = useState<signalR.HubConnection | null>(
    null,
  );
  const [isConnected, setIsConnected] = useState(false);

  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);

  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [status, setStatus] = useState("Conectando...");
  const [myToken, setMyToken] = useState("");

  const [roomFull] = useState(false);

  const leaveGame = async () => {
    if (connection) {
      await connection.stop();
    }

    // Resetear estado
    setJoined(false);
    setName("");
    setBoard(Array(9).fill(""));
    setStatus("Conectando...");
    setMyToken("");
    setIsConnected(false);

    // Crear nueva conexión limpia
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5228/gameHub")
      .withAutomaticReconnect()
      .build();

    newConnection
      .start()
      .then(() => {
        console.log("🔄 Reconectado");
        setIsConnected(true);
        setStatus("Conectado");
      })
      .catch((err) => console.error(err));

    // Re-registrar eventos
    newConnection.on("AsignarFicha", (ficha: string) => {
      setMyToken(ficha);
    });

    newConnection.on("EsperandoOponente", () => {
      setStatus("Esperando oponente...");
    });

    newConnection.on("IniciarJuego", (datos) => {
      setStatus("Turno de: " + datos.nombreTurno);
    });

    newConnection.on("ActualizarTablero", (index: number, ficha: string) => {
      setBoard((prev) => {
        const newBoard = [...prev];
        newBoard[index] = ficha;
        return newBoard;
      });
    });

    newConnection.on("CambioDeTurno", (id, nombre) => {
      setStatus("Turno de: " + nombre);
    });

    newConnection.on(
      "FinJuego",
      (resultado: string, ganador: string, ficha: string) => {
        if (resultado === "Tablas") {
          setStatus("¡Empate!");
        } else {
          setStatus(`¡Ganador: ${ganador} (${ficha})!`);
        }
      },
    );

    setConnection(newConnection);
  };

  // 🔥 Conectar a SignalR
  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5228/gameHub")
      .withAutomaticReconnect()
      .build();

    newConnection
      .start()
      .then(() => {
        console.log("✅ Conectado a SignalR");
        setIsConnected(true);
        setStatus("Conectado");
      })
      .catch((err) => console.error("❌ Error conexión:", err));

    // 👂 Eventos del servidor

    newConnection.on("AsignarFicha", (ficha: string) => {
      setMyToken(ficha);
    });

    newConnection.on("EsperandoOponente", () => {
      setStatus("Esperando oponente...");
    });

    newConnection.on("IniciarJuego", (datos) => {
      setStatus("Turno de: " + datos.nombreTurno);
    });

    newConnection.on("ActualizarTablero", (index: number, ficha: string) => {
      setBoard((prev) => {
        const newBoard = [...prev];
        newBoard[index] = ficha;
        return newBoard;
      });
    });

    newConnection.on("CambioDeTurno", (id, nombre) => {
      setStatus("Turno de: " + nombre);
    });

    newConnection.on(
      "FinJuego",
      (resultado: string, ganador: string, ficha: string) => {
        if (resultado === "Tablas") {
          setStatus("¡Empate!");
        } else {
          setStatus(`¡Ganador: ${ganador} (${ficha})!`);
        }
      },
    );

    newConnection.on("JuegoReiniciado", () => {
      setBoard(Array(9).fill(""));
      setStatus("Juego reiniciado");
    });

    newConnection.on("Error", (mensaje: string) => {
      alert(mensaje); // Muestra “Sala ocupada”
      setJoined(false); // Vuelve a login
    });

    setConnection(newConnection);
  }, []);

  // 🎮 Unirse al juego
  const joinGame = () => {
    if (!connection || !isConnected) {
      alert("Aún conectando...");
      return;
    }

    connection.invoke("UnirseAlJuego", name).catch((err) => {
      console.error(err);
      alert("Error al unirse: " + err);
    });

    setJoined(true);
  };

  // 🎯 Marcar casilla
  const play = (index: number) => {
    if (!connection) return;

    connection.invoke("MarcarCasilla", index);
  };

  // 🟢 Pantalla login
  if (!joined) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>TicTacToe</Text>

        <Text>{isConnected ? "🟢 Conectado" : "🔴 Conectando..."}</Text>

        <TextInput
          placeholder="Tu nombre"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <Button title="Unirse al juego" onPress={joinGame} />

        {roomFull && (
          <View style={{ marginTop: 10 }}>
            <Button title="Reintentar" onPress={leaveGame} />
          </View>
        )}
      </View>
    );
  }

  // 🎲 Pantalla juego
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TicTacToe</Text>

      <Text>Tu ficha: {myToken}</Text>
      <Text style={styles.status}>{status}</Text>

      <View style={styles.board}>
        {board.map((cell, i) => (
          <TouchableOpacity key={i} style={styles.cell} onPress={() => play(i)}>
            <Text style={styles.cellText}>{cell}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button title="Volver a jugar" onPress={leaveGame} />
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
