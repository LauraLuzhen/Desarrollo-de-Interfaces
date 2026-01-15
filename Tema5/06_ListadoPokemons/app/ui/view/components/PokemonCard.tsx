import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { PokemonUIModel } from "../../model/PokemonUIModel";

interface Props {
  pokemon: PokemonUIModel;
  width?: number; // ancho opcional para grid
}

export const PokemonCard: React.FC<Props> = ({ pokemon, width }) => {
  return (
    <View style={[styles.card, { width: width || 120 }]}>
      <Image source={{ uri: pokemon.img }} style={styles.image} />
      <Text style={styles.name}>{pokemon.nombre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    padding: 8,
    margin: 8,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 6,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
  },
});
