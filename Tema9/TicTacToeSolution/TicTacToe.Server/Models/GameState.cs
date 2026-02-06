namespace TicTacToe.Server.Models
{
    public class GameState
    {
        public string[,] Board { get; set; } = new string[3, 3];

        public string CurrentTurn { get; set; } = "X";

        public bool IsGameOver { get; set; } = false;

        public string Winner { get; set; } = null;
    }
}
