import { Departamento } from "../../../entities/Departamento";

export interface ICreateDepartamentoUseCase {
  execute(departamento: Departamento): Promise<Departamento>;
}
