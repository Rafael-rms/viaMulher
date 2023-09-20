import React, { useState } from 'react';
import { Image, ScrollView, KeyboardAvoidingView, StyleSheet, View, Alert } from 'react-native';
import Entrada from '../componentes/Entrada';
import Botao from '../componentes/Botao';
import EstilosBotao from '../estilos/EstilosBotao';
import { cad } from '../servicos/requisicoesFirebase';


export default Cadastro = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [statusError, setStatusError] = useState('')
  const [mensageError, setMensageError] = useState('')

  async function realizarCadastro() {
    await cad(email, senha, confirmaSenha)
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

        <Entrada
          tipo="Nome Completo"

        />
        <Entrada
          tipo="CPF"
        />
        <Entrada tipo="Celular" />
        <Entrada tipo="Nascimento" />
        <Entrada
          tipo="Email"
          value={email}
          onChange={texto => setEmail(texto)}
        />
        <Entrada
          tipo="Senha"
          value={senha}
          onChange={texto => setSenha(texto)}
        />
        <Entrada
          tipo="Confirmar Senha"
          value={confirmaSenha}
          onChange={texto => setConfirmaSenha(texto)}
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