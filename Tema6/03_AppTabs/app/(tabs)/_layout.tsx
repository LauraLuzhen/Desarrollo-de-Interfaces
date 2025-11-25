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
      {/* Pestaña para HOME */}
      <Tabs.Screen
        name="index" 
        options={{
          title: 'Home', 
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={28} />
          )
        }}
      />

      {/* Pestaña para SEARCH */}
      <Tabs.Screen
        name="search" 
        options={{
          title: 'Búsqueda',
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" color={color} size={28} />
          )
        }}
      />

      {/* Pestaña para PROFILE */}
      <Tabs.Screen
        name="profile" 
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" color={color} size={28} />
          )
        }}
      />
    </Tabs>
    )
}

