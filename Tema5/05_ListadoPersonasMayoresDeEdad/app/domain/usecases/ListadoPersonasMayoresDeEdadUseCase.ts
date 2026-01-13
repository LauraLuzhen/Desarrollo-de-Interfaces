import { IPersonaRepository } from "../interfaces/repositories/IPersonaRepository";
import { IListadoPersonasMayoresDeEdadUseCase } from "../interfaces/usecases/IListadoPersonasMayoresDeEdadUseCase";
import { Persona } from "../entities/Persona";

export class ListadoPersonasMayoresDeEdadUseCase implements IListadoPersonasMayoresDeEdadUseCase {
  constructor(private personaRepo: IPersonaRepository) {}

  getListado(): Persona[] {
    const personas = this.personaRepo.getAll();

    // Añadir una propiedad "mayorDeEdad" al ViewModel/Model de UI no aquí
    // Aquí devolvemos las personas con toda la info (incl. fechaNac)
    return personas;
  }
}
