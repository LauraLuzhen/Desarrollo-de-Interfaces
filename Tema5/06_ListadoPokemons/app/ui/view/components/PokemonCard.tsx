import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { PokemonUIModel } from "../../model/PokemonUIModel";

interface Props {
  pokemon: PokemonUIModel;
}

export default function PokemonCard({ pokemon }: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: pokemon.img }} style={styles.image} />
      <Text style={styles.nombre}>{pokemon.nombre}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
