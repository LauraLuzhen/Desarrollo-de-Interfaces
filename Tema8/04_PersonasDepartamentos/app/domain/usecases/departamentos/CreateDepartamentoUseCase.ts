import { inject, injectable } from "inversify";
import { TYPES } from "../../../di/types";
import { Departamento } from "../../entities/Departamento";
import { IDepartamentoRepository } from "../../interfaces/repositories/IDepartamentoRepository";
import { ICreateDepartamentoUseCase } from "../../interfaces/usecases/departamentos/ICreateDepartamentoUseCase";

@injectable()
export class CreateDepartamentoUseCase implements ICreateDepartamentoUseCase {
  constructor(
    @inject(TYPES.IDepartamentoRepository)
    private repo: IDepartamentoRepository,
  ) {}

  async execute(departamento: Departamento): Promise<Departamento> {
    return await this.repo.create(departamento);
  }
}
