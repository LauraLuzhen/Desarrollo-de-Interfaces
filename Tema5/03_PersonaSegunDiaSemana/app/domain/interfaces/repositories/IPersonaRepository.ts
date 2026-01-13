import { Persona } from "../../entities/Persona";

export interface IPersonaRepository {
  getAll(): Persona[];
  getByIndex(index: number): Persona | null;
}
