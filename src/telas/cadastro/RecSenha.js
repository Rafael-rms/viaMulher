import React from 'react';
import { Text, Alert, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Image, View, ScrollView } from 'react-native';
import Entrada from './componentes/Entrada';
import Botao from './componentes/Botao'
import Cabecalho from '../../componentes/Cabecalho';

// Criando o componente Cadastro
export default Cadastro = ({ navigation }) => {
  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        {/* Chamada do componente Cabecalho */}
        <Cabecalho
          imagemEsquerda={require('../../assets/voltar.png')}
          botaoEsquerda={{
            onPress: () => navigation.goBack(),
          }}
        />

        {/* Imagem exibida na tela de recuperar senha */}
        <Image source={require('../../assets/cadastro/recSenha.png')}
          style={styles.imgRecSenha}
        />
        {/* Textos exibidos na tela de recuperar senha */}
        <Text style={styles.textRecSenha1}>Esqueceu sua Senha?</Text>
        <Text style={styles.textRecSenha2}>Insira seu email e enviaremos um link para recuperação de senha</Text>

        {/* Chamada do componente Entrada (TextInput) */}
        <Entrada
          imagem={require('../../assets/cadastro/email.png')}
          placeholder="Email"
        />
        {/* Chamda do componente Botao */}
        <Botao
          onpress={() => Alert.alert('Ok')}
          textoBotao="Enviar"
        />

      </KeyboardAvoidingView>
    </>
  )
}

// Estilos da tela de recuperar senha
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFDFDF",
    flex: 1,
    alignItems: "center",
  },
  imgRecSenha: {
    width: 150,
    height: 155,
    marginBottom: '5%',
  },
  textRecSenha1: {
    marginBottom: '10%',
    fontSize: 24,
  },
  textRecSenha2: {
    marginBottom: '10%',
    fontSize: 20,
    textAlign: 'center'
  },
})