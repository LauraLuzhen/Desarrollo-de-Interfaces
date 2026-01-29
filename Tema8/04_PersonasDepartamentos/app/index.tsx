import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "reflect-metadata"; // necesario para inversify
import { DrawerNavigator } from "./presentation/navigation/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
