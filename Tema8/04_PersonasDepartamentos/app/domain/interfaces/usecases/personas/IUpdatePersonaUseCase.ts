import { Persona } from "../../../entities/Persona";

export interface IUpdatePersonaUseCase {
  /**
   * Actualiza los datos de una persona existente
   * @param persona Datos de la persona a actualizar
   */
  execute(persona: Persona): Promise<Persona>;
}
