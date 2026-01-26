import { Persona } from "../../entities/Persona";

export interface IPersonasRepository {
    listar(): Promise<Persona[]>;
    getPersona(id: number): Promise<Persona>;
    create(persona: Persona): Promise<boolean>;
    update(persona: Persona): Promise<boolean>;
    delete(id: number): Promise<boolean>;
}
