import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import { Link, useRouter } from "expo-router";
import FormularioLogin from "./components/FormularioLogin";
import BotonRedondeado from "./components/BotonRedondeado";

export default function Login() {
  const router = useRouter();

  return (
    <ImageBackground source={require("../assets/images/fondo.jpg")} style={styles.fondo}>
      <View style={styles.contenido}>
        <Image source={require("../assets/images/logo.png")} style={styles.logo} />
        <FormularioLogin />
        <BotonRedondeado texto="Entrar" onPress={() => router.push("./home")} />
        <Link href="./register" style={styles.link}>
          ¿No tienes cuenta? <Text style={styles.linkTexto}>Regístrate</Text>
        </Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  contenido: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
  },
  linkTexto: {
    color: "#f57c00",
    fontWeight: "bold",
  },
});
