import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CadastroConsumidor() {
  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [telefone, setTelefone] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const confirmarSalvar = () => {
    Alert.alert(
      "Confirmar cadastro",
      "Deseja salvar este consumidor?",
      [
        {
          text: "Não",
          style: "No",
        },
        {
          text: "Sim",
          onPress: salvar,
        },
      ],
      { cancelable: false }
    );
  };

  const salvar = () => {
    
    console.log("Salvando dados:", { nome, apelido, telefone });

    
    setShowSuccess(true);

    
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      {}
      <View style={styles.header}>
        <TouchableOpacity style={styles.voltar}>
          <Ionicons name="arrow-back" size={28} color="#fff" />
        </TouchableOpacity>

        <View style={styles.iconesHeader}>
          <Ionicons name="create-outline" size={26} color="#fff" style={styles.icone} />
          <Ionicons name="trash-outline" size={26} color="#fff" style={styles.icone} />
        </View>
      </View>

      {}
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle-outline" size={90} color="#fff" />
        <Text style={styles.title}>Cadastrar consumidor</Text>
      </View>

      {}
      <View style={styles.inputContainer}>
        <Ionicons name="person-outline" size={24} color="black" style={styles.icon} />
        <View style={styles.textBox}>
          <Text>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o nome"
            value={nome}
            onChangeText={setNome}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="people-outline" size={24} color="black" style={styles.icon} />
        <View style={styles.textBox}>
          <Text>Apelido:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o apelido"
            value={apelido}
            onChangeText={setApelido}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={24} color="black" style={styles.icon} />
        <View style={styles.textBox}>
          <Text>Telefone:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite o telefone"
            keyboardType="phone-pad"
            value={telefone}
            onChangeText={setTelefone}
          />
        </View>
      </View>

      {}
      <TouchableOpacity style={styles.button} onPress={confirmarSalvar}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

      {}
      {showSuccess && (
        <View style={styles.toast}>
          <Ionicons name="checkmark-circle" size={24} color="green" />
          <Text style={styles.toastText}>Cadastrado com sucesso!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#5B0D0D",
    height: 150,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 15,
    position: "relative",
  },
  voltar: {
    position: "absolute",
    left: 15,
    top: 40,
  },
  iconesHeader: {
    position: "absolute",
    right: 20,
    top: 40,
    flexDirection: "row",
  },
  icone: {
    marginLeft: 15,
  },
  profileContainer: {
    marginTop: -70,
    alignItems: "center",
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 8,
  },
  icon: {
    marginRight: 10,
  },
  textBox: {
    flex: 1,
  },
  input: {
    fontSize: 16,
    paddingVertical: 4,
  },
  button: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 40,
    marginHorizontal: 100,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  toast: {
    position: "absolute",
    bottom: 40,
    left: 30,
    right: 30,
    backgroundColor: "#e0ffe0",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  toastText: {
    marginLeft: 10,
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },
});
