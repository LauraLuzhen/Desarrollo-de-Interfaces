namespace TicTacToe.Server.Models
{
    public class Player
    {
        public string ConnectionId { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public string Ficha { get; set; } = string.Empty; // "X" o "O"
    }
}
