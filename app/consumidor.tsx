import React, { useState, useMemo, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Button,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const dadosIniciais = [
  { id: 1, nome: "Rosa da Silva", apelido: "Rosa das Flores", telefone: "83 99877-6655" },
  { id: 2, nome: "Elisângela", apelido: "Danda", telefone: "83 99807-6144" },
  { id: 3, nome: "Joyce", apelido: "Istelinha", telefone: "83 98700-7878" },
  { id: 4, nome: "Camila", apelido: "Mica da Padaria", telefone: "83 98089-0990" },
  { id: 5, nome: "Gabriel", apelido: "Biel", telefone: "83 98779-0101" },
  { id: 6, nome: "Ana Clara", apelido: "Aninha", telefone: "83 99666-1234" },
  { id: 7, nome: "Lucas", apelido: "Luquinhas", telefone: "83 99555-5678" },
  { id: 8, nome: "Mariana", apelido: "Mari", telefone: "83 99444-9101" },
  { id: 9, nome: "Felipe", apelido: "Lipe", telefone: "83 99333-1122" },
  { id: 10, nome: "Juliana", apelido: "Ju", telefone: "83 99222-3344" },
];

function ItemConsumidor({ consumidor, onEdit, onDelete }) {
  return (
    <View style={styles.caixa}>
      <Ionicons name="person-circle-outline" size={50} color="black" style={{ marginRight: 10 }} />

      <View style={{ flex: 1 }}>
        <Text style={styles.apelido}>Apelido: {consumidor.apelido}</Text>
        <Text>Nome: {consumidor.nome}</Text>
        <Text>Telefone: {consumidor.telefone}</Text>
      </View>

      <View style={styles.botoesContainer}>
        <TouchableOpacity onPress={() => onEdit(consumidor)} style={{ marginRight: 15 }}>
          <Ionicons name="create-outline" size={20} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onDelete(consumidor)}>
          <Ionicons name="trash-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function Consumidor() {
  const [consumidores, setConsumidores] = useState(dadosIniciais);
  const [modalVisible, setModalVisible] = useState(false);
  const [editConsumidor, setEditConsumidor] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [telefone, setTelefone] = useState("");

  
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const filteredConsumidores = useMemo(() => {
    if (!searchText.trim()) return consumidores;
    const lower = searchText.toLowerCase().trim();
    return consumidores.filter(
      (c) =>
        c.nome.toLowerCase().includes(lower) ||
        c.apelido.toLowerCase().includes(lower)
    );
  }, [consumidores, searchText]);

  const abrirEdicao = (consumidor) => {
    setIsAdding(false);
    setEditConsumidor(consumidor);
    setNome(consumidor.nome);
    setApelido(consumidor.apelido);
    setTelefone(consumidor.telefone);
    setModalVisible(true);
  };

  const adicionarConsumidor = () => {
    setIsAdding(true);
    setEditConsumidor(null);
    setNome("");
    setApelido("");
    setTelefone("");
    setModalVisible(true);
  };

  const mostrarAlerta = (mensagem) => {
    setAlertMessage(mensagem);
    setShowAlert(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => setShowAlert(false));
    }, 3000);
  };

  const salvarConsumidor = () => {
    if (!nome.trim() || !apelido.trim() || !telefone.trim()) {
      mostrarAlerta("Preencha todos os campos!");
      return;
    }

    if (isAdding) {
      const novoConsumidor = {
        id: consumidores.length
          ? Math.max(...consumidores.map((c) => c.id)) + 1
          : 1,
        nome: nome.trim(),
        apelido: apelido.trim(),
        telefone: telefone.trim(),
      };
      setConsumidores((prev) => [novoConsumidor, ...prev]);
      mostrarAlerta("✅ Cadastrado com sucesso!");
    } else {
      const novosConsumidores = consumidores.map((c) =>
        c.id === editConsumidor.id
          ? { ...c, nome: nome.trim(), apelido: apelido.trim(), telefone: telefone.trim() }
          : c
      );
      setConsumidores(novosConsumidores);
      mostrarAlerta("✅ Atualizado com sucesso!");
    }

    setModalVisible(false);
    setEditConsumidor(null);
    setIsAdding(false);
  };

  const excluirConsumidor = (consumidor) => {
    setConsumidores((prev) => prev.filter((c) => c.id !== consumidor.id));
    mostrarAlerta(`🗑️ ${consumidor.nome} foi excluído.`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.saudacao}>
          <Image
            source={{
              uri: "https://i.pinimg.com/1200x/1c/a7/94/1ca7949fba26b87017b84307ce70ad20.jpg",
            }}
            style={styles.fotoPerfil}
          />
          <Text style={styles.ola}>Olá, Elineide!</Text>
        </View>

        <View style={styles.caixaPesquisa}>
          <TextInput
            style={styles.inputPesquisa}
            placeholder="Pesquisar por nome ou apelido"
            placeholderTextColor="#555"
            value={searchText}
            onChangeText={setSearchText}
          />
          <Ionicons name="search-outline" size={20} color="#555" style={styles.iconePesquisa} />
        </View>
      </View>

      <View style={styles.headerLista}>
        <Text style={styles.titulo}>𝐋𝐈𝐒𝐓𝐀𝐆𝐄𝐌 𝐃𝐄 𝐂𝐎𝐍𝐒𝐔𝐌𝐈𝐃𝐎𝐑 :</Text>
        <TouchableOpacity onPress={adicionarConsumidor}>
          <Ionicons name="person-add-outline" size={26} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredConsumidores}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ItemConsumidor consumidor={item} onEdit={abrirEdicao} onDelete={excluirConsumidor} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.nenhumResultado}>Nenhum consumidor encontrado.</Text>
        )}
      />

      {}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          setEditConsumidor(null);
          setIsAdding(false);
        }}
      >
        <View style={styles.modalFundo}>
          <View style={styles.modalContainer}>
            <Ionicons
              name="person-circle-outline"
              size={70}
              color="#630E0E"
              style={{ alignSelf: "center", marginBottom: 10 }}
            />
            <Text style={styles.modalTitulo}>
              {isAdding ? "Cadastrar consumidor" : "Editar consumidor"}
            </Text>

            <View style={styles.inputGroup}>
              <Ionicons name="person-outline" size={20} color="black" />
              <Text style={{ marginLeft: 8 }}>Nome:</Text>
            </View>
            <TextInput
              style={styles.modalInput}
              value={nome}
              onChangeText={setNome}
              placeholder="Nome completo"
            />

            <View style={styles.inputGroup}>
              <Ionicons name="people-outline" size={20} color="black" />
              <Text style={{ marginLeft: 8 }}>Apelido:</Text>
            </View>
            <TextInput
              style={styles.modalInput}
              value={apelido}
              onChangeText={setApelido}
              placeholder="Apelido"
            />

            <View style={styles.inputGroup}>
              <Ionicons name="call-outline" size={20} color="black" />
              <Text style={{ marginLeft: 8 }}>Telefone:</Text>
            </View>
            <TextInput
              style={styles.modalInput}
              value={telefone}
              onChangeText={setTelefone}
              placeholder="(DD) 9xxxx-xxxx"
              keyboardType="phone-pad"
            />

            <TouchableOpacity style={styles.botaoSalvar} onPress={salvarConsumidor}>
              <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>

            {}
            {showAlert && (
              <Animated.View style={[styles.alertContainer, { opacity: fadeAnim }]}>
                <Ionicons name="checkmark-circle" size={20} color="#0a7a0a" />
                <Text style={styles.alertText}>{alertMessage}</Text>
              </Animated.View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#ffff" },
  header: {
    backgroundColor: "#630E0E",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 15,
  },
  saudacao: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  fotoPerfil: { width: 40, height: 40, borderRadius: 20, marginRight: 8 },
  ola: { fontSize: 18, fontWeight: "bold", color: "white" },
  caixaPesquisa: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  inputPesquisa: { flex: 1, paddingVertical: 8 },
  iconePesquisa: { marginLeft: 10 },
  headerLista: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
    paddingHorizontal: 20,
  },
  titulo: { fontSize: 16, fontWeight: "bold" },
  caixa: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e6e6e6",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
    marginHorizontal: 20,
  },
  apelido: { fontSize: 16, fontWeight: "bold", marginBottom: 3 },
  botoesContainer: { flexDirection: "row", marginLeft: "auto", alignItems: "center" },
  nenhumResultado: { textAlign: "center", marginTop: 20, color: "#888" },
  modalFundo: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#630E0E",
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  modalInput: {
    borderBottomWidth: 1,
    borderColor: "#aaa",
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  botaoSalvar: {
    backgroundColor: "#00c200",
    borderRadius: 25,
    paddingVertical: 10,
    marginTop: 15,
    alignItems: "center",
  },
  textoBotao: { color: "white", fontWeight: "bold", fontSize: 16 },
  alertContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a7f0a2",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  alertText: {
    color: "#0a7a0a",
    fontWeight: "bold",
    marginLeft: 8,
  },
});
