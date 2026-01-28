import { inject, injectable } from "inversify";
import { TYPES } from "../../../di/types";
import { Departamento } from "../../entities/Departamento";
import { IDepartamentoRepository } from "../../interfaces/repositories/IDepartamentoRepository";
import { IGetDepartamentosUseCase } from "../../interfaces/usecases/departamentos/IGetDepartamentosUseCase";

@injectable()
export class GetDepartamentosUseCase implements IGetDepartamentosUseCase {
  constructor(
    @inject(TYPES.IDepartamentoRepository)
    private repo: IDepartamentoRepository,
  ) {}

  async execute(): Promise<Departamento[]> {
    return await this.repo.getAll();
  }
}
