import { injectable } from "inversify";
import { Departamento } from "../../domain/entities/Departamento";
import { IDepartamentoRepository } from "../../domain/interfaces/repositories/IDepartamentoRepository";
import { ApiConfig } from "../api/ApiConfig";
import { ApiRoutes } from "../constants/ApiRoutes";

@injectable()
export class DepartamentoRepositoryApi implements IDepartamentoRepository {
  private getUrl() {
    return `${ApiConfig.BASE_URL}${ApiRoutes.DEPARTAMENTOS}`;
  }

  // Obtener todos los departamentos
  async getAll(): Promise<Departamento[]> {
    const response = await fetch(this.getUrl());
    const dtos = await response.json();
    return dtos.map((d: any) => new Departamento(d.id, d.nombre));
  }

  // Obtener un departamento por ID
  async getById(id: number): Promise<Departamento | null> {
    const response = await fetch(`${this.getUrl()}/${id}`);
    if (!response.ok) return null;
    const d = await response.json();
    return new Departamento(d.id, d.nombre);
  }

  // Crear departamento y devolver el creado
  async create(departamento: Departamento): Promise<Departamento> {
    const response = await fetch(this.getUrl(), {
      method: "POST",
      headers: ApiConfig.HEADERS,
      body: JSON.stringify({
        nombre: departamento.nombre,
      }),
    });

    const dto = await response.json(); // Devuelve el departamento creado
    return new Departamento(dto.id, dto.nombre);
  }

  // Actualizar departamento y devolver el actualizado
  async update(departamento: Departamento): Promise<Departamento> {
    const response = await fetch(`${this.getUrl()}/${departamento.id}`, {
      method: "PUT",
      headers: ApiConfig.HEADERS,
      body: JSON.stringify({
        id: departamento.id,
        nombre: departamento.nombre,
      }),
    });

    const dto = await response.json(); // Devuelve el departamento actualizado
    return new Departamento(dto.id, dto.nombre);
  }

  // Eliminar departamento
  async delete(id: number): Promise<boolean> {
    const response = await fetch(`${this.getUrl()}/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  }
}
