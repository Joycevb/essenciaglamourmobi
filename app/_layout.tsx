import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Fontisto from '@expo/vector-icons/Fontisto';

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name= "loguin"
        options={{
          title: "Login",
          //tabBarIcon: ({ color, size }) => (
          //<FontAwesome name="sign-in" size={size} color={"#ffffffff"} />
          // ),
          headerStyle: {
            backgroundColor: "#630E0E"
          },
          tabBarStyle: {
            backgroundColor: "#630E0E"
          },
          headerShown: false
        }}
      />
      <Tabs.Screen 
        name= "consumidor"
        options={{
          title: "Consumidor",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={"#ffffffff"} />
          ),
          headerStyle: {
            backgroundColor: "#630E0E"
          },
          tabBarStyle: {
            backgroundColor: "#630E0E"
          },
          headerShown: false
        }}
      />  
      <Tabs.Screen
        name= "produto"
        options={{
          title: "Produto",
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="shopping-bag" size={size} color={"#ffffffff"} />
          ),
          headerStyle: {
            backgroundColor: "#630E0E"
          },
          tabBarStyle: {
            backgroundColor: "#630E0E"
          },
          headerShown: false
        }}
      />  
      <Tabs.Screen
        name= "cadastro"
        options={{
          title: "Cadastro",
          tabBarIcon: ({ color, size }) => (  
            <FontAwesome name="user-plus" size={size} color={"#ffffffff"} />
          ),
          headerStyle: {
            backgroundColor: "#630E0E"
          },
          tabBarStyle: {
            backgroundColor: "#630E0E"
          },
          headerShown: false
        }}
      />
    </Tabs>
  );

}
