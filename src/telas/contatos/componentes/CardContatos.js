import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { auth,} from '../../../config/firebase'
import { capturaDados, capturaDadosUsuario, salvarContatos } from '../../../servicos/req';

// Criando componente CardContatos que será chamado na tela de contatos
export default CardContatos = ({ navigation }) => {

  const [dadosUsuario, setDadosUsuario] = useState([])
  const [celular, setCelular] = useState('')
  const [nome, setNome] = useState('')

  useEffect(() => {
    auth.onAuthStateChanged(usuario => {
      if (usuario) {
        const result = usuario.uid
        //console.log(result)
        // Função para carregar os dados do Firestore
        async function carregarDadosFirestore() {
          const users = await capturaDadosUsuario(result)
          setDadosUsuario(users)
        }
        carregarDadosFirestore()
      }
    })
  }, [])

  async function salvar() {
    if (nome, celular == '') {
      Alert.alert('Insira o nome e o celular do contato que deseja criar')
    } else if (nome == '') {
      Alert.alert('Insira o nome do contato que deseja criar')
    } else if (celular == '') {
      Alert.alert('Insira o celular do contato que deseja criar')
    } else {

      const id = dadosUsuario.id
      const resultado = await salvarContatos({
        nome,
        celular,
        id

      })
      if (resultado == 'erro') {
        Alert.alert('erro ao criar contato')
      }
      else {
        Alert.alert("criado com sucesso")
      }
    }

  }

  return (
    <View style={Estilos.card}>
      {/* Campo Nome */}
      <View style={Estilos.containerEntrada}>
        <Text style={Estilos.textoCard}>Nome:</Text>

        <TextInput
          style={Estilos.Entrada}
          placeholder="Digite o nome..."
          value={nome}
          onChangeText={text => setNome(text)}

        />
      </View>

      {/* Campo Telefone */}
      <View style={Estilos.containerEntrada}>
        <Text style={Estilos.textoCard}>Telefone:</Text>

        <TextInput
          style={Estilos.Entrada}
          placeholder="Digite o telefone..."
          value={celular}
          onChangeText={text => setCelular(text)}


        />
      </View>

      {/* Botao que irá cadastrar os contatos */}
      <TouchableOpacity style={Estilos.botaoCadastrar} onPress={() => salvar()}>
        <Text style={Estilos.textoCadastrar}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos do componente CarContatos
const Estilos = StyleSheet.create({
  card: {
    height: 180,
    width: '90%',
    minWidth: '90%',
    backgroundColor: '#EDCECE',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20
  },
  containerEntrada: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textoCard: {
    marginRight: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
  Entrada: {
    flex: 1,
    padding: 8,
  },
  botaoCadastrar: {
    backgroundColor: '#D69595',
    width: '60%',
    minWidth: '60%',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoCadastrar: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});



