import { Pokemon } from "../../entities/Pokemon";

export interface IPokemonRepositoryPokeAPI {
  // Trae un bloque de Pokémon según offset (ej: 20 Pokémon por bloque)
  getPokemonPorCantidad(offset: number): Promise<Pokemon[]>;

  // Opcional: traer todos los Pokémon
  getAllPokemons?(): Promise<Pokemon[]>;
}
