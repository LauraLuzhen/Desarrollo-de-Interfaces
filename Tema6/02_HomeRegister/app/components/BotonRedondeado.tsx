import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface Props {
  texto: string;
  onPress: () => void;
}

export default function BotonRedondeado({ texto, onPress }: Props) {
  return (
    <Pressable style={styles.boton} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#f57c00",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },
  texto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
