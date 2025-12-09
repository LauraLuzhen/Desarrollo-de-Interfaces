// core/container.ts
import { Container } from "inversify";
import "reflect-metadata";
import PersonasRepository from "../data/repositories/PersonaMuck"; // tu repo
import { PeopleListVM } from "../UI/viewmodel/PersonaViewModel";
import { TYPES } from "./types";
import { IRepositoryPersonas } from "../domain/repositories/IRepositoryPersonas";

// UseCases
import { IGetPersonasUseCase } from "../domain/intefaces/IGetPersonasUseCase";
import { ISelectPersonaUseCase } from "../domain/intefaces/ISelectPersonasUseCase";
import { GetPersonasUseCase } from "../domain/usecase/getPersonasUseCase";
import { SelectPersonaUseCase } from "../domain/usecase/selectPersonasUseCase";

const container = new Container();

// Repositorios
container
  .bind<IRepositoryPersonas>(TYPES.IRepositoryPersonas)
  .to(PersonasRepository)
  .inSingletonScope(); // opcional

// UseCases
container
  .bind<IGetPersonasUseCase>(TYPES.IGetPersonasUseCase)
  .to(GetPersonasUseCase);
container
  .bind<ISelectPersonaUseCase>(TYPES.ISelectPersonaUseCase)
  .to(SelectPersonaUseCase);

// ViewModel
container.bind<PeopleListVM>(TYPES.IndexVM).to(PeopleListVM).inSingletonScope();

export { container };
