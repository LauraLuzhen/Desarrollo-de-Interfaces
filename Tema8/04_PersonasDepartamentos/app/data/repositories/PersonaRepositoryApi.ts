import { injectable } from "inversify";
import { Persona } from "../../domain/entities/Persona";
import { IPersonaRepository } from "../../domain/interfaces/repositories/IPersonaRepository";
import { ApiConfig } from "../api/ApiConfig";
import { ApiRoutes } from "../constants/ApiRoutes";

@injectable()
export class PersonaRepositoryApi implements IPersonaRepository {
  private getUrl() {
    return `${ApiConfig.BASE_URL}${ApiRoutes.PERSONAS}`;
  }

  // Obtener todas las personas
  async getAll(): Promise<Persona[]> {
    const response = await fetch(this.getUrl());
    const dtos = await response.json();
    return dtos.map(
      (p: any) =>
        new Persona(
          p.id,
          p.nombre,
          p.apellidos,
          p.telefono,
          p.direccion,
          new Date(p.fechaNacimiento),
          p.idDepartamento,
        ),
    );
  }

  // Obtener por ID
  async getById(id: number): Promise<Persona | null> {
    const response = await fetch(`${this.getUrl()}/${id}`);
    if (!response.ok) return null;
    const p = await response.json();
    return new Persona(
      p.id,
      p.nombre,
      p.apellidos,
      p.telefono,
      p.direccion,
      new Date(p.fechaNacimiento),
      p.idDepartamento,
    );
  }

  // Crear persona y devolver la creada
  async create(persona: Persona): Promise<Persona> {
    const response = await fetch(this.getUrl(), {
      method: "POST",
      headers: ApiConfig.HEADERS,
      body: JSON.stringify({
        nombre: persona.nombre,
        apellidos: persona.apellidos,
        telefono: persona.telefono,
        direccion: persona.direccion,
        fechaNacimiento: persona.fechaNacimiento.toISOString(),
        idDepartamento: persona.idDepartamento,
      }),
    });

    const dto = await response.json(); // <-- Aquí devuelve el objeto creado
    return new Persona(
      dto.id,
      dto.nombre,
      dto.apellidos,
      dto.telefono,
      dto.direccion,
      new Date(dto.fechaNacimiento),
      dto.idDepartamento,
    );
  }

  // Actualizar persona y devolver la actualizada
  async update(persona: Persona): Promise<Persona> {
    const response = await fetch(`${this.getUrl()}/${persona.id}`, {
      method: "PUT",
      headers: ApiConfig.HEADERS,
      body: JSON.stringify({
        id: persona.id,
        nombre: persona.nombre,
        apellidos: persona.apellidos,
        telefono: persona.telefono,
        direccion: persona.direccion,
        fechaNacimiento: persona.fechaNacimiento.toISOString(),
        idDepartamento: persona.idDepartamento,
      }),
    });

    const dto = await response.json(); // <-- Devuelve la persona actualizada
    return new Persona(
      dto.id,
      dto.nombre,
      dto.apellidos,
      dto.telefono,
      dto.direccion,
      new Date(dto.fechaNacimiento),
      dto.idDepartamento,
    );
  }

  // Eliminar persona
  async delete(id: number): Promise<boolean> {
    const response = await fetch(`${this.getUrl()}/${id}`, {
      method: "DELETE",
    });
    return response.ok;
  }
}
