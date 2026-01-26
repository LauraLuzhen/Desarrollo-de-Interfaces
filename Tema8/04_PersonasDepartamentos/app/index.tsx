import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { Persona } from "./domain/entities/Persona";

export default function App() {
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ui20251201140912-echufmbcephkfyfc.francecentral-01.azurewebsites.net/api/personas")
      .then(res => res.json())
      .then(data => {
        console.log("Datos directos desde Azure:", data);
        setPersonas(data);
      })
      .catch(err => {
        console.error("Error fetch directo:", err);
        alert("Error cargando personas. Revisa consola.");
      })
      .finally(() => setLoading(false));  
  }, []);


  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0078D4" />
        <Text>Cargando personas...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de Personas</Text>
      <FlatList
        data={personas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.personaCard}>
            <Text style={styles.personaNombre}>{item.nombre} {item.apellidos}</Text>
            <Text>Tel: {item.telefono}</Text>
            <Text>Departamento: {item.idDepartamento}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f2f2f2" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  personaCard: { backgroundColor: "#fff", padding: 12, marginBottom: 10, borderRadius: 8, elevation: 2 },
  personaNombre: { fontSize: 18, fontWeight: "600" },
});
