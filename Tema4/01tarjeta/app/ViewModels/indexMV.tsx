import { useState } from "react";

export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
}

export function useUsuariosViewModel() {
  const [usuarios] = useState<Usuario[]>([
    { id: 1, nombre: 'Lucía', apellido: 'García'},
    { id: 2, nombre: 'Lucía', apellido: 'García'},
    { id: 3, nombre: 'Lucía', apellido: 'García'},
    { id: 4, nombre: 'Lucía', apellido: 'García'},
    { id: 5, nombre: 'Lucía', apellido: 'García'}
  ]);
  return { usuarios };
}