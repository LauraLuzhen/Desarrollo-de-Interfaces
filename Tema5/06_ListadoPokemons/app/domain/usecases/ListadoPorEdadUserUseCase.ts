import { IPokemonRepositoryPokeAPI } from "../interfaces/repositories/IPokemonRepositoryPokeAPI";
import { IListadoPorEdadUserUseCase } from "../interfaces/usecases/IListadoPorEdadUserUseCase";
import { Pokemon } from "../entities/Pokemon";

export class ListadoPorEdadUserUseCase implements IListadoPorEdadUserUseCase {

  constructor(private repository: IPokemonRepositoryPokeAPI) {}

  async ejecutar(edad: number): Promise<Pokemon[]> {

    if (edad < 18) return [];

    if (edad >= 30) {
      return this.repository.getPokemons(151, 0); // Todos (1ª gen como ejemplo)
    }

    if (edad >= 25) {
      return this.repository.getPokemons(151, 0); // 1ª gen
    }

    if (edad >= 22) {
      return this.repository.getPokemons(100, 151); // 2ª gen
    }

    if (edad >= 20) {
      return this.repository.getPokemons(135, 251); // 3ª gen
    }

    if (edad >= 18) {
      return this.repository.getPokemons(107, 386); // 4ª gen
    }

    return [];
  }
}
