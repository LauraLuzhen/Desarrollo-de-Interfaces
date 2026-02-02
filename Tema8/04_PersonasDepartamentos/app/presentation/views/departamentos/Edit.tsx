import { Departamento } from "@/app/domain/entities/Departamento";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CRUDDepartamentoVM } from "../../viewmodels/DepartamentoViewModel";

export default function EditarDepartamento() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [vm] = useState(() => new CRUDDepartamentoVM());

  const idKey = params.id ? String(params.id) : "nuevo";
  const [departamento, setDepartamento] = useState<Departamento>(
    new Departamento(0, ""),
  );
  const [modoEdicion, setModoEdicion] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function cargar() {
      setLoading(true);
      if (params.id) {
        const d = await vm.obtener(Number(params.id));
        if (isMounted && d) {
          setDepartamento(d);
          setModoEdicion(true);
        }
      } else {
        setDepartamento(new Departamento(0, ""));
        setModoEdicion(false);
      }
      if (isMounted) setLoading(false);
    }

    cargar();
    return () => {
      isMounted = false;
    };
  }, [idKey]);

  const handleGuardar = async () => {
    if (!departamento.nombre.trim()) {
      Alert.alert("Error", "El nombre del departamento es obligatorio");
      return;
    }

    const success = modoEdicion
      ? await vm.actualizar(departamento)
      : await vm.crear(departamento);

    if (success) {
      router.replace("/presentation/views/departamentos");
    } else {
      Alert.alert("Error", "No se pudo guardar el departamento");
    }
  };

  if (loading)
    return (
      <View style={s.centered}>
        <ActivityIndicator size="large" color="#A3C4F3" />
      </View>
    );

  return (
    <ScrollView style={s.container} key={idKey}>
      <Text style={s.title}>
        {modoEdicion ? "Editar Departamento" : "Nuevo Departamento"}
      </Text>

      <View style={s.form}>
        <Text style={s.label}>Nombre del departamento</Text>
        <TextInput
          style={s.input}
          value={departamento.nombre}
          onChangeText={(t) => setDepartamento({ ...departamento, nombre: t })}
          placeholder="..."
        />

        <TouchableOpacity
          style={[
            s.saveBtn,
            { backgroundColor: modoEdicion ? "#A3C4F3" : "#FFD1DC" },
          ]}
          onPress={handleGuardar}
        >
          <Text style={s.saveBtnText}>
            {modoEdicion ? "Guardar Cambios" : "Crear Departamento"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF8F0" },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  form: { padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "800",
    marginVertical: 20,
    textAlign: "center",
    color: "#333",
  },
  label: { fontSize: 16, fontWeight: "700", color: "#555", marginBottom: 8 },
  input: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    backgroundColor: "#FFF1F3",
  },
  saveBtn: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  saveBtnText: { color: "#fff", fontWeight: "700", fontSize: 16 },
});
