import { Persona } from "../../domain/entities/Persona";
import { IPersonasRepository } from "../../domain/interfaces/repositories/IPersonasRepository";
import { Connection } from "../database/Connection";

export class PersonasRepository implements IPersonasRepository {

    async listar(): Promise<Persona[]> {
        const response = await fetch(Connection.getPersonasEndpoint());
        const data = await response.json();
        return data.map((p: any) => new Persona(
            p.id,
            p.nombre,
            p.apellidos,
            p.telefono,
            p.direccion,
            new Date(p.fechaNacimiento),
            p.idDepartamento,
            p.fotoUrl
        ));
    }

    async getPersona(id: number): Promise<Persona> {
        const response = await fetch(`${Connection.getPersonasEndpoint()}/${id}`);
        const p = await response.json();
        return new Persona(
            p.id,
            p.nombre,
            p.apellidos,
            p.telefono,
            p.direccion,
            new Date(p.fechaNacimiento),
            p.idDepartamento,
            p.fotoUrl
        );
    }

    async create(persona: Persona): Promise<boolean> {
        const response = await fetch(Connection.getPersonasEndpoint(), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(persona)
        });
        return response.ok;
    }

    async update(persona: Persona): Promise<boolean> {
        const response = await fetch(`${Connection.getPersonasEndpoint()}/${persona.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(persona)
        });
        return response.ok;
    }

    async delete(id: number): Promise<boolean> {
        const response = await fetch(`${Connection.getPersonasEndpoint()}/${id}`, {
            method: "DELETE"
        });
        return response.ok;
    }
}
