import { TYPES } from "./types";

import { IPersonaRepository } from "../domain/interfaces/repositories/IPersonaRepository";
import { PersonaRepositoryMock } from "../data/repositories/PersonaRepositoryMock";

import { IPersonaSegunDiaUseCase } from "../domain/interfaces/usecases/IPersonaSegunDiaUseCase";
import { PersonaSegunDiaUseCase } from "../domain/usecases/PersonaSegunDiaUseCase";

import { HomeVM } from "../ui/viewmodel/HomeVM";

// Crear instancias manualmente (sin decoradores)
const personaRepo: IPersonaRepository = new PersonaRepositoryMock();
const personaUseCase: IPersonaSegunDiaUseCase = new PersonaSegunDiaUseCase(personaRepo);
const homeVM: HomeVM = new HomeVM(personaUseCase);

export { TYPES, personaRepo, personaUseCase, homeVM };
