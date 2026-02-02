import Container from "../../core/container";
import {
  AppError,
  IViewModel,
  NotFoundError,
  ValidationError,
} from "../../core/types";
import { Departamento } from "../../domain/entities/Departamento";

export class CRUDDepartamentoVM implements IViewModel<Departamento> {
  private useCase;

  constructor() {
    this.useCase = Container.getInstance().getCRUDDepartamentosUseCase();
  }

  async listar(): Promise<Departamento[]> {
    try {
      return await this.useCase.listarDepartamentos();
    } catch (error) {
      console.error("[DepartamentoVM] Error al listar departamentos:", error);
      throw new AppError(
        "No se pudieron cargar los departamentos. Intente más tarde.",
      );
    }
  }

  async obtener(id: number): Promise<Departamento | null> {
    try {
      const depto = await this.useCase.editarDepartamento(id);
      if (!depto) throw new NotFoundError("Departamento no encontrado");
      return depto;
    } catch (error: any) {
      console.error("[DepartamentoVM] Error al obtener departamento:", error);
      if (error instanceof AppError) throw error;
      throw new AppError("No se pudo obtener la información del departamento");
    }
  }

  async crear(depto: Departamento): Promise<boolean> {
    try {
      this.validarDepartamento(depto);
      return await this.useCase.insertarDepartamento(depto);
    } catch (error: any) {
      console.error("[DepartamentoVM] Error al crear departamento:", error);
      if (error instanceof ValidationError) throw error;
      throw new AppError(
        "No se pudo crear el departamento. Intente nuevamente.",
      );
    }
  }

  async actualizar(depto: Departamento): Promise<boolean> {
    try {
      this.validarDepartamento(depto);
      return await this.useCase.actualizarDepartamento(depto);
    } catch (error: any) {
      console.error(
        "[DepartamentoVM] Error al actualizar departamento:",
        error,
      );
      if (error instanceof ValidationError || error instanceof NotFoundError)
        throw error;
      throw new AppError(
        "No se pudo actualizar el departamento. Intente nuevamente.",
      );
    }
  }

  async eliminar(id: number): Promise<boolean> {
    try {
      if (id <= 0) throw new ValidationError("ID inválido");

      const tienePersonas = await this.verificarPersonasAsociadas(id);
      if (tienePersonas)
        throw new ValidationError(
          "No se puede eliminar un departamento que tiene personas asociadas",
        );

      return await this.useCase.eliminarDepartamento(id);
    } catch (error: any) {
      console.error("[DepartamentoVM] Error al eliminar departamento:", error);
      if (error instanceof ValidationError) throw error;
      throw new AppError(
        "No se pudo eliminar el departamento. Intente nuevamente.",
      );
    }
  }

  private validarDepartamento(depto: Departamento) {
    if (!depto.nombre?.trim())
      throw new ValidationError("El nombre del departamento es obligatorio");
    if (depto.nombre.length < 2 || depto.nombre.length > 100)
      throw new ValidationError(
        "El nombre del departamento debe tener entre 2 y 100 caracteres",
      );
  }

  private async verificarPersonasAsociadas(
    idDepartamento: number,
  ): Promise<boolean> {
    try {
      const personaUseCase = Container.getInstance().getCRUDPersonasUseCase();
      const personas = await personaUseCase.listarPersonas();
      return personas.some((p) => p.IDDepartamento === idDepartamento);
    } catch (error) {
      console.error(
        "[DepartamentoVM] Error al verificar personas asociadas:",
        error,
      );
      return false;
    }
  }
}
