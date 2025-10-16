import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const usuarios = [
  { id: '1', nombre: 'Alvaro', apellido: 'Cabrera' },
  { id: '2', nombre: 'Isabella', apellido: 'Molina' },
  { id: '3', nombre: 'Santiago', apellido: 'Vega' },
  { id: '4', nombre: 'Emilia', apellido: 'Rojas' },
  { id: '5', nombre: 'Hugo', apellido: 'Torres' },
  { id: '6', nombre: 'Camila', apellido: 'Figueroa' },
  { id: '7', nombre: 'Mateo', apellido: 'Silva' },
  { id: '8', nombre: 'Valeria', apellido: 'Dominguez' },
  { id: '9', nombre: 'Bruno', apellido: 'Cortes' },
  { id: '10', nombre: 'Antonella', apellido: 'Herrera' }
]

export default function Index() {
  return (
    <FlatList
    data={usuarios}
    keyExtractor= {(item) => item.id.toString()}
    renderItem = {({ item }) => (
      <View >
       <Text>{item.nombre} {item. apellido}</Text>
     </View>
    )}
    />
  )
}