import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export default Botao = ({onpress, texto, imagem, style}) => {
  return (
    <View style={Estilos.containerBotoes}>
      <TouchableOpacity 
      style={[style, Estilos.botaoHome]}
      onPress={onpress}
      >
          <Text style={Estilos.textoImg} >{texto}</Text>
          <Image style={Estilos.imagem} source={imagem}/>
      </TouchableOpacity>
    </View>
  );
};


const Estilos = StyleSheet.create({
    botaoHome:{
        height:'34%',
        width:'100%',
        minWidth:'50%',
        maxWidth:'100%',
        backgroundColor:'#FFDFDF',
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
      },
      imagem:{
        position:'absolute',
        top:'19%',
        width:'38%',
        height:'75%'
      },
      textoImg:{
        position:'absolute',
        bottom:'82%',
        fontSize:15,
      }
})