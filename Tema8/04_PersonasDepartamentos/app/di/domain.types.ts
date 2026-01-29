const DOMAIN_TYPES = {
  // repos
  IPersonaRepository: Symbol.for("IPersonaRepository"),
  IDepartamentoRepository: Symbol.for("IDepartamentoRepository"),

  // servicios
  FechaService: Symbol.for("FechaService"),

  // usecases personas
  GetPersonasUseCase: Symbol.for("GetPersonasUseCase"),
  GetPersonaByIdUseCase: Symbol.for("GetPersonaByIdUseCase"),
  CreatePersonaUseCase: Symbol.for("CreatePersonaUseCase"),
  UpdatePersonaUseCase: Symbol.for("UpdatePersonaUseCase"),
  DeletePersonaUseCase: Symbol.for("DeletePersonaUseCase"),

  // usecases departamentos
  GetDepartamentosUseCase: Symbol.for("GetDepartamentosUseCase"),
  GetDepartamentoByIdUseCase: Symbol.for("GetDepartamentoByIdUseCase"),
  CreateDepartamentoUseCase: Symbol.for("CreateDepartamentoUseCase"),
  UpdateDepartamentoUseCase: Symbol.for("UpdateDepartamentoUseCase"),
  DeleteDepartamentoUseCase: Symbol.for("DeleteDepartamentoUseCase"),
};

export default DOMAIN_TYPES;
