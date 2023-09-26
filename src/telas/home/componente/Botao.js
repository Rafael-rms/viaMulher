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
        height:'90%',
        width:'50%'
      },
      textoImg:{
        marginTop:10,
        fontSize:20
      }
    // containerBotoes:{
    //     flexDirection:'row',
    //     flexWrap:'wrap',
    //     flex:1,
    //     //backgroundColor:'black',
    //     alignItems:'center',
    //     justifyContent:'center',

    // },
    
})