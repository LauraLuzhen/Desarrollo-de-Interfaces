import { IPokemonRepositoryPokeAPI } from "../../domain/interfaces/repositories/IPokemonRepositoryPokeAPI";
import { Pokemon } from "../../domain/entities/Pokemon";
import { PokemonAPI } from "../database/PokemonAPI";

export class PokemonRepository implements IPokemonRepositoryPokeAPI {
  private api = new PokemonAPI();

  // Trae 20 Pokémon según el offset
  async getPokemonPorCantidad(offset: number = 0): Promise<Pokemon[]> {
    const results = await this.api.fetchPokemons(20, offset);

    return results.map((item: any) => {
      // Extrae el ID de la URL (ej: ".../pokemon/1/")
      const id = parseInt(item.url.split("/").filter(Boolean).pop()!);

      // Construye la entidad Pokemon
      return new Pokemon(
        id,
        item.name,
        item.url,
        "" // Imagen vacía por ahora (opcional: se puede fetch adicional)
      );
    });
  }

  // Opcional: traer todos los Pokémon (limitado a primeras 4 generaciones)
  async getAllPokemons(): Promise<Pokemon[]> {
    let all: Pokemon[] = [];
    let offset = 0;
    let batch: Pokemon[];

    do {
      batch = await this.getPokemonPorCantidad(offset);
      all = all.concat(batch);
      offset += 20;
    } while (batch.length > 0 && offset < 80); // primeras 4 generaciones (20*4=80)

    return all;
  }
}
