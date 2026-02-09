import { PlayerToken } from "../../domain/entities/GameEntities";
import { IGameRepository } from "../../domain/interfaces/repositories/IGameRepository";
import { Connection } from "../network/Connection";

export class GameRepository implements IGameRepository {
  private connection: Connection;

  constructor(connection?: Connection) {
    this.connection = connection ?? new Connection();
  }

  async connect(): Promise<void> {
    await this.connection.start();
  }

  async disconnect(): Promise<void> {
    await this.connection.stop();
  }

  async joinGame(playerName: string): Promise<void> {
    await this.connection.invoke("UnirseAlJuego", playerName);
  }

  async playMove(index: number): Promise<void> {
    await this.connection.invoke("MarcarCasilla", index);
  }

  onTokenAssigned(callback: (token: PlayerToken) => void): void {
    this.connection.on("AsignarFicha", callback);
  }

  onWaitingOpponent(callback: () => void): void {
    this.connection.on("EsperandoOponente", callback);
  }

  onGameStarted(callback: (playerName: string) => void): void {
    this.connection.on("IniciarJuego", (data: any) => {
      callback(data.nombreTurno);
    });
  }

  onBoardUpdated(callback: (index: number, token: PlayerToken) => void): void {
    this.connection.on("ActualizarTablero", callback);
  }

  onTurnChanged(callback: (playerName: string) => void): void {
    this.connection.on("CambioDeTurno", (_id: string, name: string) => {
      callback(name);
    });
  }

  onGameFinished(
    callback: (
      result: "WIN" | "DRAW",
      winnerName?: string,
      winnerToken?: PlayerToken,
    ) => void,
  ): void {
    this.connection.on(
      "FinJuego",
      (resultado: string, ganador: string, ficha: PlayerToken) => {
        if (resultado === "Tablas") {
          callback("DRAW");
        } else {
          callback("WIN", ganador, ficha);
        }
      },
    );
  }

  onGameReset(callback: () => void): void {
    this.connection.on("JuegoReiniciado", callback);
  }

  onError(callback: (message: string) => void): void {
    this.connection.on("Error", callback);
  }
}
