import { IPersonaRepository } from "../../domain/interfaces/repositories/IPersonaRepository";
import { Persona } from "../../domain/entities/Persona";

export class PersonaRepositoryMock implements IPersonaRepository {
  private personas: Persona[] = [
    new Persona(1, "Fernando", "Galiana Fernández", new Date(1990, 0, 15)),
    new Persona(2, "Carlos", "Martínez López", new Date(2020, 3, 22)),
    new Persona(3, "Ana", "Rodríguez Pérez", new Date(1992, 6, 10)),
    new Persona(4, "Miguel", "Sánchez Ruiz", new Date(1988, 9, 5)),
    new Persona(5, "Laura", "Torres Díaz", new Date(1995, 11, 20)),
    new Persona(6, "David", "Moreno García", new Date(1991, 4, 30)),
    new Persona(7, "Lucía", "Hernández Ramírez", new Date(1989, 7, 12)),
  ];

  getAll(): Persona[] {
    return this.personas;
  }

  getByIndex(index: number): Persona | null {
    if (index < 0 || index >= this.personas.length) return null;
    return this.personas[index];
  }
}
