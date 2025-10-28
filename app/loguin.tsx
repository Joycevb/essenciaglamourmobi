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
} from "react-native";

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

        <TouchableOpacity>
          <Text style={styles.esqueceuSenha}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        {/* BOTÃO DE LOGIN SEM NENHUM ÍCONE */}
        <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
          <Text style={styles.botaoTexto}>Login</Text>
        </TouchableOpacity>
      </View>

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
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    width: "100%",
    alignItems: "center",
  },
  label: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#d6d6d6",
    width: "100%",
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
  },
  esqueceuSenha: {
    alignSelf: "flex-start",
    marginTop: 10,
    marginBottom: 15,
    color: "#000",
  },
  botao: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
  },
  carregandoContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  carregandoTexto: {
    color: "#fff",
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
});
