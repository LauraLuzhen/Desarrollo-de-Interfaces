import { inject, injectable } from "inversify";
import { TYPES } from "../../../di/types";
import { Persona } from "../../entities/Persona";
import { IPersonaRepository } from "../../interfaces/repositories/IPersonaRepository";
import { ICreatePersonaUseCase } from "../../interfaces/usecases/personas/ICreatePersonaUseCase";

@injectable()
export class CreatePersonaUseCase implements ICreatePersonaUseCase {
  constructor(
    @inject(TYPES.IPersonaRepository) private repo: IPersonaRepository,
  ) {}

  async execute(persona: Persona): Promise<Persona> {
    return await this.repo.create(persona);
  }
}
