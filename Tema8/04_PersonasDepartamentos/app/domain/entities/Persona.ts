export class Persona {
  constructor(
    public id: number,
    public nombre: string,
    public apellidos: string,
    public telefono: string,
    public direccion: string,
    public fechaNacimiento: Date,
    public idDepartamento: number,
    public nombreDepartamento?: string, // opcional
  ) {}

  get edad(): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
    const mesDiff = hoy.getMonth() - this.fechaNacimiento.getMonth();
    const diaDiff = hoy.getDate() - this.fechaNacimiento.getDate();
    if (mesDiff < 0 || (mesDiff === 0 && diaDiff < 0)) {
      edad--;
    }
    return edad;
  }
}
