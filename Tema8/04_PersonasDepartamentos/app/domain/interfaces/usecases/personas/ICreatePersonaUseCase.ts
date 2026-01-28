import { Persona } from "../../../entities/Persona";

export interface ICreatePersonaUseCase {
  /**
   * Crea una nueva persona
   * @param persona Datos de la persona a crear
   */
  execute(persona: Persona): Promise<Persona>;
}
