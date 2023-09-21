import { View, TextInput, StyleSheet } from "react-native";

export default Entrada = ({placeholder, value, onChangeText}) => {
  return (
    <View>
      <TextInput
      style={EstilosEntrada.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      />
    </View>
  );
};

const EstilosEntrada = StyleSheet.create({
  input: {
      backgroundColor: "#fff",
      borderRadius: 30,
      //borderWidth: 1,
      //borderColor: "black",
      padding: 15,
      margin: 5,
      minWidth: '90%',
      maxWidth: '90%',
      height:65
    },     
})



