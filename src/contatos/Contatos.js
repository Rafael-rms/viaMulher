import React from "react";
import { View, StyleSheet, TouchableOpacity, Image,Text } from 'react-native'

export default Contatos = ({navigation})=>{
    return (
        <View style={Estilos.container}>
            {/* Cabeçalho */}
            <View style={Estilos.cabecalho}>
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('Home')}>
                        <Image source={require('../assets/voltar.png')}/>
                    </TouchableOpacity>

                    <Text style={Estilos.textoCabecalho}>Contatos</Text>

                    <TouchableOpacity 
                    onPress={()=>{}}>
                        <Image source={require('../assets/contato.png')}/>
                    </TouchableOpacity>           
                </View>

                <View style={Estilos.linha}/>

                <>
                    <Image style={Estilos.imagemContatos} source={require('../assets/contatosFundo.png')}/>
                
                    <TouchableOpacity
                    onPress={()=>{}} 
                    style={Estilos.botaoContatos}>
                        <Text style={Estilos.textoBotaoContatos}>Adicionar Contatos</Text>
                    </TouchableOpacity>
                </>
        </View>
    )
}

const Estilos = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFDFDF',
        alignItems:'center',
    },
    cabecalho:{
        flexDirection: 'row',
        marginTop:'6%',
        alignItems:'center',
    
    },
    textoCabecalho:{
        marginLeft:'18%',
        marginRight:'18%',
        fontSize:28,
        fontWeight: 'bold'
    },
    linha:{
        width:'100%',
        height:2,
        backgroundColor:'black',
        marginTop:'4%'
    },
    imagemContatos:{
        marginTop:'40%'      
    },
    botaoContatos:{
        backgroundColor:'#D69595',
        width:'60%',
        height:'8%',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginTop:'30%',
    },
    textoBotaoContatos:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    }
})