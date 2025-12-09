import { inject, injectable } from "inversify";
import Persona from "../entities/Persona";
import { IRepositoryPersonas } from "../repositories/IRepositoryPersonas";
import { IGetPersonasUseCase } from "../intefaces/IGetPersonasUseCase";
import { TYPES } from "../../core/types";

@injectable()
export class GetPersonasUseCase implements IGetPersonasUseCase {
  constructor(
    @inject(TYPES.IRepositoryPersonas) private repo: IRepositoryPersonas
  ) {}

  execute(): Persona[] {
    // aquí puedes añadir lógica de negocio, filtros, orden, etc.
    return this.repo.getListadoCompletoPersonas();
  }
}
