import { Departamento } from "../../entities/Departamento";

export interface IDepartamentosRepository {
    listar(): Promise<Departamento[]>;
    getDepartamento(id: number): Promise<Departamento>;
    create(departamento: Departamento): Promise<boolean>;
    update(departamento: Departamento): Promise<boolean>;
    delete(id: number): Promise<boolean>;
}
