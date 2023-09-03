
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity, Alert } from 'react-native';
import Entrada from '../componentes/Entrada';
import EstilosBotao from '../estilos/EstilosBotao';

export default function Login({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.containerLogo}>
          <Image 
          style={{
            width:130,
            height:155
          }} 
          source={require("../assets/login.png")}/>
      </View>

      <View style={styles.containerLogin}>
        
      <Entrada tipo="Email"/>

        <TouchableOpacity 
        style={styles.btnRecSenha}
        onPress={()=>navigation.navigate('RecSenha')}>
          <Text style={styles.recSenhaTexto}>Esqueceu a Senha?</Text>
        </TouchableOpacity>
        
        <Entrada tipo="Senha"/>
        
        <View style={styles.containerBtnCadastar}>
          <Text style={styles.textoCc}>Não tem uma conta?</Text>   

          <TouchableOpacity 
          style={styles.btnRegistrar}
            onPress={()=>navigation.navigate('Cadastro')
          }>            
          <Text style={styles.registrarTexto}>  Cadastre-se</Text>
          </TouchableOpacity>
        </View>
        <Botao 
        onpress={()=>navigation.navigate('Home')}
        textoBotao="Entrar"
        estiloBotao={EstilosBotao.botao}
        />


      </View>
    </KeyboardAvoidingView>
  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: "#FFDFDF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  containerLogo:{
    flex: 1,
    justifyContent: "center",
    alignItems:'center'
  },
  containerLogin:{
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    marginBottom:'20%'
  },
  input: {
    backgroundColor: "#fff",
    width: "90%",
    height: "auto",
    marginBottom:15,
    color:"#222",
    fontSize:17,
    borderRadius:20,
    padding:10,
  },
  containerBtnCadastar:{
    flexDirection: 'row',
  },
  btnRecSenha:{
    // backgroundColor: "#D69595",
    marginBottom:'3%',

  },
  recSenhaTexto:{
    fontSize: 15,
    paddingLeft:'50%', 
    marginBottom:-5
  },
  textoCc:{
    
  },
  btnRegistrar:{
    paddingBottom:10
  },
  registrarTexto:{
    fontWeight:'bold',
    fontSize:15
  },
})