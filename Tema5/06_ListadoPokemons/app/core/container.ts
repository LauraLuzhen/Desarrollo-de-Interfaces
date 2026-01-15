import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";

import { PokemonRepository } from "../data/repositories/PokemonRepository";
import { ListadoPorEdadUserUseCase } from "../domain/usecases/ListadoPorEdadUserUseCase";
import { ListadoPokemonVM } from "../ui/viewmodel/ListadoPokemonVM";

// Creamos un container
const container = new Container();

// Creamos la instancia del repositorio
const pokemonRepo = new PokemonRepository();

// Creamos la instancia del UseCase inyectando el repo
const listadoUseCase = new ListadoPorEdadUserUseCase(pokemonRepo);

// Creamos la instancia del ViewModel inyectando el UseCase
const listadoVM = new ListadoPokemonVM(listadoUseCase);

// Bind a symbols para que puedas inyectarlos
container.bind(TYPES.PokemonRepository).toConstantValue(pokemonRepo);
container.bind(TYPES.ListadoPorEdadUserUseCase).toConstantValue(listadoUseCase);
container.bind(TYPES.ListadoPokemonVM).toConstantValue(listadoVM);

export { container };
