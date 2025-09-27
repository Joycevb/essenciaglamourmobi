import { Text, View, StyleSheet, FlatList, TextInput, TouchableOpacity, Alert, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

let consumidores = [
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
];

function ItemConsumidor({ consumidor }) {
return (
<View style={styles.caixa}>
{}
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
  <Ionicons name="checkmark-circle" size={22} color="green" />  
</View>

);
}

export default function Consumidor() {
const adicionarConsumidor = () => {
Alert.alert(
"Alert",
"Adicionar novo consumidor",
[{ text: "OK", onPress: () => console.log("OK Pressed") }],
{ cancelable: true }
);
};

return (
<View style={styles.container}>
{}
<View style={styles.header}>
<View style={styles.saudacao}>
<Image
source={{ uri: 'https://i.pinimg.com/1200x/1c/a7/94/1ca7949fba26b87017b84307ce70ad20.jpg' }}
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


  {}  
  <View style={styles.headerLista}>  
    <Text style={styles.titulo}>ʟɪꜱᴛᴀɢᴇᴍ ᴅᴇ ᴄᴏɴꜱᴜᴍɪᴅᴏʀᴇꜱ:</Text>  
    <TouchableOpacity onPress={adicionarConsumidor}>  
      <Ionicons name="person-add-outline" size={26} color="black" />  
    </TouchableOpacity>  
  </View>  


  {}  
  <FlatList  
    data={consumidores}  
    keyExtractor={(item) => item.id.toString()}  
    renderItem={({ item }) => <ItemConsumidor consumidor={item} />}  
  />  
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
},
apelido: {
fontSize: 16,
fontWeight: "bold",
marginBottom: 3,
},
});

