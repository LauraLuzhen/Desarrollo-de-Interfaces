import { injectable } from "inversify";
import { Persona } from "../Entities/Persona";


export interface IRepositoryPersonas {
     getListadoCompletoPersonas(): Persona[];
}


@injectable()
export class PersonasRepository implements IRepositoryPersonas{


    getListadoCompletoPersonas(): Persona[] {


        //En un futuro, esto podría hacer llamadas a una API que nos ofreciera los datos
        return [
            new Persona(1, 'Fernando', 'Galiana Fernández'),
            new Persona(2, 'Carlos', 'Martínez López'),
            new Persona(3, 'Ana', 'Rodríguez Pérez'),
            new Persona(4, 'Miguel', 'Sánchez Ruiz'),
            new Persona(5, 'Laura', 'Torres Díaz'),
            new Persona(6, 'David', 'Moreno García'),
        ];
    }
}

@injectable()
export class PersonasRepositoryEmpty implements IRepositoryPersonas{
    getListadoCompletoPersonas(): Persona[] {
        return [];
    }
}
    
@injectable()
export class PersonasRepository100 implements IRepositoryPersonas{
    getListadoCompletoPersonas(): Persona[] {
        const personas: Persona[] = [];

        const nombres = [
            "Adrián", "Beatriz", "Carlos", "Diana", "Emilio", "Fátima", "Gabriel", "Helena", 
            "Iván", "Julia", "Kevin", "Laura", "Manuel", "Noa", "Óscar", "Paula", "Quique", 
            "Raquel", "Sergio", "Tania", "Uriel", "Vanesa", "Wilson", "Ximena", "Yago", "Zoe"
        ];
        
        const apellidos = [
            "García", "Rodríguez", "Fernández", "López", "Martínez", "Sánchez", "Pérez", 
            "Gómez", "Martín", "Jiménez", "Ruiz", "Hernández", "Díaz", "Moreno", "Álvarez",
            "Molina", "Navarro", "Flores", "Torres", "Vega", "Reyes", "Blanco", "Serrano", 
            "Méndez", "Ramírez", "Vargas", "Castro", "Ortega", "Guerrero", "Ortiz"
        ];
        
        for (let i = 1; i <= 100; i++) {
            const nombreIndex = (i - 1) % nombres.length;
            const apellido1Index = (i - 1) % apellidos.length;
            const apellido2Index = Math.floor((i - 1) / nombres.length) % apellidos.length;

            const nombre = nombres[nombreIndex];
            const apellidoPaterno = apellidos[apellido1Index];
            const apellidoMaterno = apellidos[apellido2Index];
            
            // Construye el nombre y apellidos completos
            const nombreCompleto = `${nombre} (ID: ${i})`;
            const apellidosCompletos = `${apellidoPaterno} ${apellidoMaterno}`;

            personas.push(
                new Persona(
                    i, 
                    nombreCompleto,
                    apellidosCompletos
                )
            );
        }

        return personas;
    }
}
