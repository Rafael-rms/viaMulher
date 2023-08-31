import React from "react";

import { ScrollView, View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'

export default Denuncias = ({navigation})=>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.cabecalho}>
                    <TouchableOpacity 
                    style={{paddingRight:60}}
                    onPress={()=>navigation.navigate('Home')}>
                        <Image source={require('../assets/voltar.png')}/>
                    </TouchableOpacity>

                    <Text style={styles.textoCabecalho}>Sobre</Text>
                </View>

                <View style={styles.linha}/>

                <View style={styles.caixaSobre}>
                    <Text style={styles.texoTituloCaixa}>Para que serve o APP</Text>
                    <View style={[styles.linha, {width:'90%'}]}/>
                    <Text style={styles.textoCaixa}>O aplicativo viaMulher foi desenvolvido por um grupo de alunos da ETEC, com a finalidade de auxiliar  no combate a violência contra a mulher. Ao fazer uso do aplicatico, a usuária poderá
                    acionar o botão de SOS a qualquer momento, além de gerar um formulária para auxiliar o assistente social em casos de violência domestica</Text>
                </View>

                <View style={[styles.caixaSobre, {marginBottom:20}]}>
                    <Text style={styles.texoTituloCaixa}>Como funciona?</Text>
                    <View style={[styles.linha, {width:'90%'}]}/>
                    <Text style={styles.textoCaixa}>Para fazer uso  do botão de SOS a usuária deverá criar um perfil no aplicativo e cadastrar os contatos que ela queira que receba as mensagens de SOS. Para enviar o alerta, a usuária de verá apertar o botão de power x vezes e automaticamente o SOS seerá enviado para seus contatos cadastrados.
                    No caso do formulário FRIDA , a usuária precisa está logada na sua conta, assim ela conseguirá prencher o formulário e gerar um pdf para enviar para a assistencia social.</Text>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFDFDF',
        alignItems:'center',
    },
    cabecalho:{
        flexDirection: 'row',
        marginTop:'6%',
        alignItems:'center',
        paddingRight:'24%'
    },
    textoCabecalho:{
        marginLeft:'14%',
        marginRight:'14%',
        fontSize:28,
        fontWeight: 'bold',
    },
    linha:{
        width:'100%',
        height:2,
        backgroundColor:'black',
        marginTop:'4%'
    },
    caixaSobre:{
        backgroundColor: '#EDCECE',
         marginTop:'5%',
         height:'auto',
         width:'94%',
         alignItems:'center',
         borderRadius:20,
    },
    texoTituloCaixa:{
        marginTop:'3%',
        fontSize:23,
        fontWeight:'bold'
    },
    textoCaixa:{
        fontSize:20,
        padding:'4%',
        
    }
})