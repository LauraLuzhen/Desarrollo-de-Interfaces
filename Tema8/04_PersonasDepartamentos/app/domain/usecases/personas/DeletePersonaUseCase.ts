import { inject, injectable } from "inversify";
import { TYPES } from "../../../di/types";
import { IPersonaRepository } from "../../interfaces/repositories/IPersonaRepository";
import { IDeletePersonaUseCase } from "../../interfaces/usecases/personas/IDeletePersonaUseCase";

@injectable()
export class DeletePersonaUseCase implements IDeletePersonaUseCase {
  constructor(
    @inject(TYPES.IPersonaRepository) private repo: IPersonaRepository,
  ) {}

  async execute(id: number): Promise<boolean> {
    // Regla de negocio: domingo no se puede eliminar
    const today = new Date().getDay();
    if (today === 0) return false;

    return await this.repo.delete(id);
  }
}
