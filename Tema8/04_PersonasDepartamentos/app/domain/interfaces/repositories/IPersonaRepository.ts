import { Persona } from "../../entities/Persona";

export interface IPersonaRepository {
  /**
   * Obtiene todas las personas
   */
  getAll(): Promise<Persona[]>;

  /**
   * Obtiene una persona por ID
   * @param id ID de la persona
   */
  getById(id: number): Promise<Persona | null>;

  /**
   * Crea una nueva persona
   * @param persona Datos de la persona
   */
  create(persona: Persona): Promise<Persona>;

  /**
   * Actualiza una persona existente
   * @param persona Datos actualizados
   */
  update(persona: Persona): Promise<Persona>;

  /**
   * Elimina una persona por ID
   * @param id ID de la persona
   * @returns true si se eliminó, false si no (por reglas de negocio)
   */
  delete(id: number): Promise<boolean>;
}
