using TicTacToe.Server.Models;

namespace TicTacToe.Server.Services
{
    public class GameManager
    {
        private readonly GameRoom _room = new();

        // =========================
        // JOIN GAME
        // =========================
        public (GameRoom room, string message, Player player) JoinGame(string connectionId)
        {
            if (_room.Players.Count >= 2)
            {
                _room.Status = RoomStatus.Full;
                return (_room, "Sala llena", null);
            }

            var symbol = _room.Players.Count == 0 ? "X" : "O";

            var player = new Player
            {
                ConnectionId = connectionId,
                Symbol = symbol
            };

            _room.Players.Add(player);

            if (_room.Players.Count == 1)
            {
                _room.Status = RoomStatus.Waiting;
                return (_room, "Esperando oponente...", player);
            }

            _room.Status = RoomStatus.Playing;
            _room.State.CurrentTurn = "X";

            return (_room, "Partida iniciada", player);
        }

        // =========================
        // MAKE MOVE
        // =========================
        public bool MakeMove(string connectionId, Move move)
        {
            if (_room.State.IsGameOver)
                return false;

            var player = _room.Players
                .FirstOrDefault(p => p.ConnectionId == connectionId);

            if (player == null)
                return false;

            // comprobar turno
            if (player.Symbol != _room.State.CurrentTurn)
                return false;

            // comprobar casilla libre
            if (_room.State.Board[move.Row, move.Col] != null)
                return false;

            // colocar ficha
            _room.State.Board[move.Row, move.Col] = player.Symbol;

            // comprobar ganador
            if (CheckWinner(player.Symbol))
            {
                _room.State.IsGameOver = true;
                _room.State.Winner = player.Symbol;
            }
            else if (IsBoardFull())
            {
                _room.State.IsGameOver = true;
            }
            else
            {
                // cambiar turno
                _room.State.CurrentTurn =
                    _room.State.CurrentTurn == "X" ? "O" : "X";
            }

            return true;
        }

        // =========================
        // CHECK WINNER
        // =========================
        private bool CheckWinner(string symbol)
        {
            var b = _room.State.Board;

            // filas
            for (int i = 0; i < 3; i++)
                if (b[i, 0] == symbol &&
                    b[i, 1] == symbol &&
                    b[i, 2] == symbol)
                    return true;

            // columnas
            for (int i = 0; i < 3; i++)
                if (b[0, i] == symbol &&
                    b[1, i] == symbol &&
                    b[2, i] == symbol)
                    return true;

            // diagonales
            if (b[0, 0] == symbol &&
                b[1, 1] == symbol &&
                b[2, 2] == symbol)
                return true;

            if (b[0, 2] == symbol &&
                b[1, 1] == symbol &&
                b[2, 0] == symbol)
                return true;

            return false;
        }

        // =========================
        // CHECK DRAW
        // =========================
        private bool IsBoardFull()
        {
            foreach (var cell in _room.State.Board)
                if (cell == null)
                    return false;

            return true;
        }

        // =========================
        // GET STATE
        // =========================
        public GameRoom GetRoom() => _room;
    }
}
