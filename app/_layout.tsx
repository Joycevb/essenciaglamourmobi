import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarIndicatorStyle: { height: 0 },
        tabBarStyle: {
          backgroundColor: "#630E0E", 
        },
      }}
    >
      <Tabs.Screen
        name="loguin"
        options={{
          tabBarLabel: () => null,
          tabBarStyle: { display: "none" }, 
          headerShown: false,
        }}
      />
      <Tabs.Screen 
        name="consumidor"
        options={{
          title: "Consumidor",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={"#ffffffff"} />
          ),
          headerShown: false
        }}
      />  
      <Tabs.Screen
        name="produto"
        options={{
          title: "Produto",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="shopping-bag" size={size} color={"#ffffffff"} />
          ),
          headerShown: false
        }}
      />  
      <Tabs.Screen
        name="cadastro"
        options={{
          title: "Cadastro",
          tabBarIcon: ({ color, size }) => (  
            <FontAwesome name="user-plus" size={size} color={"#ffffffff"} />
          ),
          headerShown: false
        }}
      />
    </Tabs>
  );
}
