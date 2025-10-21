// Guardará la relación que queremos crear entre nuestras interfaces
// y las clases que implementarán

import { Container } from "inversify";
import "reflect-metadata";
// Importamos las tres posibles implementaciones
import { IRepositoryPersonas, PersonasRepository, PersonasRepositoryEmpty, PersonasRepository100 } from "../Models/Data/personasRepository";
import { PeopleListVM } from "../ViewModels/PeopleListVM";
import { TYPES } from "./types";


const container = new Container();

container.bind<IRepositoryPersonas>(TYPES.IRepositoryPersonas).to(PersonasRepository100); 

container.bind<PeopleListVM>(TYPES.IndexVM).to(PeopleListVM);

export { container };