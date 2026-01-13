import { Persona } from "../../entities/Persona";

export interface IPersonaRepository {
  getAll(): Persona[];
}
