import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";

export default Botao1 = ({onpress, textoBotao, imagemBotao, style}) => {
  return (
    <View style={Estilos.containerBotoes}>
      <TouchableOpacity 
      style={[style, Estilos.botaoHome]}
      onPress={onpress}
      >
          <Text >{textoBotao}</Text>
          <Image source={imagemBotao}/>
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
    // containerBotoes:{
    //     flexDirection:'row',
    //     flexWrap:'wrap',
    //     flex:1,
    //     //backgroundColor:'black',
    //     alignItems:'center',
    //     justifyContent:'center',

    // },
    
})