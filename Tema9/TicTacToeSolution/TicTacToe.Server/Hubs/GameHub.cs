using Microsoft.AspNetCore.SignalR;
using TicTacToe.Server.Services;
using TicTacToe.Server.Models;
using TicTacToe.Server.DTOs;

namespace TicTacToe.Server.Hubs
{
    public class GameHub : Hub
    {
        private readonly GameManager _gameManager;

        public GameHub(GameManager gameManager)
        {
            _gameManager = gameManager;
        }

        // ========================
        // CONEXIÓN JUGADOR
        // ========================
        public override async Task OnConnectedAsync()
        {
            var (room, message, player) =
                _gameManager.JoinGame(Context.ConnectionId);

            if (player == null)
            {
                await Clients.Caller.SendAsync("RoomFull");
                return;
            }

            await Clients.Caller.SendAsync("Joined", new
            {
                symbol = player.Symbol,
                message
            });

            if (room.Status == RoomStatus.Playing)
            {
                await Clients.All.SendAsync("GameStart",
                    CreateGameUpdate(room, "¡Empieza la partida!"));
            }

            await base.OnConnectedAsync();
        }

        // ========================
        // MOVIMIENTO
        // ========================
        public async Task MakeMove(int row, int col)
        {
            var success = _gameManager.MakeMove(
                Context.ConnectionId,
                new Move { Row = row, Col = col });

            if (!success)
                return;

            var room = _gameManager.GetRoom();

            string message = "";

            if (room.State.IsGameOver)
            {
                message = room.State.Winner == null
                    ? "Tablas"
                    : $"Ganador: {room.State.Winner}";
            }

            await Clients.All.SendAsync("GameUpdate",
                CreateGameUpdate(room, message));
        }

        // ========================
        // DTO helper
        // ========================
        private GameUpdateDto CreateGameUpdate(
            GameRoom room,
            string message)
        {
            return new GameUpdateDto
            {
                Board = room.State.Board,
                CurrentTurn = room.State.CurrentTurn,
                IsGameOver = room.State.IsGameOver,
                Winner = room.State.Winner,
                Message = message
            };
        }
    }
}
