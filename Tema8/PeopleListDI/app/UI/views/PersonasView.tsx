import { observer } from "mobx-react-lite";
import React, { useRef } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { container } from "../../core/container";
import { TYPES } from "../../core/types";
import Persona from "../../domain/entities/Persona";
import { PeopleListVM } from "../viewmodel/PersonaViewModel";

const PeopleList = observer(() => {
  // Crear una referencia que almacenará el VM
  const vmRef = useRef<PeopleListVM | null>(null);

  // Instanciar el VM solo si no existe
  if (vmRef.current === null) {
    vmRef.current = container.get<PeopleListVM>(TYPES.IndexVM);
  }

  //Acceder a la instancia persistente
  const viewModel = vmRef.current!;
  if (!viewModel) return null; // guard por seguridad

  const renderItem = ({ item }: { item: Persona }) => {
    const selected = viewModel.personaSeleccionada?.id === item.id;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          viewModel.personaSeleccionada = item;
        }}
        style={[styles.item, selected && styles.itemSelected]}
      >
        <Text style={[styles.itemText, selected && styles.itemTextSelected]}>
          {item.nombre} {item.apellidos}
        </Text>
        {/* Si quieres más info, añade aquí */}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>Listado de Personas</Text>
      </View>

      <View style={styles.selectedContainer}>
        <Text style={styles.selectedLabel}>Persona seleccionada</Text>
        {viewModel.personaSeleccionada ? (
          <View style={styles.selectedCard}>
            <Text style={styles.selectedName}>
              {viewModel.personaSeleccionada.nombre}{" "}
              {viewModel.personaSeleccionada.apellidos}
            </Text>
            {/* Si tienes más campos, muéstralos aquí */}
          </View>
        ) : (
          <Text style={styles.noneText}>Ninguna persona seleccionada</Text>
        )}
      </View>

      <FlatList
        data={viewModel.personasList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => (
          <View style={styles.emptyWrap}>
            <Text style={styles.textoVacio}>No hay personas registradas</Text>
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F3F7FB",
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#0B3D91",
    textAlign: "center",
  },
  selectedContainer: {
    alignItems: "center",
    marginBottom: 18,
  },
  selectedLabel: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 6,
  },
  selectedCard: {
    width: "100%",
    maxWidth: 680,
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
      },
      android: {
        elevation: 3,
      },
    }),
  },
  selectedName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  noneText: {
    fontSize: 16,
    color: "#9CA3AF",
  },
  listContent: {
    paddingBottom: 40,
    // Si la lista es corta, centrar los items verticalmente
    flexGrow: 1,
    justifyContent: "flex-start",
  },
  item: {
    width: "100%",
    maxWidth: 680,
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignSelf: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
      },
      android: {
        elevation: 2,
      },
    }),
  },
  itemSelected: {
    backgroundColor: "#E6F0FF",
    borderWidth: 1,
    borderColor: "#BBD7FF",
  },
  itemText: {
    fontSize: 16,
    color: "#111827",
  },
  itemTextSelected: {
    color: "#0B3D91",
    fontWeight: "600",
  },
  separator: {
    height: 12,
  },
  textoVacio: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#888",
  },
  emptyWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
  },
});

export default PeopleList;
