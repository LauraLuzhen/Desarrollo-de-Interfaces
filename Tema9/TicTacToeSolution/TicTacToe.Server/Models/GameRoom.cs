namespace TicTacToe.Server.Models
{
    public enum RoomStatus
    {
        Waiting,
        Playing,
        Full
    }

    public class GameRoom
    {
        public List<Player> Players { get; set; } = new();

        public GameState State { get; set; } = new();

        public RoomStatus Status { get; set; } = RoomStatus.Waiting;
    }
}
