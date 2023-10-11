import { View, TextInput, StyleSheet, Image } from "react-native";

export default Entrada = ({placeholder, value, onChangeText, error, messageError, imagem}) => {
  return (
    <View style={Estilos.container}>

    
      <TextInput
      style={Estilos.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      error={error}
      messageError={messageError}
      />

    <Image style={Estilos.imagem} source={imagem}/>
    </View>
  );
};

const Estilos = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center',
  },
  input: {
      backgroundColor: "#fff",
      borderRadius: 30,
      //borderWidth: 1,
      //borderColor: "black",
      padding: 15,
      paddingLeft:70,
      margin: 5,
      minWidth: '90%',
      maxWidth: '90%',
      height:55,
      fontSize:20
    },
    imagem:{
      position:'absolute',
      left:20,
      height:45,
      width:45
    }
})



