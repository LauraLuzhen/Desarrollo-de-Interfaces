import { injectable } from "inversify";
import Persona from "../entities/Persona";
import { ISelectPersonaUseCase } from "../intefaces/ISelectPersonasUseCase";

@injectable()
export class SelectPersonaUseCase implements ISelectPersonaUseCase {
  execute(persona: Persona): void {
    // comportamiento cuando se selecciona una persona:
    // p. ej. persistir selección, enviar analytics, validaciones, etc.
    // ahora mismo solo un console.log como ejemplo:
    console.log("UseCase - persona seleccionada:", persona);
  }
}
