import React from "react";
import { FlatList, StyleSheet, Text, View, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { homeVM } from "../../core/container";

export default function Home() {
  const personas = homeVM.personas;

  const renderItem = ({ item }: { item: typeof personas[0] }) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.nombre}>{item.nombre}</Text>
        <Text style={styles.apellidos}>{item.apellidos}</Text>
      </View>
      <Switch value={item.mayorDeEdad} disabled={true} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Listado de Personas</Text>
      <FlatList
        data={personas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => <Text>No hay personas disponibles</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
  },
  apellidos: {
    fontSize: 16,
    color: "#555",
  },
  separator: {
    height: 10,
  },
});
