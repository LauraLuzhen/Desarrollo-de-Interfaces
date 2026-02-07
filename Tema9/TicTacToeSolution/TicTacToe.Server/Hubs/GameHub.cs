using Microsoft.AspNetCore.SignalR;
using TicTacToe.Server.Models;

namespace TicTacToe.Server.Hubs
{
    public class GameHub : Hub
    {
        // Usamos static para que la partida se mantenga en memoria del servidor
        private static GameState _game = new GameState();

        public async Task UnirseAlJuego(string nombre)
        {
            // 1. Limitar a 2 jugadores
            if (_game.Jugadores.Count >= 2)
            {
                await Clients.Caller.SendAsync("Error", "El juego ya tiene 2 jugadores.");
                return;
            }

            // Si el tablero está lleno y los jugadores vuelven a conectarse, reiniciamos
            if (!_game.JuegoIniciado && _game.Tablero.Any(c => !string.IsNullOrEmpty(c)))
            {
                _game = new GameState();
            }

            // 2. Crear jugador y asignar ficha (Primero X, Segundo O)
            string ficha = _game.Jugadores.Count == 0 ? "X" : "O";
            var nuevoJugador = new Player
            {
                ConnectionId = Context.ConnectionId,
                Name = nombre,
                Ficha = ficha
            };

            _game.Jugadores.Add(nuevoJugador);

            // 3. Informar al cliente de su propia ficha
            await Clients.Caller.SendAsync("AsignarFicha", ficha);

            // 4. Lógica de inicio
            if (_game.Jugadores.Count == 1)
            {
                await Clients.All.SendAsync("EsperandoOponente");
            }
            else
            {
                _game.JuegoIniciado = true;
                _game.TurnoDe = _game.Jugadores[0].ConnectionId; // Empieza el primero que entró

                await Clients.All.SendAsync("IniciarJuego", new
                {
                    jugadores = _game.Jugadores,
                    turnoDeId = _game.TurnoDe,
                    nombreTurno = _game.Jugadores[0].Name
                });
            }
        }

        public async Task MarcarCasilla(int index)
        {
            if (!_game.JuegoIniciado) return;
            if (Context.ConnectionId != _game.TurnoDe) return;
            if (!string.IsNullOrEmpty(_game.Tablero[index])) return;

            var jugadorActual = _game.Jugadores.FirstOrDefault(p => p.ConnectionId == Context.ConnectionId);
            _game.Tablero[index] = jugadorActual.Ficha;

            // --- EL CAMBIO ESTÁ AQUÍ ---
            // Primero avisamos a todos de que la ficha se ha puesto, sin importar si el juego termina o no
            await Clients.All.SendAsync("ActualizarTablero", index, jugadorActual.Ficha, "", "");

            string resultado = VerificarGanador();

            if (resultado != "Ninguno")
            {
                _game.JuegoIniciado = false;
                // Damos un margen de milisegundos para que el cliente procese la ficha antes del aviso de fin
                await Task.Delay(100);
                await Clients.All.SendAsync("FinJuego", resultado, jugadorActual.Name, jugadorActual.Ficha);
            }
            else
            {
                var siguienteJugador = _game.Jugadores.First(p => p.ConnectionId != Context.ConnectionId);
                _game.TurnoDe = siguienteJugador.ConnectionId;

                // Actualizamos el estado del turno para el siguiente movimiento
                await Clients.All.SendAsync("CambioDeTurno", _game.TurnoDe, siguienteJugador.Name);
            }
        }

        public async Task ReiniciarJuego()
        {
            // Limpiamos el estado para empezar de cero
            _game = new GameState();
            await Clients.All.SendAsync("JuegoReiniciado");
        }

        private string VerificarGanador()
        {
            int[][] victorias = new int[][]
            {
                new int[] {0, 1, 2}, new int[] {3, 4, 5}, new int[] {6, 7, 8}, // Horizontales
                new int[] {0, 3, 6}, new int[] {1, 4, 7}, new int[] {2, 5, 8}, // Verticales
                new int[] {0, 4, 8}, new int[] {2, 4, 6}             // Diagonales
            };

            foreach (var v in victorias)
            {
                if (!string.IsNullOrEmpty(_game.Tablero[v[0]]) &&
                    _game.Tablero[v[0]] == _game.Tablero[v[1]] &&
                    _game.Tablero[v[0]] == _game.Tablero[v[2]])
                {
                    return "Ganador";
                }
            }

            if (_game.Tablero.All(c => !string.IsNullOrEmpty(c)))
                return "Tablas";

            return "Ninguno";
        }

        public override async Task OnDisconnectedAsync(Exception? exception)
        {
            // Si alguien se desconecta, reiniciamos el juego para evitar bloqueos
            _game = new GameState();
            await Clients.All.SendAsync("UsuarioDesconectado");
            await base.OnDisconnectedAsync(exception);
        }
    }
}