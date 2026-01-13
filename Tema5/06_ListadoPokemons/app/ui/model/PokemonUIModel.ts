import { Pokemon } from "../../domain/entities/Pokemon";

export class PokemonUIModel {
  public nombre: string;
  public img: string;

  constructor(pokemon: Pokemon) {
    this.nombre = pokemon.nombre;
    this.img = pokemon.img;
  }
}
