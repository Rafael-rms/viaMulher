import { View, TextInput } from "react-native";
import EstilosEntrada from "../estilos/EstilosEntrada";

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



