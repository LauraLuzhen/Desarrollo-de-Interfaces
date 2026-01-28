export interface IDeletePersonaUseCase {
  /**
   * Elimina una persona por su ID
   * @param id ID de la persona
   * @returns true si se eliminó, false si no se puede (por regla de negocio)
   */
  execute(id: number): Promise<boolean>;
}
