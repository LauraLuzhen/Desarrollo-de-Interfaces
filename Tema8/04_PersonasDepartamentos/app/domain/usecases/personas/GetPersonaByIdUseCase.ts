import { inject, injectable } from "inversify";
import DOMAIN_TYPES from "../../../di/domain.types";
import { Persona } from "../../models/Persona";
import { IPersonaRepository } from "../../repositories/IPersonaRepository";

@injectable()
export class GetPersonaByIdUseCase {
  constructor(
    @inject(DOMAIN_TYPES.IPersonaRepository)
    private repo: IPersonaRepository
  ) {}

  async execute(id: number): Promise<Persona | null> {
    return this.repo.getById(id);
  }
}
