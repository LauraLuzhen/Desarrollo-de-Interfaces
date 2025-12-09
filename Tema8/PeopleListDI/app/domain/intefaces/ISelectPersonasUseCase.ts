import Persona from "../entities/Persona";

export interface ISelectPersonaUseCase {
  execute(persona: Persona): void;
}
