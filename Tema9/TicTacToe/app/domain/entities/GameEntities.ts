export type PlayerToken = "X" | "O" | "";

export interface Player {
  id: string;
  name: string;
  token: PlayerToken;
}

export interface GameBoard {
  cells: PlayerToken[]; // 9 posiciones
}

export type GameStatus =
  | "CONNECTING"
  | "WAITING_OPPONENT"
  | "IN_PROGRESS"
  | "FINISHED"
  | "DRAW";

export interface GameState {
  board: GameBoard;
  currentTurnPlayerName: string;
  status: GameStatus;
  winner?: Player;
}

export interface GameResult {
  result: "WIN" | "DRAW";
  winnerName?: string;
  winnerToken?: PlayerToken;
}
