import { ApiRoutes } from "../constants/ApiRoutes";
import { DepartamentoDTO } from "../dto/DepartamentoDTO";
import { ApiConfig } from "./ApiConfig";

export class DepartamentosApi {
  async getAll(): Promise<DepartamentoDTO[]> {
    const response = await fetch(
      `${ApiConfig.BASE_URL}${ApiRoutes.DEPARTAMENTOS}`,
    );
    return await response.json();
  }

  async create(nombre: string): Promise<void> {
    await fetch(`${ApiConfig.BASE_URL}${ApiRoutes.DEPARTAMENTOS}`, {
      method: "POST",
      headers: ApiConfig.HEADERS,
      body: JSON.stringify({ nombre }),
    });
  }

  async update(depto: DepartamentoDTO): Promise<void> {
    await fetch(`${ApiConfig.BASE_URL}${ApiRoutes.DEPARTAMENTOS}/${depto.id}`, {
      method: "PUT",
      headers: ApiConfig.HEADERS,
      body: JSON.stringify(depto),
    });
  }

  async delete(id: number): Promise<void> {
    await fetch(`${ApiConfig.BASE_URL}${ApiRoutes.DEPARTAMENTOS}/${id}`, {
      method: "DELETE",
    });
  }
}
