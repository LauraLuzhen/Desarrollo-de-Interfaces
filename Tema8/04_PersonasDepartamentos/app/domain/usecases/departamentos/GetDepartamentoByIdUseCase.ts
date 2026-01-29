import { inject, injectable } from "inversify";
import DOMAIN_TYPES from "../../../di/domain.types";
import { Departamento } from "../../models/Departamento";
import { IDepartamentoRepository } from "../../repositories/IDepartamentoRepository";

@injectable()
export class GetDepartamentoByIdUseCase {
  constructor(
    @inject(DOMAIN_TYPES.IDepartamentoRepository)
    private repo: IDepartamentoRepository
  ) {}

  async execute(id: number): Promise<Departamento | null> {
    return this.repo.getById(id);
  }
}