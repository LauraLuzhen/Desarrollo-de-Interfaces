import { PersonaDTO } from "../../domain/dtos/PersonaDTO";
import { IPersonaSegunDiaUseCase } from "../../domain/interfaces/usecases/IPersonaSegunDiaUseCase";

export class HomeVM {
  public personaDelDia: PersonaDTO;

  constructor(private personaUseCase: IPersonaSegunDiaUseCase) {
    this.personaDelDia = this.personaUseCase.getPersonaDelDia();
  }
}
