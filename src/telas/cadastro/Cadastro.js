import React, { useState } from 'react';
import { Image, ScrollView, KeyboardAvoidingView, StyleSheet } from 'react-native';
import Entrada from './componentes/Entrada';
import Botao from './componentes/Botao';
import Alert from '../../componentes/Alert';
import { cadastrar } from '../../servicos/requisicoesFirebase';
import Cabecalho from '../../componentes/Cabecalho';


export default function Cadastro({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [statusError, setStatusError] = useState('')
  const [mensageError, setMensageError] = useState('')

  async function realizarCadastro() {
    if (email == '') {
      setMensageError('Preencha com seu email')
      setStatusError('email')
    } else if (senha == '') {
      setMensageError('Digite sua senha')
      setStatusError('senha')
    } else if (confirmaSenha == '') {
      setMensageError('Confirme sua senha')
      setStatusError('confirmaSenha')
    } else if (confirmaSenha != senha) {
      setMensageError('As senhas não são iguais')
      setStatusError('confirmaSenha')
    } else{
      const resultado =  await cadastrar(email, senha, confirmaSenha)
      setStatusError('firebase')
      if (resultado == "Sucesso"){
        setMensageError('Usuário criado com sucesso!')
        setEmail('')
        setSenha('')
        setConfirmaSenha('')
      }
      else{
        setMensageError(resultado)
      }
    }
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
        <Entrada 
          imagem={require('../../assets/nome.png')}
          placeholder="Nome Completo"
        />
        <Entrada
          imagem={require('../../assets/celular.png')}
          placeholder="Celular" 
        />
        <Entrada 
          imagem={require('../../assets/nascimento.png')}
          placeholder="Nascimento" 
        />
        <Entrada
          imagem={require('../../assets/email.png')}
          placeholder="E-mail"
          value={email}
          onChangeText={texto => setEmail(texto)}
          error={statusError == 'email'}  
        />
        <Entrada
          imagem={require('../../assets/senha.png')}
          placeholder="Senha"
          value={senha}
          onChangeText={texto => setSenha(texto)}
          error={statusError == 'senha'}
        />
        <Entrada
          imagem={require('../../assets/senha.png')}
          placeholder="Confirmar Senha"
          value={confirmaSenha}
          onChangeText={texto => setConfirmaSenha(texto)}
          error={statusError == 'confirmaSenha'}
        />       
        <Botao
          onpress={() => realizarCadastro()}
          textoBotao="Cadastrar"
        />
        <Alert
          mensagem={mensageError}
          error={statusError == 'firebase'}
          setError={setStatusError}
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
  },
  alert: {

  },
})