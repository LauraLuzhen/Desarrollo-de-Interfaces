import { Persona } from "@/app/domain/entities/Persona";
import { Picker } from "@react-native-picker/picker";
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
import { IDepartamento } from "../../../core/types";
import { CRUDPersonaVM } from "../../viewmodels/PersonaViewModel";

export default function EditarPersona() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const [vm] = useState(() => new CRUDPersonaVM());
  const personaVacia = new Persona(
    "",
    "",
    "",
    "",
    "",
    new Date().toISOString(),
    0,
  );
  const [persona, setPersona] = useState<Persona>(personaVacia);
  const [departamentos, setDepartamentos] = useState<IDepartamento[]>([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function inicializar() {
      setLoading(true);
      const listaDeptos = await vm.cargarDepartamentos();
      if (isMounted) setDepartamentos(listaDeptos);

      if (params.id) {
        const p = await vm.obtener(Number(params.id));
        if (isMounted && p) {
          setPersona(p);
          setModoEdicion(true);
        }
      } else {
        setPersona(personaVacia);
        setModoEdicion(false);
      }

      if (isMounted) setLoading(false);
    }

    inicializar();
    return () => {
      isMounted = false;
    };
  }, [params.id]);

  const handleGuardar = async () => {
    if (
      !persona.Nombre?.trim() ||
      !persona.FechaNacimiento ||
      persona.IDDepartamento === 0
    ) {
      Alert.alert(
        "Validación",
        "Nombre, Fecha de Nacimiento y Departamento son obligatorios",
      );
      return;
    }

    const success = modoEdicion
      ? await vm.actualizar(persona)
      : await vm.crear(persona);

    if (success) {
      Alert.alert(
        "Éxito",
        modoEdicion ? "Persona actualizada" : "Persona creada",
      );
      router.replace("/presentation/views/personas");
    } else {
      Alert.alert("Error", vm.error || "No se pudo completar la operación");
    }
  };

  if (loading) {
    return (
      <View style={s.centered}>
        <ActivityIndicator size="large" color="#FFB6C1" />
      </View>
    );
  }

  return (
    <ScrollView
      style={s.container}
      contentContainerStyle={{ paddingBottom: 40 }}
    >
      <Text style={s.title}>{modoEdicion ? "Edit Person" : "New Person"}</Text>

      <View style={s.form}>
        <Text style={s.label}>Name</Text>
        <TextInput
          style={s.input}
          value={persona.Nombre}
          onChangeText={(t) => setPersona({ ...persona, Nombre: t })}
          placeholder="Name"
        />

        <Text style={s.label}>Surnames</Text>
        <TextInput
          style={s.input}
          value={persona.Apellidos}
          onChangeText={(t) => setPersona({ ...persona, Apellidos: t })}
          placeholder="Surnames"
        />

        <Text style={s.label}>Birthdate</Text>
        <TextInput
          style={s.input}
          value={persona.FechaNacimiento.split("T")[0]}
          onChangeText={(t) => setPersona({ ...persona, FechaNacimiento: t })}
          placeholder="2000-10-10"
        />

        <Text style={s.label}>Phone number</Text>
        <TextInput
          style={s.input}
          keyboardType="phone-pad"
          value={persona.Telefono}
          onChangeText={(t) => setPersona({ ...persona, Telefono: t })}
        />

        <Text style={s.label}>Address</Text>
        <TextInput
          style={s.input}
          value={persona.Direccion}
          onChangeText={(t) => setPersona({ ...persona, Direccion: t })}
        />

        <Text style={s.label}>Departament</Text>
        <View style={s.pickerWrapper}>
          <Picker
            selectedValue={persona.IDDepartamento}
            onValueChange={(val) =>
              setPersona({ ...persona, IDDepartamento: val })
            }
            dropdownIconColor="#CD1389" // color del icono del dropdown
            style={s.picker} // aquí aplicamos color de texto y padding
          >
            <Picker.Item
              label="Select a department..."
              value={0}
              color="#999"
            />
            {departamentos.map((d) => (
              <Picker.Item
                key={d.id}
                label={d.nombre}
                value={d.id}
                color="#333"
              />
            ))}
          </Picker>
        </View>

        <TouchableOpacity
          style={[
            s.saveBtn,
            { backgroundColor: modoEdicion ? "#FF69B4" : "#d643a0" },
          ]}
          onPress={handleGuardar}
        >
          <Text style={s.saveBtnText}>
            {modoEdicion ? "Save Changes" : "Register Person"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={s.cancelBtn} onPress={() => router.back()}>
          <Text style={s.cancelBtnText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF0F5" },
  centered: { flex: 1, justifyContent: "center", alignItems: "center" },
  form: { padding: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
    color: "#333",
  },
  label: { fontSize: 14, fontWeight: "700", color: "#555", marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#E8D0E6",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#FDEFF8",
    color: "#333",
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#E8D0E6",
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: "#FDEFF8",
    overflow: "hidden",
  },
  saveBtn: {
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  saveBtnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  cancelBtn: {
    marginTop: 15,
    alignItems: "center",
    backgroundColor: "#FFC1E3",
    paddingVertical: 14,
    borderRadius: 12,
  },
  cancelBtnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  picker: {
    color: "#333", // color del texto
    paddingVertical: 10, // padding interno
  },
});
