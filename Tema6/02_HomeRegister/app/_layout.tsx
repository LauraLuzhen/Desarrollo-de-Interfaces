import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "FOOD APP", headerShown: false }} />
      <Stack.Screen name="register" options={{ title: "Nuevo usuario" }} />
      <Stack.Screen name="home" options={{ title: "Inicio" }} />
    </Stack>
  );
}
