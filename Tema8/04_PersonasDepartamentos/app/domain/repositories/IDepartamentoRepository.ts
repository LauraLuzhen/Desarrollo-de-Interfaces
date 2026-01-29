import { Departamento } from "../models/Departamento";

export interface IDepartamentoRepository {
  getAll(): Promise<Departamento[]>;
  getById(id: number): Promise<Departamento | null>;
  create(departamento: Departamento): Promise<void>;
  update(departamento: Departamento): Promise<void>;
  delete(id: number): Promise<void>;
}
