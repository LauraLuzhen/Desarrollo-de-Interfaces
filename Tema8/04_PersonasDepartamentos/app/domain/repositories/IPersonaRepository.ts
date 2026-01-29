import { Persona } from "../models/Persona";

export interface IPersonaRepository {
  getAll(): Promise<Persona[]>;
  getById(id: number): Promise<Persona | null>;
  create(persona: Persona): Promise<void>;
  update(persona: Persona): Promise<void>;
  delete(id: number): Promise<void>;
}
