import { Container } from "inversify";
import "reflect-metadata";
import { IRepositoryPersonas, PersonasRepository } from "../model/data/PeopleRepository";
import { PeopleListVM } from "../viewmodel/PeopleListVM";
import { TYPES } from "./types";

const container = new Container();

// Vinculamos la interfaz con su implementación concreta
container.bind<IRepositoryPersonas>(TYPES.IRepositoryPersonas).to(PersonasRepository);
container.bind<PeopleListVM>(TYPES.IndexVM).to(PeopleListVM);
export { container };