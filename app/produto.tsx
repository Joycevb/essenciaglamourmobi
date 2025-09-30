import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ListagemProdutos() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      const response = await fetch('https://symmetrical-journey-v6r47q7ggrw73xj5v-3000.app.github.dev/api/produto');
      const data = await response.json();
      setProdutos(data);
    }

    fetchProdutos();
  }, [])


  const editarProduto = (produto) => {
    Alert.alert("Editar Produto", `Você clicou para editar: ${produto.nome}`);
  };

  const deletarProduto = (produto) => {
    Alert.alert("Deletar Produto", `Você clicou para deletar: ${produto.nome}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem_url }} style={styles.imagemProduto} />
      <View style={styles.infoProduto}>
        <Text style={styles.nomeProduto}>{item.nome}</Text>
        <Text style={styles.precoProduto}>R$ {item.preco}</Text>
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
