import { createDrawerNavigator } from "@react-navigation/drawer";
import VistaPrincipal from "../views/HomeView";
import ListadoDepartamentos from "../views/departamentos/index";
import ListadoPersonas from "../views/personas/index";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFD9E8", // pastel rosa claro
        },
        headerTintColor: "#333", // texto del header
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
        drawerStyle: {
          backgroundColor: "#FFF0F5", // fondo pastel del drawer
          width: 250,
        },
        drawerActiveTintColor: "#FF6B81", // color activo rosa
        drawerInactiveTintColor: "#555", // color inactivo gris suave
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: "600",
        },
      }}
    >
      <Drawer.Screen name="Home" component={VistaPrincipal} />
      <Drawer.Screen name="People" component={ListadoPersonas} />
      <Drawer.Screen name="Departaments" component={ListadoDepartamentos} />
    </Drawer.Navigator>
  );
}
