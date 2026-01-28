import { inject, injectable } from "inversify";
import { TYPES } from "../../../di/types";
import { Persona } from "../../entities/Persona";
import { IPersonaRepository } from "../../interfaces/repositories/IPersonaRepository";
import { IGetPersonasUseCase } from "../../interfaces/usecases/personas/IGetPersonasUseCase";
import { DateUtils } from "../../utils/DateUtils";

@injectable()
export class GetPersonasUseCase implements IGetPersonasUseCase {
  constructor(
    @inject(TYPES.IPersonaRepository) private repo: IPersonaRepository,
  ) {}

  async execute(): Promise<Persona[]> {
    let personas = await this.repo.getAll();

    // Regla de negocio: Viernes y sábado, solo mayores de 18
    const today = new Date().getDay(); // 0 = Domingo, 5 = Viernes, 6 = Sábado
    if (today === 5 || today === 6) {
      personas = personas.filter(
        (p) => DateUtils.calcularEdad(p.fechaNacimiento) >= 18,
      );
    }

    return personas;
  }
}
