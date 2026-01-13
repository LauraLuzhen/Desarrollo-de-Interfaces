import { TYPES } from "./types";

// Repositorios
import { PersonaRepositoryMock } from "../data/repositories/PersonaRepositoryMock";
import { IPersonaRepository } from "../domain/interfaces/repositories/IPersonaRepository";

// UseCases
import { ListadoPersonasMayoresDeEdadUseCase } from "../domain/usecases/ListadoPersonasMayoresDeEdadUseCase";
import { IListadoPersonasMayoresDeEdadUseCase } from "../domain/interfaces/usecases/IListadoPersonasMayoresDeEdadUseCase";

// ViewModel
import { HomeVM } from "../ui/viewmodel/HomeVM";

// Crear instancias manualmente
const personaRepo: IPersonaRepository = new PersonaRepositoryMock();
const listadoMayoresUseCase: IListadoPersonasMayoresDeEdadUseCase = new ListadoPersonasMayoresDeEdadUseCase(personaRepo);
const homeVM: HomeVM = new HomeVM(listadoMayoresUseCase);

export { TYPES, personaRepo, listadoMayoresUseCase, homeVM };
