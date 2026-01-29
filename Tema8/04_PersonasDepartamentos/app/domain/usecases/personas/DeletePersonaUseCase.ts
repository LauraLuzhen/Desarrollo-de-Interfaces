import { inject, injectable } from "inversify";
import DOMAIN_TYPES from "../../../di/domain.types";
import { IPersonaRepository } from "../../repositories/IPersonaRepository";
import { FechaService } from "../../services/FechaService";

@injectable()
export class DeletePersonaUseCase {
  constructor(
    @inject(DOMAIN_TYPES.IPersonaRepository)
    private repo: IPersonaRepository,
    @inject(DOMAIN_TYPES.FechaService)
    private fechaService: FechaService
  ) {}

  async execute(id: number): Promise<void> {
    if (this.fechaService.esDomingo()) {
      throw new Error("No se pueden eliminar personas en domingo.");
    }

    await this.repo.delete(id);
  }
}
