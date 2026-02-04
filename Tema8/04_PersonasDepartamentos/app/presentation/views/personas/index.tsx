import { Persona } from "@/app/domain/entities/Persona";
import { useFocusEffect, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CRUDPersonaVM } from "../../viewmodels/PersonaViewModel";

export default function ListadoPersonas() {
  const router = useRouter();
  const [vm] = useState(() => new CRUDPersonaVM());
  const [personas, setPersonas] = useState<Persona[]>([]);
  const [loading, setLoading] = useState(true);

  const cargarDatos = useCallback(() => {
    let isMounted = true;
    setLoading(true);
    vm.listar().then((data) => {
      if (isMounted) {
        setPersonas(data);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [vm]);

  useFocusEffect(cargarDatos);

  if (loading) {
    return (
      <View style={s.centered}>
        <ActivityIndicator size="large" color="#FFB6C1" />
      </View>
    );
  }

  return (
    <View style={s.container}>
      <TouchableOpacity
        style={s.addBtn}
        onPress={() => router.push("/presentation/views/personas/Edit")}
      >
        <Text style={s.addBtnText}>+ New Person</Text>
      </TouchableOpacity>

      <FlatList
        data={personas}
        keyExtractor={(item) => item.ID?.toString() || Math.random().toString()}
        renderItem={({ item }) => (
          <View style={s.card}>
            <View style={s.infoContainer}>
              <Text style={s.itemName}>
                {item.Nombre} {item.Apellidos}
              </Text>
              <Text style={s.itemDepto}>
                {item.NombreDepartamento || "Without Department"}
              </Text>
              <Text style={s.itemAge}>
                Age: {vm.obtenerEdad(item.FechaNacimiento)} years old
              </Text>
            </View>

            <View style={s.actions}>
              <TouchableOpacity
                style={[s.smallBtn, s.editBtn]}
                onPress={() =>
                  router.push({
                    pathname: "/presentation/views/personas/Edit",
                    params: { id: item.ID },
                  })
                }
              >
                <Text style={s.btnText}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[s.smallBtn, s.delBtn]}
                onPress={async () => {
                  const success = await vm.eliminar(item.ID!);
                  if (success) {
                    cargarDatos();
                  } else {
                    Alert.alert("Error", vm.error || "No se pudo eliminar");
                  }
                }}
              >
                <Text style={s.btnText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFF0F5" },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  addBtn: {
    backgroundColor: "#FFB6C1",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  addBtnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  card: {
    backgroundColor: "#FFF5EE",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
  },
  infoContainer: { flex: 1, marginRight: 10 },
  itemName: { fontSize: 18, fontWeight: "700", color: "#333" },
  itemDepto: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FF69B4",
    marginVertical: 2,
  },
  itemAge: { fontSize: 14, color: "#555", fontWeight: "500", marginBottom: 2 },
  itemDetail: { fontSize: 13, color: "#666" },
  actions: { flexDirection: "row", gap: 6 },
  smallBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    minWidth: 60,
    alignItems: "center",
  },
  editBtn: { backgroundColor: "#FF69B4" },
  delBtn: { backgroundColor: "#FF6347" },
  btnText: { color: "#fff", fontWeight: "600", fontSize: 12 },
});
