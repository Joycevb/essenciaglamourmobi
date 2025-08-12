import { Text, View, StyleSheet, FlatList } from "react-native";

let consumidores = [
  {
    id: 1,
    nome: "Rosa da Silva",
    apelido: "Rosa das Flores",
    telefone: "83 99877-6655"
  },
  {
    id: 2,
    nome: "Elisângela",
    apelido: "Danda",
    telefone: "83 99877-6644"
  },
]

export default function Consumidor() {
  
  function Consumidor({consumidor}) {
    return (
      <View style={style.caixa}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }} >Apelido: {consumidor.apelido}</Text>
        <Text>Nome: {consumidor.nome}</Text>
        <Text>Telefone: {consumidor.telefone}</Text>
      </View>
    );
  }
  
  return (
    <FlatList
      data={consumidores}
      renderItem={ ({item}) => <Consumidor consumidor={item}/>}
      ItemSeparatorComponent={ () => <View style={{height: 20}} /> }
    />
  );
}
const style = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent:  "center",
    alignItems: "center",
  },

  caixa: {
    backgroundColor: '#D9D9D9',
    width: '90%',
    alignSelf: 'center',
    padding: 15
  }

})

