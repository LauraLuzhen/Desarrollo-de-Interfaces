import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface LoadingSpinnerProps {
  message?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Cargando...",
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.spinnerWrapper}>
        <ActivityIndicator size="large" color="#A3CEF1" />
      </View>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF8F0",
  },
  spinnerWrapper: {
    backgroundColor: "#FBE4E4",
    padding: 20,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  message: {
    marginTop: 16,
    fontSize: 16,
    color: "#555",
    fontWeight: "600",
  },
});
