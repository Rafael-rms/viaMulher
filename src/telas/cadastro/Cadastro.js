import React, { useState } from 'react';
import { Image, ScrollView, KeyboardAvoidingView, StyleSheet, View, Alert } from 'react-native';
import Entrada from './componentes/Entrada';
import Botao from './componentes/Botao';

import { cadastrar } from '../../servicos/requisicoesFirebase';
import Cabecalho from '../../componentes/Cabecalho';


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
        <Cabecalho
            imagemEsquerda={require('../../assets/voltar.png')}
            botaoEsquerda={{
                onPress: ()=>navigation.goBack(),
            }}
        />

        <Image
          source={require('../../assets/cadastrar.png')}
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