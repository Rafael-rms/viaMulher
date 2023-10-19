import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


// Criando componente cadFormulario que será chamado na tela de formulário
export default CardFormulario = ({navigation}) => {
    return (
      <View style={Estilos.card}>

        <View style={Estilos.containerEntrada}>
          <Text style={Estilos.textoCard}>Nome:</Text>
          <Text style={Estilos.textoCard}>Nome Sobrenome</Text>
        </View>

        <View style={Estilos.containerEntrada}>
          <Text style={Estilos.textoCard}>Telefone:</Text>
          <Text style={Estilos.textoCard}>00 000000000</Text>
        </View>

        <View style={Estilos.containerEntrada}>
          <Text style={Estilos.textoCard}>Nascimento:</Text>
          <Text style={Estilos.textoCard}>12/10/1993</Text>
        </View>


        <TouchableOpacity 
            style={Estilos.botaoCadastrar} 
            onPress={() => navigation.navigate('Pergunta1')}>
          <Text style={Estilos.textoIniciar}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
// Estilos do componente
const Estilos = StyleSheet.create({
  card: {
    height: 200,
    width: '90%',
    minWidth: '90%',
    backgroundColor: '#EDCECE',
    alignItems: 'center',
    padding: 10,
    borderRadius:20
  },
  containerEntrada: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textoCard: {
    marginRight: 10,
    fontWeight: 'bold',
    fontSize:20
  },
  Entrada: {
    flex: 1,
    padding: 8,
  },
  botaoCadastrar:{
    backgroundColor:'#D69595',
    width:'60%',
    minWidth:'60%',
    height:50,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
},
textoIniciar:{
    fontSize:20,
    fontWeight:'bold',
    color:'white'
}
});
