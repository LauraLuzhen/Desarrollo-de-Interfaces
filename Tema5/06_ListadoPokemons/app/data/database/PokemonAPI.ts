export class PokemonAPI {
  private readonly BASE_URL = "https://pokeapi.co/api/v2/pokemon";

  // Trae un bloque de Pokémon con limit y offset
  async fetchPokemons(limit: number = 20, offset: number = 0) {
    const response = await fetch(`${this.BASE_URL}?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    return data.results; // [{ name: "...", url: "..." }]
  }
}
