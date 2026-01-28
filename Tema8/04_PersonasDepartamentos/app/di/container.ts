// /di/container.ts
import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";

// Repositories
import { DepartamentoRepositoryApi } from "../data/repositories/DepartamentoRepositoryApi";
import { PersonaRepositoryApi } from "../data/repositories/PersonaRepositoryApi";
import { IDepartamentoRepository } from "../domain/interfaces/repositories/IDepartamentoRepository";
import { IPersonaRepository } from "../domain/interfaces/repositories/IPersonaRepository";

// Use Cases Personas
import { ICreatePersonaUseCase } from "../domain/interfaces/usecases/personas/ICreatePersonaUseCase";
import { IDeletePersonaUseCase } from "../domain/interfaces/usecases/personas/IDeletePersonaUseCase";
import { IGetPersonasUseCase } from "../domain/interfaces/usecases/personas/IGetPersonasUseCase";
import { IUpdatePersonaUseCase } from "../domain/interfaces/usecases/personas/IUpdatePersonaUseCase";
import { CreatePersonaUseCase } from "../domain/usecases/personas/CreatePersonaUseCase";
import { DeletePersonaUseCase } from "../domain/usecases/personas/DeletePersonaUseCase";
import { GetPersonasUseCase } from "../domain/usecases/personas/GetPersonasUseCase";
import { UpdatePersonaUseCase } from "../domain/usecases/personas/UpdatePersonaUseCase";

// Use Cases Departamentos
import { ICreateDepartamentoUseCase } from "../domain/interfaces/usecases/departamentos/ICreateDepartamentoUseCase";
import { IDeleteDepartamentoUseCase } from "../domain/interfaces/usecases/departamentos/IDeleteDepartamentoUseCase";
import { IGetDepartamentosUseCase } from "../domain/interfaces/usecases/departamentos/IGetDepartamentosUseCase";
import { IUpdateDepartamentoUseCase } from "../domain/interfaces/usecases/departamentos/IUpdateDepartamentoUseCase";
import { CreateDepartamentoUseCase } from "../domain/usecases/departamentos/CreateDepartamentoUseCase";
import { DeleteDepartamentoUseCase } from "../domain/usecases/departamentos/DeleteDepartamentoUseCase";
import { GetDepartamentosUseCase } from "../domain/usecases/departamentos/GetDepartamentosUseCase";
import { UpdateDepartamentoUseCase } from "../domain/usecases/departamentos/UpdateDepartamentoUseCase";

export const container = new Container();

// Repositories
container
  .bind<IPersonaRepository>(TYPES.IPersonaRepository)
  .to(PersonaRepositoryApi)
  .inSingletonScope();
container
  .bind<IDepartamentoRepository>(TYPES.IDepartamentoRepository)
  .to(DepartamentoRepositoryApi)
  .inSingletonScope();

// Use Cases Personas
container
  .bind<IGetPersonasUseCase>(TYPES.IGetPersonasUseCase)
  .to(GetPersonasUseCase);
container
  .bind<ICreatePersonaUseCase>(TYPES.ICreatePersonaUseCase)
  .to(CreatePersonaUseCase);
container
  .bind<IUpdatePersonaUseCase>(TYPES.IUpdatePersonaUseCase)
  .to(UpdatePersonaUseCase);
container
  .bind<IDeletePersonaUseCase>(TYPES.IDeletePersonaUseCase)
  .to(DeletePersonaUseCase);

// Use Cases Departamentos
container
  .bind<IGetDepartamentosUseCase>(TYPES.IGetDepartamentosUseCase)
  .to(GetDepartamentosUseCase);
container
  .bind<ICreateDepartamentoUseCase>(TYPES.ICreateDepartamentoUseCase)
  .to(CreateDepartamentoUseCase);
container
  .bind<IUpdateDepartamentoUseCase>(TYPES.IUpdateDepartamentoUseCase)
  .to(UpdateDepartamentoUseCase);
container
  .bind<IDeleteDepartamentoUseCase>(TYPES.IDeleteDepartamentoUseCase)
  .to(DeleteDepartamentoUseCase);
