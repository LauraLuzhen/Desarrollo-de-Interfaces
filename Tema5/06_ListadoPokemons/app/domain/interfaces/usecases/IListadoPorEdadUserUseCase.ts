import { Pokemon } from "../../entities/Pokemon";

export interface IListadoPorEdadUserUseCase {
  // Devuelve un listado de Pokémon según la edad del usuario
  getListado(edad: number): Promise<Pokemon[]>;
}
