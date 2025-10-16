import { Text, StyleSheet, View, FlatList } from "react-native";
import React, { useState } from "react";



const usuarios = [
  { id: 1, nombre: 'Lucía', apellido: 'García'},
  { id: 2, nombre: 'Lucía', apellido: 'García'},
  { id: 3, nombre: 'Lucía', apellido: 'García'},
  { id: 4, nombre: 'Lucía', apellido: 'García'},
  { id: 5, nombre: 'Lucía', apellido: 'García'}
];

export default function Index() {
  return (
    <FlatList
    data = {usuarios}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({item}) => (
      <View style = {styles.item}>
        <Text style = {styles.text} >{item.nombre} {item.apellido}</Text>
      </View>
    )}
    />
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3ff',
    alignItems: 'center',
  },
  text: {
    fontSize: 17
  }
});


