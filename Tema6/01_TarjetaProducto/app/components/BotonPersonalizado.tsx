import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface BotonPersonalizadoProps {
  onPress: () => void;
  children: React.ReactNode;
}

export function BotonPersonalizado({ onPress, children }: BotonPersonalizadoProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0070f3",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginTop: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
