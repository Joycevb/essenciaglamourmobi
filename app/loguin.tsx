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
      {}
      <View style={styles.tituloContainer}>
        <Text style={styles.titulo}>Loguin</Text>
      </View>

      {}
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Logo_placeholder.png", // coloque aqui a sua logo
        }}
        style={styles.logo}
        resizeMode="contain"
      />

      {}
      <View style={styles.card}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="elineide@glamour.com.br"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        {}
        <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
          <Link href="/consumidor" style={styles.botaoTexto}>
            Loguin
          </Link>
        </TouchableOpacity>

        {}
        <View style={styles.iconesContainer}>
          <Image
            source={{
              uri: "https://play-lh.googleusercontent.com/NN8G4Xc03GSv2_Tu-icuoeOwSo1xoZ4ouzUl24fVlwm5OeIAo7gV0zS1dVRWgCay-BU", 
            }}
            style={styles.icone}
          />
          <Image
            source={{
              uri: "https://static.xx.fbcdn.net/rsrc.php/v4/yK/r/BHkEd6znUYJ.png", 
            }}
            style={styles.icone}
          />
        </View>
      </View>

      {}
      <TouchableOpacity>
        <Text style={styles.esqueceuSenha}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      {}
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
    backgroundColor: "#5B0A0A", 
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  tituloContainer: {
    position: "absolute",
    top: 50,
    left: 25,
  },
  titulo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    width: 130,
    height: 80,
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 25,
    width: "90%",
    alignItems: "center",
    elevation: 5,
  },
  label: {
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    fontSize: 15,
  },
  input: {
    backgroundColor: "#f2f2f2",
    width: "100%",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 15,
  },
  botao: {
    backgroundColor: "#222",
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
  iconesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    gap: 25,
  },
  icone: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },
  esqueceuSenha: {
    color: "#fff",
    marginTop: 15,
    fontWeight: "bold",
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
