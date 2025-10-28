import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  Alert, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// URL da API (você pode testar com dados falsos)
const API_URL = 'https://symmetrical-journey-v6r47q7ggrw73xj5v-3000.app.github.dev/api/produto';
const PLACEHOLDER_URL = 'https://via.placeholder.com/60x60?text=Sem+Foto';

// Dados falsos caso a API não funcione
const dadosFalsos = [
  { id: '1', nome: 'esssencial', preco: '50.00' },
  { id: '2', nome: 'lixxx', preco: '100.00' },
  { id: '3', nome: 'luna', preco: '150.00' },
];

export default function ListagemProdutos() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          console.error('Falha ao buscar produtos. Status:', response.status);
          setProdutos(dadosFalsos); 
          return;
        }

        const data = await response.json();
        setProdutos(data.length > 0 ? data : dadosFalsos);

      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        setProdutos(dadosFalsos);
      }
    }

    fetchProdutos();
  }, []);

  const editarProduto = (produto) => {
    Alert.alert("Editar Produto", `Você deseja editar este produto: ${produto.nome}`);
  };

  const deletarProduto = (produto) => {
    Alert.alert("Deletar Produto", `Você deseja excluir este produto: ${produto.nome}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image 
        source={{ uri: item.imagem_url ? item.imagem_url : PLACEHOLDER_URL }} 
        style={styles.imagemProduto} 
      />
      <View style={styles.infoProduto}>
        <Text style={styles.nomeProduto}>{item.nome}</Text>
        <Text style={styles.precoProduto}>R$ {item.preco}</Text>
      </View>
      <TouchableOpacity onPress={() => editarProduto(item)} style={styles.iconeAcao}>
        <Ionicons name="create-outline" size={22} color="#1b1919ff" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => deletarProduto(item)} style={styles.iconeAcao}>
        <Ionicons name="trash-outline" size={22} color="#161616ff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.topo}>
          <Ionicons name="bag-outline" size={50} color="#ffffff" style={styles.iconeTopo}/>
        </View>

        <Text style={styles.titulo}>LISTAGEM DE PRODUTOS</Text>

        <FlatList
          data={produtos}
          keyExtractor={item => String(item.id)} 
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20, paddingTop: 10 }}
          ListEmptyComponent={() => (
            <Text style={styles.avisoVazio}>Nenhum produto encontrado. Verifique a URL da API.</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, backgroundColor: '#fff' },
  topo: {
    height: 150,
    backgroundColor: '#630E0E',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconeTopo: { marginTop: 20 },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: '#0c0b0bff',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imagemProduto: { width: 60, height: 60, borderRadius: 5, marginRight: 15 },
  infoProduto: { flex: 1 },
  nomeProduto: { fontWeight: '700', fontSize: 16, color: '#333', marginBottom: 3 },
  precoProduto: { fontSize: 16, fontWeight: 'bold', color: '#0a0a0aff' },
  iconeAcao: { marginLeft: 15, padding: 5 },
  avisoVazio: { textAlign: 'center', marginTop: 50, color: '#888' }
});
