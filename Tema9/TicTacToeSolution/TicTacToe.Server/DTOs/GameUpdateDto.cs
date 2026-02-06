namespace TicTacToe.Server.DTOs
{
    public class GameUpdateDto
    {
        public string[,] Board { get; set; }
        public string CurrentTurn { get; set; }
        public bool IsGameOver { get; set; }
        public string Winner { get; set; }
        public string Message { get; set; }
    }
}
