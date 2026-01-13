import { Persona } from "../../domain/entities/Persona";

export class PersonaUIModel {
  public nombre: string;
  public apellidos: string;
  public mayorDeEdad: boolean;

  constructor(persona: Persona) {
    this.nombre = persona.nombre;
    this.apellidos = persona.apellidos;

    // Calcular si es mayor de edad (18+)
    const hoy = new Date();
    const edad = hoy.getFullYear() - persona.fechaNac.getFullYear();
    const cumpleEsteAno = new Date(hoy.getFullYear(), persona.fechaNac.getMonth(), persona.fechaNac.getDate());

    this.mayorDeEdad = edad > 18 || (edad === 18 && cumpleEsteAno <= hoy);
  }
}
