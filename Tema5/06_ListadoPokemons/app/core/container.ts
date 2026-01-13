import "reflect-metadata";
import { Container } from "inversify";

import { TYPES } from "./types";
import { PokemonRepository } from "../data/repositories/PokemonRepository";
import { IPokemonRepositoryPokeAPI } from "../domain/interfaces/repositories/IPokemonRepositoryPokeAPI";
import { ListadoPorEdadUserUseCase } from "../domain/usecases/ListadoPorEdadUserUseCase";
import { IListadoPorEdadUserUseCase } from "../domain/interfaces/usecases/IListadoPorEdadUserUseCase";
import { ListadoPokemonVM } from "../ui/viewmodel/ListadoPokemonVM";

const container = new Container();

// Repositorios
container.bind<IPokemonRepositoryPokeAPI>(TYPES.PokemonRepository)
  .to(PokemonRepository)
  .inSingletonScope();

// UseCases
container.bind<IListadoPorEdadUserUseCase>(TYPES.ListadoPorEdadUseCase)
  .toDynamicValue((context: any) => {
    const repo = context.container.get<IPokemonRepositoryPokeAPI>(TYPES.PokemonRepository);
    return new ListadoPorEdadUserUseCase(repo);
  })
  .inSingletonScope();

// ViewModels
container.bind<ListadoPokemonVM>(TYPES.ListadoPokemonVM)
  .toDynamicValue((context: any) => {
    const useCase = context.container.get<IListadoPorEdadUserUseCase>(TYPES.ListadoPorEdadUseCase);
    return new ListadoPokemonVM(useCase);
  })
  .inSingletonScope();

export { container };
