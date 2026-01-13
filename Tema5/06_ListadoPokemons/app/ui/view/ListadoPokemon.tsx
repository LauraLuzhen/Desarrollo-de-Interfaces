import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, StyleSheet } from "react-native";
import { listadoPokemonVM } from "../../core/container";
import PokemonCard from "./components/PokemonCard";
import { PokemonUIModel } from "../model/PokemonUIModel";

export default function ListadoPokemon() {
  const [pokemons, setPokemons] = useState<PokemonUIModel[]>([]);

  const edadUsuario = 26; // Cambia este valor para probar diferentes edades

  useEffect(() => {
    async function load() {
      await listadoPokemonVM.loadPokemons(edadUsuario);
      setPokemons(listadoPokemonVM.pokemons);
    }
    load();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Listado de Pokémon</Text>
      <FlatList
        data={pokemons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <PokemonCard pokemon={item} />}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No hay Pokémon disponibles</Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 16,
    textAlign: "center",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#888",
  },
});
