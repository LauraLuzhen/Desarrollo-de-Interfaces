// Búsqueda
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Este componente solo se enfoca en el contenido que va debajo del Header.
const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>
        Contenido de la Página de Búsqueda
      </Text>
      <Text>
        El Header con el título aparece automáticamente.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchScreen;