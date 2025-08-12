import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name= "consumidor"
        options={{
          title: "Consumidor",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />  
      <Tabs.Screen 
        name= "produto"
        options={{
          title: "Produto",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="shopping-bag" size={size} color={color} />
          ),
        }}
      />  
    </Tabs>
  );

}
