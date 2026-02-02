import { DepartamentoRepository } from "../data/repositories/DepartamentoRepository";
import { PersonasRepository } from "../data/repositories/PersonasRepository";
import { DepartamentoUseCase } from "../domain/usecases/DepartamentoUseCase";
import { PersonaUseCase } from "../domain/usecases/PersonaUseCase";

class Container {
  private static instance: Container;

  private personasRepository: PersonasRepository;
  private departamentoRepository: DepartamentoRepository;

  private crudPersonasUseCase: PersonaUseCase;
  private crudDepartamentosUseCase: DepartamentoUseCase;

  private constructor() {
    this.personasRepository = new PersonasRepository();
    this.departamentoRepository = new DepartamentoRepository();

    this.crudPersonasUseCase = new PersonaUseCase(this.personasRepository);
    this.crudDepartamentosUseCase = new DepartamentoUseCase(
      this.departamentoRepository,
    );
  }

  public static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }

  public getCRUDPersonasUseCase(): PersonaUseCase {
    return this.crudPersonasUseCase;
  }

  public getCRUDDepartamentosUseCase(): DepartamentoUseCase {
    return this.crudDepartamentosUseCase;
  }
}

export default Container;
