import { View, TextInput } from "react-native";
import EstilosEntrada from "../estilos/EstilosEntrada";

export default Entrada = (props) => {
  return (
    <View>
      <TextInput
      style={EstilosEntrada.input}
        placeholder={props.tipo}
      />
    </View>
  );
};



