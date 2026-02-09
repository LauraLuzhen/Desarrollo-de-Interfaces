import { useEffect, useState } from "react";
import { GameRepository } from "../../data/repositories/GameRepository";
import { GameUseCases } from "../../domain/usecases/GameUseCases";

export function useGameViewModel() {
  const repository = new GameRepository();
  const useCases = new GameUseCases(repository);

  const [isConnected, setIsConnected] = useState(false);
  const [joined, setJoined] = useState(false);
  const [name, setName] = useState("");

  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [status, setStatus] = useState("Conectando...");
  const [myToken, setMyToken] = useState("");

  // 🔥 Conectar al iniciar
  useEffect(() => {
    const init = async () => {
      try {
        await useCases.connect();
        setIsConnected(true);
        setStatus("Conectado");

        useCases.subscribeToGameEvents({
          onTokenAssigned: (token) => setMyToken(token),

          onWaitingOpponent: () => setStatus("Esperando oponente..."),

          onGameStarted: (playerName) => setStatus("Turno de: " + playerName),

          onBoardUpdated: (index, token) => {
            setBoard((prev) => {
              const newBoard = [...prev];
              newBoard[index] = token;
              return newBoard;
            });
          },

          onTurnChanged: (playerName) => setStatus("Turno de: " + playerName),

          onGameFinished: (result, winner, token) => {
            if (result === "DRAW") {
              setStatus("¡Empate!");
            } else {
              setStatus(`¡Ganador: ${winner} (${token})!`);
            }
          },

          onGameReset: () => {
            setBoard(Array(9).fill(""));
            setStatus("Juego reiniciado");
          },

          onError: (msg) => {
            alert(msg);
            setJoined(false);
          },
        });
      } catch (err) {
        console.error(err);
      }
    };

    init();

    return () => {
      useCases.disconnect();
    };
  }, []);

  // 🎮 Acciones

  const joinGame = async () => {
    try {
      await useCases.joinGame(name);
      setJoined(true);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const play = async (index: number) => {
    try {
      await useCases.playMove(index);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const leaveGame = async () => {
    await useCases.disconnect();

    setJoined(false);
    setName("");
    setBoard(Array(9).fill(""));
    setStatus("Conectando...");
    setMyToken("");
    setIsConnected(false);

    await useCases.connect();
    setIsConnected(true);
    setStatus("Conectado");
  };

  return {
    // state
    isConnected,
    joined,
    name,
    board,
    status,
    myToken,

    // setters
    setName,

    // actions
    joinGame,
    play,
    leaveGame,
  };
}
