import React from 'react';
import { Text, Alert, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Image, View, ScrollView } from 'react-native';
import Entrada from './componentes/Entrada';
import Botao from './componentes/Botao'
import Cabecalho from '../../componentes/Cabecalho';

export default Cadastro = ({navigation})=> {
    return (
        <>
        <KeyboardAvoidingView style={styles.container}>
          <Cabecalho 
            imagemEsquerda={require('../../assets/voltar.png')}
            botaoEsquerda={{
                onPress: ()=>navigation.goBack(),
            }}
          />

          
            <Image source={require('../../assets/recSenha.png')}
            style={styles.imgRecSenha}
            />
                     
              <Text style={styles.textRecSenha1}>Esqueceu sua Senha?</Text>
              <Text style={styles.textRecSenha2}>Insira seu email e enviaremos um link para recuperação de senha</Text>
            
            <Entrada 
              imagem={require('../../assets/email.png')}
              placeholder="Email"
            />

            <Botao
            onpress={()=>Alert.alert('Ok')}
            textoBotao="Enviar"
            />
        
        </KeyboardAvoidingView>
      </>
    )
  }


  const styles = StyleSheet.create({
    container:{ 
      backgroundColor: "#FFDFDF",
      flex: 1,
      //justifyContent: "center",
      alignItems: "center",
    },
    imgRecSenha:{
        width:130,
        height:155,
        marginBottom:'5%',
    },
    textRecSenha1: {
        marginBottom:'10%',
        fontSize:24,
    },
    textRecSenha2: {
        marginBottom:'10%',
        fontSize:20,
        textAlign:'center'
    },
})