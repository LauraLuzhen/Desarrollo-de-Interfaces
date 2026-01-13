import { Persona } from "../../entities/Persona";

export interface IListadoPersonasMayoresDeEdadUseCase {
  getListado(): Persona[];
}
