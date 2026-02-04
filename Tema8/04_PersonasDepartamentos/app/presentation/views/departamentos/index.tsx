import { Departamento } from "@/app/domain/entities/Departamento";
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
import { CRUDDepartamentoVM } from "../../viewmodels/DepartamentoViewModel";

export default function ListadoDepartamentos() {
  const router = useRouter();
  const [vm] = useState(() => new CRUDDepartamentoVM());
  const [departamentos, setDepartamentos] = useState<Departamento[]>([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      let isMounted = true;
      const cargar = async () => {
        try {
          setLoading(true);
          const data = await vm.listar();
          if (isMounted) setDepartamentos(data);
        } catch (e) {
          console.error(e);
        } finally {
          if (isMounted) setLoading(false);
        }
      };
      cargar();
      return () => {
        isMounted = false;
      };
    }, [vm]),
  );

  if (loading)
    return (
      <View style={s.centered}>
        <ActivityIndicator size="large" color="#A3C4F3" />
      </View>
    );

  return (
    <View style={s.container}>
      <TouchableOpacity
        style={s.addBtn}
        onPress={() => router.push("/presentation/views/departamentos/Edit")}
      >
        <Text style={s.addBtnText}>+ New Department</Text>
      </TouchableOpacity>

      <FlatList
        data={departamentos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={s.card}>
            <View style={s.info}>
              <Text style={s.cardTitle}>{item.nombre}</Text>
            </View>

            <View style={s.actions}>
              <TouchableOpacity
                style={[s.smallBtn, s.editColor]}
                onPress={() =>
                  router.push({
                    pathname: "/presentation/views/departamentos/Edit",
                    params: { id: item.id },
                  })
                }
              >
                <Text style={s.smallBtnText}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[s.smallBtn, s.delColor]}
                onPress={async () => {
                  try {
                    const ok = await vm.eliminar(item.id);
                    if (ok) {
                      const data = await vm.listar();
                      setDepartamentos(data);
                    }
                  } catch (error: any) {
                    if (
                      error.message ===
                      "The departament has associated people and cannot be deleted."
                    ) {
                      Alert.alert("No se puede eliminar", error.message);
                    } else {
                      console.error(error);
                    }
                  }
                }}
              >
                <Text style={s.smallBtnText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: "#FFF8F0" },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  addBtn: {
    backgroundColor: "#FFD1DC",
    padding: 14,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },
  addBtnText: { color: "#333", fontWeight: "700", fontSize: 16 },
  card: {
    backgroundColor: "#FFF1F3",
    padding: 14,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 2,
  },
  info: { flex: 1 },
  cardTitle: { fontSize: 16, fontWeight: "700", color: "#333" },
  cardSub: { fontSize: 12, color: "#777" },
  actions: { flexDirection: "row", gap: 8 },
  smallBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    minWidth: 70,
    alignItems: "center",
  },
  smallBtnText: { color: "#fff", fontWeight: "600", fontSize: 12 },
  editColor: { backgroundColor: "#A3C4F3" },
  delColor: { backgroundColor: "#FFB3AB" },
});
