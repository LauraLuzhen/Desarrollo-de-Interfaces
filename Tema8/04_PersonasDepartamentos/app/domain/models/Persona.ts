export interface Persona {
  id: number;
  nombre: string;
  apellidos: string;
  telefono: string;
  direccion: string;
  fotoURL: string;
  fechaNacimiento: Date;
  idDepartamento: number;
  nombreDepartamento?: string;
}
