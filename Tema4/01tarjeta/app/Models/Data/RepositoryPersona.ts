export interface Persona {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
}

export const listaPersonas: Persona[] = [
    { id: 1, nombre: "Juan", apellido: "Pérez", edad: 30 },
    { id: 2, nombre: "Ana", apellido: "García", edad: 25 },
    { id: 3, nombre: "Luis", apellido: "Martínez", edad: 40 },
    { id: 4, nombre: "María", apellido: "López", edad: 35 }
];