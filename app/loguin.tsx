import { Link } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import do ícone

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  const fazerLogin = () => {
    setCarregando(true);
    setTimeout(() => {
      setCarregando(false);
      alert("Login realizado!");
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Título no topo */}
      <Text style={styles.titulo}>Login</Text>

      {/* Ícone de usuário acima do card */}
      <View style={styles.iconeUsuarioContainer}>
        <Ionicons name="person-circle-outline" size={90} color="#fff" />
      </View>

      {/* Card principal */}
      <View style={styles.card}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
          <Link href="/consumidor" style={styles.botaoTexto}>
            Login
          </Link>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.esqueceuSenha}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        {/* Ícones sociais */}
        <View style={styles.iconesContainer}>
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/0/09/IOS_Google_icon.png",
            }}
            style={styles.icone}
          />
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png",
            }}
            style={styles.icone}
          />
        </View>
      </View>

      {/* Indicador de carregamento */}
      {carregando && (
        <View style={styles.carregandoContainer}>
          <Text style={styles.carregandoTexto}>Carregando...</Text>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#630E0E",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  iconeUsuarioContainer: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 40,
    padding: 25,
    width: "90%",
    alignItems: "center",
  },
  label: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    backgroundColor: "#d9d9d9",
    width: "100%",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 15,
  },
  botao: {
    backgroundColor: "#630E0E",
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 20,
    width: "100%",
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  esqueceuSenha: {
    color: "#000",
    marginTop: 15,
    marginBottom: 10,
    alignSelf: "center",
  },
  iconesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 25,
  },
  icone: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  carregandoContainer: {
    marginTop: 25,
    alignItems: "center",
  },
  carregandoTexto: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
