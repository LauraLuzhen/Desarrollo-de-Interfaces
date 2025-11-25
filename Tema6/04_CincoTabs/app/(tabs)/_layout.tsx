import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
       <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#121212",
            borderTopColor: "#222",
            height: 60,
          }
        }}
       >
      {/* Pestaña para INICIO */}
      <Tabs.Screen
        name="index" 
        options={{
          title: 'Inicio', 
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={28} />
          )
        }}
      />

      {/* Pestaña para PROFILE */}
      <Tabs.Screen
        name="(profile)" 
        options={{  
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={28} />
          ),
        headerShown: true,
        }}
      />

    {/* Pestaña para CONFIGURACIÓN */}
      <Tabs.Screen
        name="configuration" 
        options={{
          title: 'Configuración',
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={28} />
          )
        }}
      />
    </Tabs>
    )
}

