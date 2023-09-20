import React from "react";
import { View, StyleSheet , Image, TouchableOpacity, Text } from "react-native";
import Cabecalho from "../componentes/Cabecalho";

export default function Perfil({navigation}) {
    return (
        <View style={Estilos.container}>
            <Cabecalho
                texto="Perfil"
                imagemEsquerda={require('../assets/voltar.png')}
                botaoEsquerda={{
                    onPress: ()=>navigation.goBack(''),
                }}
            />
            <View>
            <Image source={require('../assets/avatar.png')}/>
                <TouchableOpacity style={Estilos.botaoPerfil}>
                    <Text style={Estilos.textoBotao}>Editar Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Estilos = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFDFDF',
        alignItems:'center',
    },
    botaoPerfil:{
        backgroundColor:"#D69595",
        marginTop:"5%",
        borderRadius:20,
        width:120,
        minwidth:"40%",
        height:30,
        alignItems:"center",
        justifyContent:'center'
    },
    textoBotao:{
        fontSize:18,
        color: "white",
        fontWeight:"bold"
    }
})