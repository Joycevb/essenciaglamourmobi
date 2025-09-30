import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Modal,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const dadosIniciais = [
  {
    id: 1,
    nome: "Rosa da Silva",
    apelido: "Rosa das Flores",
    telefone: "83 99877-6655",
  },
  {
    id: 2,
    nome: "Elisângela",
    apelido: "Danda",
    telefone: "83 99807-6144",
  },
  {
    id: 3,
    nome: "Joyce",
    apelido: "Istelinha",
    telefone: "83 98700-7878",
  },
  {
    id: 4,
    nome: "Camila",
    apelido: "Mica da Padaria",
    telefone: "83 98089-0990",
  },
  {
    id: 5,
    nome: "Gabriel",
    apelido: "Biel",
    telefone: "83 98779-0101",
  },
  {
    id: 6,
    nome: "Ana Clara",
    apelido: "Aninha",
    telefone: "83 99666-1234",
  }
];

function ItemConsumidor({ consumidor, onEdit, onDelete }) {
  return (
    <View style={styles.caixa}>
      <Ionicons
        name="person-circle-outline"
        size={50}
        color="black"
        style={{ marginRight: 10 }}
      />

      <View style={{ flex: 1 }}>
        <Text style={styles.apelido}>Apelido: {consumidor.apelido}</Text>
        <Text>Nome: {consumidor.nome}</Text>
        <Text>Telefone: {consumidor.telefone}</Text>
      </View>

      {/* Ícones editar e excluir embaixo */}
      <View style={styles.botoesBaixo}>
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

  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [telefone, setTelefone] = useState("");

  const abrirEdicao = (consumidor) => {
    setEditConsumidor(consumidor);
    setNome(consumidor.nome);
    setApelido(consumidor.apelido);
    setTelefone(consumidor.telefone);
    setModalVisible(true);
  };

  const salvarEdicao = () => {
    if (!nome.trim() || !apelido.trim() || !telefone.trim()) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const novosConsumidores = consumidores.map((c) => {
      if (c.id === editConsumidor.id) {
        return { ...c, nome: nome.trim(), apelido: apelido.trim(), telefone: telefone.trim() };
      }
      return c;
    });

    setConsumidores(novosConsumidores);
    setModalVisible(false);
    setEditConsumidor(null);
  };

  const excluirConsumidor = (consumidor) => {
    Alert.alert(
      "Confirmar exclusão",
      `Deseja excluir ${consumidor.nome}?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            setConsumidores((prev) => prev.filter((c) => c.id !== consumidor.id));
          },
        },
      ],
      { cancelable: true }
    );
  };

  const adicionarConsumidor = () => {
    Alert.alert("Adicionar novo consumidor", "Funcionalidade não implementada ainda");
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

        <TextInput
          style={styles.pesquisa}
          placeholder="Pesquisar"
          placeholderTextColor="#555"
        />
      </View>

      <View style={styles.headerLista}>
        <Text style={styles.titulo}>ʟɪꜱᴛᴀɢᴇᴍ ᴅᴇ ᴄᴏɴꜱᴜᴍɪᴅᴏʀᴇꜱ:</Text>
        <TouchableOpacity onPress={adicionarConsumidor}>
          <Ionicons name="person-add-outline" size={26} color="black" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={consumidores}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemConsumidor
            consumidor={item}
            onEdit={abrirEdicao}
            onDelete={excluirConsumidor}
          />
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
        }}
      >
        <View style={styles.modalFundo}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitulo}>Editar consumidor</Text>

            <Text>Nome:</Text>
            <TextInput
              style={styles.modalInput}
              value={nome}
              onChangeText={setNome}
              placeholder="Nome"
            />

            <Text>Apelido:</Text>
            <TextInput
              style={styles.modalInput}
              value={apelido}
              onChangeText={setApelido}
              placeholder="Apelido"
            />

            <Text>Telefone:</Text>
            <TextInput
              style={styles.modalInput}
              value={telefone}
              onChangeText={setTelefone}
              placeholder="Telefone"
              keyboardType="phone-pad"
            />

            <View style={styles.modalBotoes}>
              <Button
                title="Cancelar"
                onPress={() => {
                  setModalVisible(false);
                  setEditConsumidor(null);
                }}
              />
              <Button title="Salvar" onPress={salvarEdicao} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  header: {
    backgroundColor: "#630E0E",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 15,
  },
  saudacao: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  fotoPerfil: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  ola: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  pesquisa: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  headerLista: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  caixa: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e6e6e6",
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 2,
    marginHorizontal: 20,
    flexWrap: "wrap", 
    position: "relative",
  },
  apelido: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 3,
  },
  botoesBaixo: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 10,
    paddingRight: 10,
  },
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
    marginBottom: 15,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 8,
    marginBottom: 15,
  },
  modalBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
