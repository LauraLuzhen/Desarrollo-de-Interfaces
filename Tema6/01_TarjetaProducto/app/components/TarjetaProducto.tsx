import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { BotonPersonalizado } from "./BotonPersonalizado";

interface TarjetaProductoProps {
  name: string;
  price: number;
  image: string; // URL de la imagen
  onAddToCart: () => void;
}

export function TarjetaProducto({ name, price, image, onAddToCart }: TarjetaProductoProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>{price.toFixed(2)} €</Text>
      <BotonPersonalizado onPress={onAddToCart}>Añadir al carrito</BotonPersonalizado>
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    width: 200,
    alignItems: "center",
    margin: 10,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
  },
});