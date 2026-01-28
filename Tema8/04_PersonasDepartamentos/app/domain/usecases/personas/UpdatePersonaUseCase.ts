import { inject, injectable } from "inversify";
import { TYPES } from "../../../di/types";
import { Persona } from "../../entities/Persona";
import { IPersonaRepository } from "../../interfaces/repositories/IPersonaRepository";
import { IUpdatePersonaUseCase } from "../../interfaces/usecases/personas/IUpdatePersonaUseCase";

@injectable()
export class UpdatePersonaUseCase implements IUpdatePersonaUseCase {
  constructor(
    @inject(TYPES.IPersonaRepository) private repo: IPersonaRepository,
  ) {}

  async execute(persona: Persona): Promise<Persona> {
    return await this.repo.update(persona);
  }
}
