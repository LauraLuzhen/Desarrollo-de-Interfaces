export class DateUtils {
  /**
   * Calcula la edad a partir de una fecha de nacimiento
   * @param fechaNacimiento Fecha de nacimiento
   * @returns Edad en años
   */
  static calcularEdad(fechaNacimiento: Date): number {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mesDiff = hoy.getMonth() - fechaNacimiento.getMonth();
    const diaDiff = hoy.getDate() - fechaNacimiento.getDate();

    if (mesDiff < 0 || (mesDiff === 0 && diaDiff < 0)) {
      edad--;
    }

    return edad;
  }

  /**
   * Devuelve el día de la semana en número (0 = domingo, 1 = lunes, ..., 6 = sábado)
   * @param fecha Fecha a evaluar
   */
  static getDiaSemana(fecha: Date = new Date()): number {
    return fecha.getDay();
  }

  /**
   * Devuelve true si es viernes o sábado
   */
  static esViernesOSabado(fecha: Date = new Date()): boolean {
    const dia = this.getDiaSemana(fecha);
    return dia === 5 || dia === 6;
  }

  /**
   * Devuelve true si es domingo
   */
  static esDomingo(fecha: Date = new Date()): boolean {
    return this.getDiaSemana(fecha) === 0;
  }
}
