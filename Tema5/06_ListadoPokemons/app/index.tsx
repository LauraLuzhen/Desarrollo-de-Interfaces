import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ListadoPokemon from "./ui/view/ListadoPokemon";

export default function App() {
  return (
    <SafeAreaProvider>
      <ListadoPokemon />
    </SafeAreaProvider>
  );
}
