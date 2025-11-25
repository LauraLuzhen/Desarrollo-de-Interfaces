import { Tabs, withLayoutContext } from "expo-router";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const {Navigator} = createMaterialTopTabNavigator();
const MaterialTopTabs = withLayoutContext(Navigator)

export default function TabsLayout(){
return(
    <MaterialTopTabs
    screenOptions={{
      tabBarStyle: {
        backgroundColor: "#121212",
        borderTopColor: "#222",
        height: 60,
        },
      tabBarActiveTintColor: '#fff',
      tabBarInactiveTintColor: '#888',
    }}
    >
      {/* Pestaña para GALERÍA */}
        <MaterialTopTabs.Screen
            name="gallery"
            options={{
              title: 'Galería',
            }}
        />  
        {/* Pestaña para POSTS */}
        <MaterialTopTabs.Screen
            name="posts"
            options={{
              title: 'Posts',
            }}
        /> 
    </MaterialTopTabs>
)
}