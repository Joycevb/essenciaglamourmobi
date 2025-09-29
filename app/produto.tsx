import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const produtos = [
  {
    id: '1',
    nome: 'Essencial Masculino 100 ml',
    preco: 194.90,
    imagem: 'https://i.pinimg.com/1200x/d6/19/3b/d6193bf8b65e85865963c4afcb91c048.jpg',
  },
  {
    id: '2',
    nome: 'Liz Sublime Desodorante Colônia 100ml',
    preco: 135.90,
    imagem: 'https://i.pinimg.com/1200x/aa/82/18/aa8218b4aa0f463f8251eacffbb28eb4.jpg',
  },
  {
    id: '3',
    nome: 'Dream Viagem Encantada Body Splash Desodorante Colônia 200ml',
    preco: 109.90,
    imagem: 'https://i.pinimg.com/736x/ec/30/43/ec30438e087f2564566c7b771f83d3ea.jpg',
  },
  {
    id: '4',
    nome: 'Egeo Choc Desodorante Colônia 90ml',
    preco: 154.90,
    imagem: 'https://i.pinimg.com/1200x/76/79/ee/7679eea4f8e025eb8e8718c1a943edfb.jpg',
  },
];

export default function ListagemProdutos() {
  const editarProduto = (produto) => {
    Alert.alert("Editar Produto", `Você clicou para editar: ${produto.nome}`);
  };

  const deletarProduto = (produto) => {
    Alert.alert("Deletar Produto", `Você clicou para deletar: ${produto.nome}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.imagemProduto} />
      <View style={styles.infoProduto}>
        <Text style={styles.nomeProduto}>{item.nome}</Text>
        <Text style={styles.precoProduto}>R$ {item.preco.toFixed(2)}</Text>
      </View>
      <TouchableOpacity onPress={() => editarProduto(item)} style={styles.iconeAcao}>
        <Ionicons name="pencil" size={20} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deletarProduto(item)} style={styles.iconeAcao}>
        <Ionicons name="trash" size={20} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
        <View style={styles.icones}>
          <View style={styles.topo}>
            <Ionicons name="bag-outline" size={50} color="#ffffffff" />
          </View>
        </View>
      <Text style={styles.titulo}>Listagem de produtos</Text>

      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  icones: {
    flex: 1,
    backgroundColor: "#834949ff",
    alignItems: "center",
    padding: 0,
    height: 400,
    marginBottom: 150,
  },
  topo: {
    height: 200,
    width: 450,
    backgroundColor: '#630E0E',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6e6e6',
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
  },
  imagemProduto: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  infoProduto: {
    flex: 1,
  },
  nomeProduto: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 5,
  },
  precoProduto: {
    fontSize: 14,
  },
  iconeAcao: {
    marginLeft: 10,
  },
});
