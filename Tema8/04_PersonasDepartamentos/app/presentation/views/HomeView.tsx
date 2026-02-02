import { useRouter } from "expo-router";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function VistaPrincipal() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF0F5" />

      <Text style={styles.title}>App</Text>
      <Text style={styles.subtitle}>Gestión de personas y departamentos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF0F5", // fondo pastel rosa claro
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#FF6B81", // rosa pastel intenso
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#555", // gris suave
    marginBottom: 50,
    textAlign: "center",
  },
  personButton: {
    backgroundColor: "#FFD9E8", // pastel rosa suave
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#FF6B81",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  deptoButton: {
    backgroundColor: "#FFF5D9", // pastel amarillo suave
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#FFB347",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: "#333",
    fontSize: 20,
    fontWeight: "700",
  },
});
