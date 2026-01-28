import { inject, injectable } from "inversify";
import { TYPES } from "../../../di/types";
import { Departamento } from "../../entities/Departamento";
import { IDepartamentoRepository } from "../../interfaces/repositories/IDepartamentoRepository";
import { IUpdateDepartamentoUseCase } from "../../interfaces/usecases/departamentos/IUpdateDepartamentoUseCase";

@injectable()
export class UpdateDepartamentoUseCase implements IUpdateDepartamentoUseCase {
  constructor(
    @inject(TYPES.IDepartamentoRepository)
    private repo: IDepartamentoRepository,
  ) {}

  async execute(departamento: Departamento): Promise<Departamento> {
    return await this.repo.update(departamento);
  }
}
