import { View, TouchableOpacity, Text, Image } from "react-native";
import EstilosBotao from "../estilos/EstilosBotao";

export default Botao = (props) => {
  return (
    <View style={EstilosBotao.containerBotao}>
      <TouchableOpacity 
      style={props.estiloBotao}
      onPress={props.onpress}
      >
          <Text >{props.textoBotao}</Text>
          <Image source={props.imagemBotao}/>
      </TouchableOpacity>
    </View>
  );
};
