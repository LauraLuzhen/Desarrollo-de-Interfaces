import { inject, injectable } from "inversify";
import DOMAIN_TYPES from "../../../di/domain.types";
import { Persona } from "../../models/Persona";
import { IPersonaRepository } from "../../repositories/IPersonaRepository";
import { FechaService } from "../../services/FechaService";

@injectable()
export class GetPersonasUseCase {
  constructor(
    @inject(DOMAIN_TYPES.IPersonaRepository)
    private repo: IPersonaRepository,
    @inject(DOMAIN_TYPES.FechaService)
    private fechaService: FechaService
  ) {}

  async execute(): Promise<Persona[]> {
    const personas = await this.repo.getAll();

    if (this.fechaService.esViernesOSabado()) {
      return personas.filter(p => this.fechaService.calcularEdad(p.fechaNacimiento) > 18);
    }

    return personas;
  }
}
