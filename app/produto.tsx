import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity, 
  Alert, 
  SafeAreaView,
  ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const API_URL = 'https://symmetrical-journey-v6r47q7ggrw73xj5v-3000.app.github.dev/api/produto';
const PLACEHOLDER_URL = 'https://via.placeholder.com/60x60?text=Sem+Foto';

const dadosFalsos = [
  { id: '1', nome: 'Essencial Atrai Masculino 100 ml', preco: '194.90', imagem_url: 'https://m.media-amazon.com/images/I/61V64D+cDHL._AC_SX679_.jpg' },
  { id: '2', nome: 'Luna', preco: '150.00', imagem_url: 'https://m.media-amazon.com/images/I/71zDgK4ZrVL._AC_SX679_.jpg' },
  { id: '3', nome: 'Floratta', preco: '120.00', imagem_url: 'https://m.media-amazon.com/images/I/61xDRUO3FIL._AC_SX679_.jpg' },
];

export default function ListagemProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [mostrarTelaAdicionar, setMostrarTelaAdicionar] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  const [marcaSelecionada, setMarcaSelecionada] = useState("");

  const categorias = ["Perfumaria", "Infantil", "Maquiagem", "Cabelos"];
  const marcas = ["Natura", "Avon", "O ‘Boticário", "Jequiti"];

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          setProdutos(dadosFalsos);
          return;
        }
        const data = await response.json();
        setProdutos(data.length > 0 ? data : dadosFalsos);
      } catch (error) {
        setProdutos(dadosFalsos);
      }
    };
    fetchProdutos();
  }, []);

  const editarProduto = (produto) => {
    Alert.alert("Editar Produto", `Você deseja editar este produto: ${produto.nome}`);
  };

  const deletarProduto = (produto) => {
    Alert.alert("Deletar Produto", `Você deseja excluir este produto: ${produto.nome}`);
  };

  const adicionarProduto = () => {
    Alert.alert("Produto adicionado!", "Produto cadastrado com sucesso.");
    setMostrarTelaAdicionar(false);
  };

  
  const abrirDetalhesProduto = (produto) => {
    setProdutoSelecionado(produto);
    setMostrarTelaAdicionar(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => abrirDetalhesProduto(item)}>
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
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {!mostrarTelaAdicionar ? (
        
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
              <Text style={styles.avisoVazio}>Nenhum produto encontrado.</Text>
            )}
          />
        </View>
      ) : (
       
        <ScrollView style={styles.container}>
          <View style={styles.topoAdd}>
            <Ionicons name="add" size={50} color="#fff" />
          </View>

          <Text style={styles.textoTopo}>Adicionar produto</Text>

          {produtoSelecionado && (
            <View style={styles.cardProduto}>
              <Image
                source={{ uri: produtoSelecionado.imagem_url || PLACEHOLDER_URL }}
                style={styles.imagemProdutoGrande}
              />
              <View style={styles.infoProduto}>
                <Text style={styles.nomeProduto}>{produtoSelecionado.nome}</Text>
                <Text style={styles.precoProduto}>R$ {produtoSelecionado.preco}</Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="create-outline" size={22} color="#000" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="trash-outline" size={22} color="#000" />
              </TouchableOpacity>
            </View>
          )}

          <Text style={styles.tituloSecao}>Selecione a categoria</Text>
          {categorias.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={styles.opcao}
              onPress={() => setCategoriaSelecionada(cat)}
            >
              <Ionicons
                name={
                  categoriaSelecionada === cat
                    ? "radio-button-on-outline"
                    : "radio-button-off-outline"
                }
                size={20}
                color="#000"
              />
              <Text style={styles.textoOpcao}>{cat}</Text>
            </TouchableOpacity>
          ))}

          <Text style={styles.tituloSecao}>Selecione a marca</Text>
          {marcas.map((marca) => (
            <TouchableOpacity
              key={marca}
              style={styles.opcao}
              onPress={() => setMarcaSelecionada(marca)}
            >
              <Ionicons
                name={
                  marcaSelecionada === marca
                    ? "radio-button-on-outline"
                    : "radio-button-off-outline"
                }
                size={20}
                color="#000"
              />
              <Text style={styles.textoOpcao}>{marca}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.botaoAdicionarVerde} onPress={adicionarProduto}>
            <Text style={styles.textoBotaoVerde}>Adicionar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setMostrarTelaAdicionar(false)}>
            <Text style={styles.textoVoltar}>⬅ Voltar</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
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
  },
  imagemProduto: { width: 60, height: 60, borderRadius: 5, marginRight: 15 },
  infoProduto: { flex: 1 },
  nomeProduto: { fontWeight: '700', fontSize: 16, color: '#333', marginBottom: 3 },
  precoProduto: { fontSize: 16, fontWeight: 'bold', color: '#0a0a0aff' },
  iconeAcao: { marginLeft: 15, padding: 5 },
  avisoVazio: { textAlign: 'center', marginTop: 50, color: '#888' },

  
  topoAdd: {
    backgroundColor: "#630E0E",
    height: 200,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  textoTopo: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
    color: "#333",
  },
  cardProduto: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
    margin: 20,
    borderRadius: 8,
    padding: 10,
  },
  imagemProdutoGrande: { width: 70, height: 90, borderRadius: 5, marginRight: 10 },
  tituloSecao: {
    marginHorizontal: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  opcao: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 8,
    marginBottom: 5,
  },
  textoOpcao: { marginLeft: 8, color: "#000" },
  botaoAdicionarVerde: {
    backgroundColor: "#26C12F",
    margin: 20,
    borderRadius: 50,
    alignItems: "center",
    padding: 12,
  },
  textoBotaoVerde: { color: "#fff", fontWeight: "bold" },
  textoVoltar: {
    textAlign: "center",
    color: "#630E0E",
    marginBottom: 30,
    fontWeight: "bold",
  },
});
