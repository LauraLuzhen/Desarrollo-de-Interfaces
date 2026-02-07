namespace TicTacToe.Server.Models
{
    public class GameState
    {
        public string[] Tablero { get; set; } = new string[9];
        public string TurnoDe { get; set; } = string.Empty;
        public List<Player> Jugadores { get; set; } = new List<Player>();
        public bool JuegoIniciado { get; set; } = false;

        public GameState()
        {
            for (int i = 0; i < 9; i++) Tablero[i] = "";
        }
    }
}
