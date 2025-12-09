import { injectable } from "inversify";
import  Persona  from "../../domain/entities/Persona";
import { IRepositoryPersonas } from "../../domain/repositories/IRepositoryPersonas";

@injectable()
export default class PersonasRepository implements IRepositoryPersonas{


    getListadoCompletoPersonas(): Persona[] {


        //En un futuro, esto podría hacer llamadas a una API que nos ofreciera los datos
        return [
            new Persona(1, 'Laura', 'Guapa'),
            new Persona(2, 'Laurita', 'Guapisima'),
            new Persona(3, 'Laurina', 'Hermosa'),
            new Persona(4, 'Lau', 'Bonita'),
            new Persona(5, 'Laurinchi', 'Preciosa'),
            new Persona(6, 'Lauralita', 'Mi Princesita'),
        ];
    }
}
