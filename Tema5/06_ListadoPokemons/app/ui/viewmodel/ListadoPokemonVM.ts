import { makeAutoObservable, runInAction } from "mobx";
import { IListadoPorEdadUserUseCase } from "../../domain/interfaces/usecases/IListadoPorEdadUserUseCase";
import { PokemonUIModel } from "../model/PokemonUIModel";

export class ListadoPokemonVM {
  pokemons: PokemonUIModel[] = [];
  cargando: boolean = false;

  constructor(private listadoUseCase: IListadoPorEdadUserUseCase) {
    makeAutoObservable(this);
  }

  async cargarPokemons(edad: number) {
    this.cargando = true;
    const lista = await this.listadoUseCase.ejecutar(edad);

    // Convertir a UIModel y asignar imágenes oficiales de PokeAPI
    const listaUI = lista.map((p) => {
      const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`;
      return new PokemonUIModel(p.id, p.nombre, imgUrl);
    });

    runInAction(() => {
      this.pokemons = listaUI;
      this.cargando = false;
    });
  }
}
