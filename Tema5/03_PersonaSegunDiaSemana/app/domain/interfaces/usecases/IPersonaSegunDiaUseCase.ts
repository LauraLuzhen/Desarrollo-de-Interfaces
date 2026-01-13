import { PersonaDTO } from "../../dtos/PersonaDTO";

export interface IPersonaSegunDiaUseCase {
  getPersonaDelDia(): PersonaDTO;
}
