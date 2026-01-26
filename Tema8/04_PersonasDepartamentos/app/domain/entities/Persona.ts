export class Persona {
    constructor(
        public id: number,
        public nombre: string,
        public apellidos: string,
        public telefono: number,
        public direccion: string,
        public fechaNacimiento: Date,
        public idDepartamento: number,
        public fotoUrl?: string
    ) {}
}
