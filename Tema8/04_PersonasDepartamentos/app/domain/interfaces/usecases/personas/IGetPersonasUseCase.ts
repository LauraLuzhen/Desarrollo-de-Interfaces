import { Persona } from "../../../entities/Persona";

export interface IGetPersonasUseCase {
  /**
   * Obtiene todas las personas.
   * Puede filtrar por edad o día según reglas de negocio.
   */
  execute(): Promise<Persona[]>;
}
