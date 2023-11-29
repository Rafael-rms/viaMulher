
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Entrada from './componentes/Entrada';
import Botao from './componentes/Botao';
import { auth } from '../../config/firebase';
import { logar } from '../../servicos/req';
import animacao from '../../assets/teste/gifReload.gif';
import { alteraDados } from '../../utils/comum';


// Criando o componente Login
export default function Login({ navigation }) {
  const [dados, setDados] = useState({
    email: '',
    senha: ''
  })


  const [statusError, setStatusError] = useState('')
  const [mensagemError, setMensagemError] = useState('')
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    const estadoUsuario = auth.onAuthStateChanged(usuario => {
      if (usuario) {
        navigation.replace('Home')
      }
      setCarregando(false)
    })

    return () => estadoUsuario()
  }, [])


  async function realizaLogin() {
    if (dados.email == '') {
      setMensagemError('Email obrigatório')
      setStatusError('email')

    } else if (dados.senha == '') {
      setMensagemError('A senha é obrigatória')
      setStatusError('senha')

    } else {
      const resultado = await logar(dados.email, dados.senha)
      if (resultado == 'error') {
        setStatusError('firebase')
        setMensagemError('Email ou senha inválidos')
      }
      else {
        navigation.replace('Home')
      }
    }
  }

  if (carregando) {
    return (
      <View style={styles.container}>
        <Image source={animacao}
          style={styles.image}
        />
      </View>
    )
  }
  return (
    <KeyboardAvoidingView style={{flex:1}}>
      <ScrollView contentContainerStyle={styles.container}>

      {/* View que contém a Imagem exibida na tela de Login */}
      <View style={styles.containerLogo}>
        <Image
          style={styles.imgLogin}
          source={require("../../assets/cadastro/login.png")} 
        />
      </View>

      {/* View com botões e TextInputs */}
      <View style={styles.containerLogin}>
        {/* Chamda do componente Entrada (TextInput) */}
        <Entrada
          imagem={require('../../assets/cadastro/email.png')}
          placeholder="Email"
          value={dados.email}
          onChangeText={valor => alteraDados('email', valor, dados, setDados)}
          error={statusError == 'email'}
          messageError={mensagemError}
          keyboardType='email-address'
        />
        {/* Botão com texto que navega para a tela de recuperar senha */}
        <TouchableOpacity
          style={styles.btnRecSenha}
          onPress={() => navigation.navigate('RecSenha')}>
          <Text style={styles.recSenhaTexto}>Esqueceu a Senha?</Text>
        </TouchableOpacity>

        {/* Chamda do componente Entrada (TextInput) */}
        <Entrada
          imagem={require('../../assets/cadastro/senha.png')}
          placeholder="Senha"
          value={dados.senha}
          onChangeText={valor => alteraDados('senha', valor, dados, setDados)}
          error={statusError == 'senha'}
          messageError={mensagemError}
          secureTextEntry={true}
        />
        {/* View com texto e botão que navega para a tela de cadastro */}
        <View style={styles.containerBtnCadastar}>
          <Text style={styles.textoCc}>Não tem uma conta?</Text>

          <TouchableOpacity
            style={styles.btnRegistrar}
            onPress={() => navigation.navigate('Cadastro')
            }>
            <Text style={styles.registrarTexto}>  Cadastre-se</Text>
          </TouchableOpacity>
        </View>
        <Botao
          onpress={() => realizaLogin()}
          textoBotao="Entrar"
        />

      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Estilos da tela de Login
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFDFDF",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  containerLogin: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: '20%'
  },
  imgLogin:{
    width: 150,
    height: 155
  },
  input: {
    backgroundColor: "#fff",
    width: "90%",
    height: "auto",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 20,
    padding: 10,
  },
  containerBtnCadastar: {
    flexDirection: 'row',
  },
  btnRecSenha: {
    // backgroundColor: "#D69595",
    marginBottom: '3%',

  },
  recSenhaTexto: {
    fontSize: 15,
    paddingLeft: '50%',
    marginBottom: -5
  },
  textoCc: {

  },
  btnRegistrar: {
    paddingBottom: 10
  },
  registrarTexto: {
    fontWeight: 'bold',
    fontSize: 15
  },
  image: {
    width: 95
  }
})