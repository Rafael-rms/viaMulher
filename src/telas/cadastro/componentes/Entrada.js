import { View, TextInput, StyleSheet, Image } from "react-native";


//Componente Entrada (TextInput). Está sendo usado nas telas de cadastro, Login e RecSenha
export default Entrada = ({placeholder, value, onChangeText, error, messageError, imagem, keyboardType, secureTextEntry }) => {
  return (
    <View style={Estilos.container}>

    
      <TextInput
      style={Estilos.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      error={error}
      messageError={messageError}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
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



