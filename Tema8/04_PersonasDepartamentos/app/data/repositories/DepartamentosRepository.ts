import { Departamento } from "../../domain/entities/Departamento";
import { IDepartamentosRepository } from "../../domain/interfaces/repositories/IDepartamentosRepository";
import { Connection } from "../database/Connection";

export class DepartamentosRepository implements IDepartamentosRepository {

    async listar(): Promise<Departamento[]> {
        const response = await fetch(Connection.getDepartamentosEndpoint());
        const data = await response.json();
        return data.map((d: any) => new Departamento(d.id, d.nombre));
    }

    async getDepartamento(id: number): Promise<Departamento> {
        const response = await fetch(`${Connection.getDepartamentosEndpoint()}/${id}`);
        const d = await response.json();
        return new Departamento(d.id, d.nombre);
    }

    async create(departamento: Departamento): Promise<boolean> {
        const response = await fetch(Connection.getDepartamentosEndpoint(), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(departamento)
        });
        return response.ok;
    }

    async update(departamento: Departamento): Promise<boolean> {
        const response = await fetch(`${Connection.getDepartamentosEndpoint()}/${departamento.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(departamento)
        });
        return response.ok;
    }

    async delete(id: number): Promise<boolean> {
        const response = await fetch(`${Connection.getDepartamentosEndpoint()}/${id}`, {
            method: "DELETE"
        });
        return response.ok;
    }
}
