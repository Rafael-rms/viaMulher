import React from 'react';
import { Text, Alert, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Image, View, ScrollView } from 'react-native';
import EstilosBotao from '../estilos/EstilosBotao';
import Entrada from '../componentes/Entrada';
import Botao from '../componentes/Botao'

export default Cadastro = ({navigation})=> {
    return (
        <>
        <KeyboardAvoidingView style={styles.container}>

          <View style={styles.cabecalho}>
              <Botao 
              onpress={()=>navigation.navigate('Login')}
              imagemBotao={require('../assets/voltar.png')} 
              estiloBotao={EstilosBotao.botaoVoltar}
              />
          </View>

          <Image source={require('../assets/recSenha.png')}
          style={styles.imgRecSenha}
          />
          
          <Text style={styles.textRecSenha1}>Esqueceu sua Senha?</Text>
          <Text style={styles.textRecSenha2}>Insira seu email e enviaremos um link para recuperação de senha</Text>

          <Entrada tipo="Email"/>

          <Botao
          onpress={()=>Alert.alert('Ok')}
          textoBotao="Enviar"
          estiloBotao={EstilosBotao.botao}
          />

        </KeyboardAvoidingView>
      </>
    )
  }


  const styles = StyleSheet.create({
    cabecalho:{
      position: 'absolute',
      top: 0,
      left: 0,
      padding: 10,
      zIndex: 1,
    },
    container:{ 
      backgroundColor: "#FFDFDF",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    imgRecSenha:{
        width:130,
        height:155,
        marginBottom:'5%',
    },
    textRecSenha1: {
        marginBottom:'10%',
        fontSize:20,
    },
    textRecSenha2: {
        marginBottom:'10%',
    },
})