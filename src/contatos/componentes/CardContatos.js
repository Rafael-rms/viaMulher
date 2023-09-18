import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'

export default CardContatos = ({navigation}) => {
    return (
      <View style={Estilos.card}>
        {/* Campo Nome */}
        <View style={Estilos.containerEntrada}>
          <Text style={Estilos.textoCard}>Nome:</Text>
          <TextInput
            style={Estilos.Entrada}
            placeholder="Digite o nome..."
          />
        </View>

        {/* Campo Telefone */}
        <View style={Estilos.containerEntrada}>
          <Text style={Estilos.textoCard}>Telefone:</Text>
          <TextInput
            style={Estilos.Entrada}
            placeholder="Digite o telefone..."
          />
        </View>

        <TouchableOpacity style={Estilos.botaoCadastrar} onPress={() => Alert.alert('Contato Cadastrado')}>
          <Text style={Estilos.textoCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  };
  

const Estilos = StyleSheet.create({
  card: {
    height: 180,
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
textoCadastrar:{
    fontSize:20,
    fontWeight:'bold',
    color:'white'
}
});
