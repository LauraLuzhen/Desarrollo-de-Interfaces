// /di/types.ts
export const TYPES = {
  // Repositories
  IPersonaRepository: Symbol.for("IPersonaRepository"),
  IDepartamentoRepository: Symbol.for("IDepartamentoRepository"),

  // Use Cases Personas
  IGetPersonasUseCase: Symbol.for("IGetPersonasUseCase"),
  ICreatePersonaUseCase: Symbol.for("ICreatePersonaUseCase"),
  IUpdatePersonaUseCase: Symbol.for("IUpdatePersonaUseCase"),
  IDeletePersonaUseCase: Symbol.for("IDeletePersonaUseCase"),

  // Use Cases Departamentos
  IGetDepartamentosUseCase: Symbol.for("IGetDepartamentosUseCase"),
  ICreateDepartamentoUseCase: Symbol.for("ICreateDepartamentoUseCase"),
  IUpdateDepartamentoUseCase: Symbol.for("IUpdateDepartamentoUseCase"),
  IDeleteDepartamentoUseCase: Symbol.for("IDeleteDepartamentoUseCase"),
};
