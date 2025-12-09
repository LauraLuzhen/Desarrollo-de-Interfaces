// UI/viewmodel/PersonaViewModel.ts
import Persona from "../../domain/entities/Persona";
import { inject, injectable } from "inversify";
import { TYPES } from "../../core/types";
import { makeAutoObservable } from "mobx";
import { IGetPersonasUseCase } from "../../domain/intefaces/IGetPersonasUseCase";
import { ISelectPersonaUseCase } from "../../domain/intefaces/ISelectPersonasUseCase";

@injectable()
export class PeopleListVM {
  private _personasList: Persona[] = [];
  private _personaSeleccionada: Persona;

  constructor(
    @inject(TYPES.IGetPersonasUseCase)
    private getPersonasUseCase: IGetPersonasUseCase,
    @inject(TYPES.ISelectPersonaUseCase)
    private selectPersonaUseCase: ISelectPersonaUseCase
  ) {
    this._personaSeleccionada = new Persona(0, "Fernando", "Galiana");
    // obtiene la lista a través del UseCase
    this._personasList = this.getPersonasUseCase.execute();
    makeAutoObservable(this);
  }

  public get personasList(): Persona[] {
    return this._personasList;
  }

  public get personaSeleccionada(): Persona {
    return this._personaSeleccionada;
  }

  public set personaSeleccionada(value: Persona) {
    this._personaSeleccionada = value;
    // delega comportamiento extra al usecase
    this.selectPersonaUseCase.execute(value);
  }
}
