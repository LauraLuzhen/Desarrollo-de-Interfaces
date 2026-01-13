export class Pokemon {
  constructor(
    public id: number,
    public nombre: string,
    public inf: string,  // URL con info del Pokémon
    public img: string   // URL de la imagen
  ) {}
}
