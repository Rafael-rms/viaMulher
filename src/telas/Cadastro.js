import React, { useState } from 'react';
import { Image, ScrollView, KeyboardAvoidingView, StyleSheet, View, Alert } from 'react-native';
import Entrada from '../componentes/Entrada';
import Botao from '../componentes/Botao';
import EstilosBotao from '../estilos/EstilosBotao';
import { cadastrar } from '../servicos/requisicoesFirebase';


export default function Cadastro({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [statusError, setStatusError] = useState('')
  const [mensageError, setMensageError] = useState('')

  async function realizarCadastro() {
    await cadastrar(email, senha, confirmaSenha)
  }
  return (

    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.cabecalho}>
          <Botao
            onpress={() => navigation.navigate('Login')}
            imagemBotao={require('../assets/voltar.png')}
            estiloBotao={EstilosBotao.botaoVoltar}
          />
        </View>

        <Image
          source={require('../assets/cadastrar.png')}
          style={styles.imgCadastrar} />

        <Entrada placeholder="Nome Completo"

        />
        <Entrada placeholder="CPF"/>
        <Entrada placeholder="Celular" />
        <Entrada placeholder="Nascimento" />
        <Entrada
          placeholder="E-mail"
          value={email}
          onChangeText={texto => setEmail(texto)}
      
        />
        <Entrada
          placeholder="Senha"
          value={senha}
          onChangeText={texto => setSenha(texto)}
        />
        <Entrada
        placeholder="Confirmar Senha"
        value={confirmaSenha}
        onChangeText={texto => setConfirmaSenha(texto)}
        />

        <Botao
          onpress={() => realizarCadastro()}
          textoBotao="Cadastrar"
          estiloBotao={EstilosBotao.botao}
        />

      </ScrollView>
    </KeyboardAvoidingView>


  )
}


const styles = StyleSheet.create({
  cabecalho: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
  },
  container: {
    backgroundColor: "#FFDFDF",
    justifyContent: "center",
    alignItems: "center",
  },
  imgCadastrar: {
    width: 130,
    height: 155,
    marginBottom: '5%',
    marginTop: '20%'
  }
})