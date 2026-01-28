import { inject, injectable } from "inversify";
import { TYPES } from "../../../di/types";
import { IDepartamentoRepository } from "../../interfaces/repositories/IDepartamentoRepository";
import { IDeleteDepartamentoUseCase } from "../../interfaces/usecases/departamentos/IDeleteDepartamentoUseCase";

@injectable()
export class DeleteDepartamentoUseCase implements IDeleteDepartamentoUseCase {
  constructor(
    @inject(TYPES.IDepartamentoRepository)
    private repo: IDepartamentoRepository,
  ) {}

  async execute(id: number): Promise<boolean> {
    // Intentar eliminar; el repositorio se encargará de la regla de negocio (personas asociadas)
    return await this.repo.delete(id);
  }
}
