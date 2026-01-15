import { IPokemonRepositoryPokeAPI } from "../../domain/interfaces/repositories/IPokemonRepositoryPokeAPI";
import { Pokemon } from "../../domain/entities/Pokemon";

export class PokemonRepository implements IPokemonRepositoryPokeAPI {

  private readonly BASE_URL = "https://pokeapi.co/api/v2/pokemon";

  async getPokemons(limit: number, offset: number): Promise<Pokemon[]> {
    const response = await fetch(`${this.BASE_URL}?limit=${limit}&offset=${offset}`);
    const data = await response.json();

    return data.results.map((item: any) => {
      const id = parseInt(item.url.split("/").filter(Boolean).pop());
      return new Pokemon(id, item.name);
    });
  }
}
