import React, { useEffect } from "react";
import { FlatList, Text, View, StyleSheet, ActivityIndicator, Dimensions } from "react-native";
import { observer } from "mobx-react-lite";
import { container } from "../../core/container";
import { TYPES } from "../../core/types";
import { ListadoPokemonVM } from "../viewmodel/ListadoPokemonVM";
import { PokemonCard } from "./components/PokemonCard";

// Obtenemos el VM desde el container
const listadoVM = container.get<ListadoPokemonVM>(TYPES.ListadoPokemonVM);

// Edad del usuario (puedes hacer que sea dinámica luego)
const edadUsuario = 24;

const screenWidth = Dimensions.get("window").width;
const numColumns = 3;
const cardMargin = 8;
const cardWidth = (screenWidth - cardMargin * (numColumns * 2)) / numColumns;

export const ListadoPokemon = observer(() => {

  useEffect(() => {
    listadoVM.cargarPokemons(edadUsuario);
  }, []);

  if (listadoVM.cargando) {
    return (
      <View style={styles.cargando}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text>Cargando Pokémon...</Text>
      </View>
    );
  }

  if (listadoVM.pokemons.length === 0) {
    return (
      <View style={styles.cargando}>
        <Text>No tienes Pokémon disponibles según tu edad.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={listadoVM.pokemons}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <PokemonCard pokemon={item} width={cardWidth} />}
      numColumns={numColumns}
      contentContainerStyle={{ paddingHorizontal: cardMargin }}
      showsVerticalScrollIndicator={false}
    />
  );
});

const styles = StyleSheet.create({
  cargando: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
