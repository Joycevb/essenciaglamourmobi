import { Text, View, StyleSheet } from "react-native";

export default function Produto() {
  return (
    <View style={style.container} >
      <Text>Produto</Text>
    </View>
  );
}
const style = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent:  "center",
    alignItems: "center",
  }

})

