import { PlayerToken } from "../../entities/GameEntities";

export interface IGameRepository {
  connect(): Promise<void>;
  disconnect(): Promise<void>;

  joinGame(playerName: string): Promise<void>;
  playMove(index: number): Promise<void>;

  onTokenAssigned(callback: (token: PlayerToken) => void): void;
  onWaitingOpponent(callback: () => void): void;
  onGameStarted(callback: (playerName: string) => void): void;
  onBoardUpdated(callback: (index: number, token: PlayerToken) => void): void;
  onTurnChanged(callback: (playerName: string) => void): void;
  onGameFinished(
    callback: (
      result: "WIN" | "DRAW",
      winnerName?: string,
      winnerToken?: PlayerToken,
    ) => void,
  ): void;
  onGameReset(callback: () => void): void;
  onError(callback: (message: string) => void): void;
}
