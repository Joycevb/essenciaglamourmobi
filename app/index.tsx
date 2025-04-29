import { Text, View, StyleSheet } from "react-native";

const usuarios = [
  {
    id:1,
    nome: "Joyce",
    cargo:"Nutri"
  },
  {
    id: 2,
    nome:"Gabi",
    cargo:"Estudante"
  }
];

export default function Index() {
  return (
    <View
      style={style.container}
    >
      {
        usuarios.map( intem =>(<Text>{intem.nome}</Text>))
      }
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:  "center",
    alignItems: "center",
  }
})

