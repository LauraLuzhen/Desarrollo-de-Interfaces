import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./ui/view/Home";

export default function App() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  );
}
