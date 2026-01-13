import { IListadoPorEdadUserUseCase } from "../interfaces/usecases/IListadoPorEdadUserUseCase";
import { IPokemonRepositoryPokeAPI } from "../interfaces/repositories/IPokemonRepositoryPokeAPI";
import { Pokemon } from "../entities/Pokemon";

export class ListadoPorEdadUserUseCase implements IListadoPorEdadUserUseCase {
  constructor(private pokemonRepo: IPokemonRepositoryPokeAPI) {}

  async getListado(edad: number): Promise<Pokemon[]> {
    if (edad < 18) return [];

    if (edad >= 30) return await this.pokemonRepo.getAllPokemons?.() ?? [];

    if (edad >= 25 && edad <= 29) return await this.pokemonRepo.getPokemonPorCantidad(0);   // primera generación
    if (edad >= 22 && edad <= 24) return await this.pokemonRepo.getPokemonPorCantidad(20);  // segunda generación
    if (edad >= 20 && edad <= 21) return await this.pokemonRepo.getPokemonPorCantidad(40);  // tercera generación
    if (edad >= 18 && edad <= 19) return await this.pokemonRepo.getPokemonPorCantidad(60);  // cuarta generación

    return [];
  }
}
