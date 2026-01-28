import { Departamento } from "../../entities/Departamento";

export interface IDepartamentoRepository {
  /**
   * Obtiene todos los departamentos
   */
  getAll(): Promise<Departamento[]>;

  /**
   * Obtiene un departamento por ID
   * @param id ID del departamento
   */
  getById(id: number): Promise<Departamento | null>;

  /**
   * Crea un nuevo departamento
   * @param departamento Datos del departamento
   */
  create(departamento: Departamento): Promise<Departamento>;

  /**
   * Actualiza un departamento existente
   * @param departamento Datos actualizados
   */
  update(departamento: Departamento): Promise<Departamento>;

  /**
   * Elimina un departamento por ID
   * @param id ID del departamento
   * @returns true si se eliminó, false si no (por reglas de negocio, ej. personas asociadas)
   */
  delete(id: number): Promise<boolean>;
}
