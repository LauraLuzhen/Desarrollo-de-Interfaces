import { Pokemon } from "../../entities/Pokemon";

export interface IListadoPorEdadUserUseCase {
  ejecutar(edad: number): Promise<Pokemon[]>;
}
