import React from 'react';
import { Image, ScrollView, KeyboardAvoidingView, StyleSheet, View, Alert } from 'react-native';
import Entrada from '../componentes/Entrada';
import Botao from '../componentes/Botao';
import EstilosBotao from '../estilos/EstilosBotao';

export default Cadastro = ({navigation})=> {
    return (
      
      <KeyboardAvoidingView style={{flex:1}}>
        <ScrollView contentContainerStyle={styles.container}>

          <View style={styles.cabecalho}>
              <Botao 
              onpress={()=>navigation.navigate('Login')}
              imagemBotao={require('../assets/voltar.png')} 
              estiloBotao={EstilosBotao.botaoVoltar}
              />
          </View>
          
            <Image 
            source={require('../assets/cadastrar.png')}
            style={styles.imgCadastrar}/>
          
            <Entrada tipo="Nome Completo"/>
            <Entrada tipo="CPF"/>
            <Entrada tipo="Celular"/>
            <Entrada tipo="Nascimento"/>
            <Entrada tipo="Email"/>
            <Entrada tipo="Senha"/>
            <Entrada tipo="Confirmar Senha"/>
            
            <Botao 
            onpress={()=>Alert.alert('Ola')}
            textoBotao="Cadastrar" 
            estiloBotao={EstilosBotao.botao}
            />
            
        </ScrollView>
      </KeyboardAvoidingView>
      
        
    )
  }


  const styles = StyleSheet.create({
    cabecalho:{
      position: 'absolute',
      top: 0,
      left: 0,
      padding: 10,
    },
    container:{
      backgroundColor: "#FFDFDF",
      justifyContent: "center",
      alignItems: "center",
    },
    imgCadastrar:{
      width:130,
      height:155,
      marginBottom:'5%',
      marginTop:'20%'
    }
})