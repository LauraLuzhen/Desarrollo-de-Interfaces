export interface IDeleteDepartamentoUseCase {
  /**
   * Intenta eliminar un departamento
   * No puede eliminarse si hay personas asociadas
   * @param id ID del departamento
   * @returns true si se eliminó, false si no se puede
   */
  execute(id: number): Promise<boolean>;
}
