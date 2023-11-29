import React, { useState } from 'react';
import { Image, ScrollView, KeyboardAvoidingView, StyleSheet } from 'react-native';
import Entrada from './componentes/Entrada';
import Botao from './componentes/Botao';
import Alert from '../../componentes/Alert';
import { cadastrar } from '../../servicos/req';
import Cabecalho from '../../componentes/Cabecalho';
import { alteraDados } from '../../utils/comum';
//import { criarUsuario } from '../../servicos/banco';
import { auth } from '../../config/firebase';



//Criação do componente de cadastro
export default function Cadastro({ navigation }) {

  const [dados, setDados] = useState({
    email: '',
    senha: '',
    confirmaSenha: '',
    nome: '',
    celular: '',
    nascimento: ''
  })

  const [statusError, setStatusError] = useState('')
  const [mensageError, setMensageError] = useState('')



  //Função para realização do cadastro com algumas verificações de autenticações
  async function realizarCadastro() {
    if (dados == '') {
      setMensageError('Preencha todos os campos')
      setStatusError('dados')
    } else if (dados.email == '') {
      setMensageError('Digite seu email')
      setStatusError('email')
    } else if (dados.nome == '') {
      setMensageError('Digite seu nome')
      setStatusError('nome')
    } else if (dados.celular == '') {
      setMensageError('Digite seu celular')
      setStatusError('celular')
    } else if (dados.nascimento == '') {
      setMensageError('Digite a sua data de nascimento')
      setStatusError('nascimento')
    } else if (dados.senha == '') {
      setMensageError('Digite sua senha')
      setStatusError('senha')
    } else if (dados.confirmaSenha == '') {
      setMensageError('Confirme sua senha')
      setStatusError('confirmaSenha')
    } else if (dados.confirmaSenha != dados.senha) {
      setMensageError('As senhas não são iguais')
      setStatusError('confirmaSenha')
    } else {

      const resultado = await cadastrar(dados.nome, dados.celular,dados.nascimento, dados.email, dados.senha, dados.confirmaSenha)

      setStatusError('firebase')
      if (resultado == "Sucesso") {
        setMensageError('Usuário criado com sucesso!')

      }
      else {
        setMensageError(resultado)
      }
    }
  }


  return (

    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Chamada do componente cabeçalho */}
        <Cabecalho
          imagemEsquerda={require('../../assets/voltar.png')}
          botaoEsquerda={{
            onPress: () => navigation.goBack(),
          }}
        />

        {/* Imagem que aparece na tela de cadastro */}
        <Image
          source={require('../../assets/cadastro/cadastrar.png')}
          style={styles.imgCadastrar} />

        {/* Chamada do componente entrada (TextInput) */}
        <Entrada
          imagem={require('../../assets/cadastro/nome.png')}
          placeholder="Nome Completo"
          value={dados.nome}
          onChangeText={valor => alteraDados('nome', valor, dados, setDados)}
        />
        <Entrada
          imagem={require('../../assets/cadastro/celular.png')}
          placeholder="Celular"
          value={dados.celular}
          onChangeText={valor => alteraDados('celular', valor, dados, setDados)}
          keyboardType="phone-pad"
        />
        <Entrada
          imagem={require('../../assets/cadastro/nascimento.png')}
          placeholder="Nascimento"
          value={dados.nascimento}
          onChangeText={valor => alteraDados('nascimento', valor, dados, setDados)}
          keyboardType="numeric"
        />
        <Entrada
          imagem={require('../../assets/cadastro/email.png')}
          placeholder="E-mail"
          value={dados.email}
          onChangeText={valor => alteraDados('email', valor, dados, setDados)}
          error={statusError == 'email'}
          messageError={mensageError}
          keyboardType='email-address'
        />
        <Entrada
          imagem={require('../../assets/cadastro/senha.png')}
          placeholder="Senha"
          value={dados.senha}
          onChangeText={valor => alteraDados('senha', valor, dados, setDados)}
          error={statusError == 'senha'}
          messageError={mensageError}
          secureTextEntry={true}
        />
        <Entrada
          imagem={require('../../assets/cadastro/senha.png')}
          placeholder="Confirmar Senha"
          value={dados.confirmaSenha}
          onChangeText={valor => alteraDados('confirmaSenha', valor, dados, setDados)}
          error={statusError == 'confirmaSenha'}
          messageError={mensageError}
          secureTextEntry={true}
        />

        {/* Chamada do componente Botao */}
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

//Estilos da tela de Cadastro
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFDFDF",
    alignItems: "center",
    flexGrow:1
  },
  imgCadastrar: {
    width: 160,
    height: 155,
    marginBottom: '5%',
    marginTop: '20%'
  }
})