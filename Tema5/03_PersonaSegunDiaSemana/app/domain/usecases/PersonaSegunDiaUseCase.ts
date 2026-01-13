import { IPersonaSegunDiaUseCase } from "../interfaces/usecases/IPersonaSegunDiaUseCase";
import { IPersonaRepository } from "../interfaces/repositories/IPersonaRepository";
import { PersonaDTO } from "../dtos/PersonaDTO";

export class PersonaSegunDiaUseCase implements IPersonaSegunDiaUseCase {
  constructor(private personaRepo: IPersonaRepository) {}

  getPersonaDelDia(): PersonaDTO {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = domingo, 1 = lunes, ..., 6 = sábado

    const persona = this.personaRepo.getByIndex(dayOfWeek);
    if (!persona) return new PersonaDTO(0, "Desconocido", "");

    return new PersonaDTO(persona.id, persona.nombre, persona.apellidos);
  }
}
