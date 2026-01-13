import { PokemonUIModel } from "../model/PokemonUIModel";
import { IListadoPorEdadUserUseCase } from "../../domain/interfaces/usecases/IListadoPorEdadUserUseCase";

export class ListadoPokemonVM {
  public pokemons: PokemonUIModel[] = [];

  constructor(private listadoPorEdadUseCase: IListadoPorEdadUserUseCase) {}

  async loadPokemons(edad: number) {
    const listado = await this.listadoPorEdadUseCase.getListado(edad);
    this.pokemons = listado.map(p => new PokemonUIModel(p));
  }
}
