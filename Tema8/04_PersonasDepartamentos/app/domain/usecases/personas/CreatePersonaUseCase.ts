import { inject, injectable } from "inversify";
import DOMAIN_TYPES from "../../../di/domain.types";
import { Persona } from "../../models/Persona";
import { IPersonaRepository } from "../../repositories/IPersonaRepository";

@injectable()
export class CreatePersonaUseCase {
  constructor(
    @inject(DOMAIN_TYPES.IPersonaRepository)
    private repo: IPersonaRepository
  ) {}

  async execute(persona: Persona): Promise<void> {
    await this.repo.create(persona);
  }
}
