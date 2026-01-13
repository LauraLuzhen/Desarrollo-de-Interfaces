import { PersonaUIModel } from "../model/PersonaUIModel";
import { IListadoPersonasMayoresDeEdadUseCase } from "../../domain/interfaces/usecases/IListadoPersonasMayoresDeEdadUseCase";

export class HomeVM {
  public personas: PersonaUIModel[] = [];

  constructor(private listadoUseCase: IListadoPersonasMayoresDeEdadUseCase) {
    this.loadPersonas();
  }

  loadPersonas() {
    const listado = this.listadoUseCase.getListado();
    this.personas = listado.map(p => new PersonaUIModel(p));
  }
}
