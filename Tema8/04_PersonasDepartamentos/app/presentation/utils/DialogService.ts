// /presentation/utils/DialogService.ts
import { Alert } from "react-native";

export class DialogService {
  /**
   * Muestra un diálogo de confirmación con "Sí" y "No"
   * @param titulo Título del diálogo
   * @param mensaje Mensaje a mostrar
   * @returns Promise<boolean> -> true si el usuario confirma
   */
  static confirmar(titulo: string, mensaje: string): Promise<boolean> {
    return new Promise((resolve) => {
      Alert.alert(
        titulo,
        mensaje,
        [
          { text: "Cancelar", onPress: () => resolve(false), style: "cancel" },
          { text: "Sí", onPress: () => resolve(true) },
        ],
        { cancelable: true },
      );
    });
  }

  /**
   * Muestra un mensaje informativo
   * @param titulo Título del mensaje
   * @param mensaje Mensaje a mostrar
   */
  static alerta(titulo: string, mensaje: string) {
    Alert.alert(titulo, mensaje, [{ text: "Aceptar" }], { cancelable: true });
  }
}
