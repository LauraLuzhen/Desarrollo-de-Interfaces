export class FechaService {
  private today(): Date {
    return new Date();
  }

  calcularEdad(fechaNacimiento: Date): number {
    const hoy = this.today();
    const nacimiento = new Date(fechaNacimiento);

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }

    return edad;
  }

  esViernesOSabado(): boolean {
    const d = this.today().getDay(); // 5 viernes, 6 sábado
    return d === 5 || d === 6;
  }

  esDomingo(): boolean {
    return this.today().getDay() === 0;
  }
}
