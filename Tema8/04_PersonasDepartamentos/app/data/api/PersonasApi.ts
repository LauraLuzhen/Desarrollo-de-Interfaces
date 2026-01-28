import { ApiRoutes } from "../constants/ApiRoutes";
import { PersonaDTO } from "../dto/PersonaDTO";
import { ApiConfig } from "./ApiConfig";

export class PersonasApi {
  async getAll(): Promise<PersonaDTO[]> {
    const response = await fetch(`${ApiConfig.BASE_URL}${ApiRoutes.PERSONAS}`);
    return await response.json();
  }

  async getById(id: number): Promise<PersonaDTO> {
    const response = await fetch(
      `${ApiConfig.BASE_URL}${ApiRoutes.PERSONAS}/${id}`,
    );
    return await response.json();
  }

  async create(persona: Omit<PersonaDTO, "id">): Promise<void> {
    await fetch(`${ApiConfig.BASE_URL}${ApiRoutes.PERSONAS}`, {
      method: "POST",
      headers: ApiConfig.HEADERS,
      body: JSON.stringify(persona),
    });
  }

  async update(persona: PersonaDTO): Promise<void> {
    await fetch(`${ApiConfig.BASE_URL}${ApiRoutes.PERSONAS}/${persona.id}`, {
      method: "PUT",
      headers: ApiConfig.HEADERS,
      body: JSON.stringify(persona),
    });
  }

  async delete(id: number): Promise<void> {
    await fetch(`${ApiConfig.BASE_URL}${ApiRoutes.PERSONAS}/${id}`, {
      method: "DELETE",
    });
  }
}
