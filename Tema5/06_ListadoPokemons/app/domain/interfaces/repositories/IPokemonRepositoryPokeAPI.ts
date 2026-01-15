import { Pokemon } from "../../entities/Pokemon";

export interface IPokemonRepositoryPokeAPI {
  getPokemons(limit: number, offset: number): Promise<Pokemon[]>;
}
