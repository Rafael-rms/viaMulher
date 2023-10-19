import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

//Componente Botao. Está sendo usado nas telas de cadastro, Login e RecSenha
export default Botao = (props) => {
  return (
    <View>
      <TouchableOpacity 
      style={EstilosBotao.botao}
      onPress={props.onpress}
      >
          <Text style={EstilosBotao.texto}>{props.textoBotao}</Text>
          <Image source={props.imagemBotao}/>
      </TouchableOpacity>
    </View>
  );
};


const EstilosBotao =StyleSheet.create({
      botao:{
        backgroundColor: "#D69595",
        minWidth: '70%',
        maxWidth: '70%',
        height:55,
        maxHeight:'70%',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        margin:12,
        textAlign:'center',
      },
  
      texto:{
        textAlign:'center',
        fontSize:25,
        color:'white',
        fontWeight:'bold'
      }
})

