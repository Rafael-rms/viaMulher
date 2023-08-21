import { View, TouchableOpacity, Text, Image } from "react-native";
import EstilosBotao from "../estilos/EstilosBotao";

export default Botao = ({ textoBotao, onpress, imagemBotao, estiloBotao }) => {
  return (
    <View style={EstilosBotao.containerBotao}>
      <TouchableOpacity 
      style={[ estiloBotao ]}
      onPress={onpress}
      >
          <Text style>{textoBotao}</Text>
          <Image source={imagemBotao}/>
      </TouchableOpacity>
    </View>
  );
};
