import { IGameRepository } from "../interfaces/repositories/IGameRepository";

export class GameUseCases {
  constructor(private repository: IGameRepository) {}

  async connect() {
    await this.repository.connect();
  }

  async disconnect() {
    await this.repository.disconnect();
  }

  async joinGame(name: string) {
    if (!name.trim()) {
      throw new Error("El nombre no puede estar vacío");
    }

    await this.repository.joinGame(name);
  }

  async playMove(index: number) {
    if (index < 0 || index > 8) {
      throw new Error("Movimiento inválido");
    }

    await this.repository.playMove(index);
  }

  subscribeToGameEvents(callbacks: {
    onTokenAssigned?: (token: any) => void;
    onWaitingOpponent?: () => void;
    onGameStarted?: (playerName: string) => void;
    onBoardUpdated?: (index: number, token: any) => void;
    onTurnChanged?: (playerName: string) => void;
    onGameFinished?: (
      result: "WIN" | "DRAW",
      winnerName?: string,
      winnerToken?: any,
    ) => void;
    onGameReset?: () => void;
    onError?: (message: string) => void;
  }) {
    if (callbacks.onTokenAssigned)
      this.repository.onTokenAssigned(callbacks.onTokenAssigned);

    if (callbacks.onWaitingOpponent)
      this.repository.onWaitingOpponent(callbacks.onWaitingOpponent);

    if (callbacks.onGameStarted)
      this.repository.onGameStarted(callbacks.onGameStarted);

    if (callbacks.onBoardUpdated)
      this.repository.onBoardUpdated(callbacks.onBoardUpdated);

    if (callbacks.onTurnChanged)
      this.repository.onTurnChanged(callbacks.onTurnChanged);

    if (callbacks.onGameFinished)
      this.repository.onGameFinished(callbacks.onGameFinished);

    if (callbacks.onGameReset)
      this.repository.onGameReset(callbacks.onGameReset);

    if (callbacks.onError) this.repository.onError(callbacks.onError);
  }
}
