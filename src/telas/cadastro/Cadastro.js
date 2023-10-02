import React, { useState } from 'react';
import { Image, ScrollView, KeyboardAvoidingView, StyleSheet } from 'react-native';
import Entrada from './componentes/Entrada';
import Botao from './componentes/Botao';
import Alert from '../../componentes/Alert';
import { cadastrar } from '../../servicos/requisicoesFirebase';
import Cabecalho from '../../componentes/Cabecalho';
import { alteraDados } from '../../utils/comum';

export default function Cadastro({ navigation }) {

  const [dados, setDados] = useState({
    email: '',
    senha: '',
    confirmaSenha: ''
  })


  const [statusError, setStatusError] = useState('')
  const [mensageError, setMensageError] = useState('')

  async function realizarCadastro() {
    if (dados.email == '') {
      setMensageError('Preencha com seu email')
      setStatusError('email')
    } else if (dados.senha == '') {
      setMensageError('Digite sua senha')
      setStatusError('senha')
    } else if (dados.confirmaSenha == '') {
      setMensageError('Confirme sua senha')
      setStatusError('confirmaSenha')
    } else if (dados.confirmaSenha != dados.senha) {
      setMensageError('As senhas não são iguais')
      setStatusError('confirmaSenha')
    } else{
      const resultado =  await cadastrar(dados.email, dados.senha, dados.confirmaSenha)
      setStatusError('firebase')
      if (resultado == "Sucesso"){
        setMensageError('Usuário criado com sucesso!')

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
          value={dados.email}
          onChangeText={valor => alteraDados('email', valor, dados, setDados)}
          error={statusError == 'email'}  
          messageError={mensageError}
        />
        <Entrada
          imagem={require('../../assets/senha.png')}
          placeholder="Senha"
          value={dados.senha}
          onChangeText={valor => alteraDados('senha', valor, dados, setDados)}
          error={statusError == 'senha'}
          messageError={mensageError}
        />
        <Entrada
          imagem={require('../../assets/senha.png')}
          placeholder="Confirmar Senha"
          value={dados.confirmaSenha}
          onChangeText={valor => alteraDados('confirmaSenha', valor, dados, setDados)}
          error={statusError == 'confirmaSenha'}
          messageError={mensageError}
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