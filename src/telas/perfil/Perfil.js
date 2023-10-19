import React from "react";
import { View, StyleSheet , Image, TouchableOpacity, Text } from "react-native";
import Cabecalho from "../../componentes/Cabecalho";
import { TextInput } from "react-native-paper";
import Linha from "../../componentes/Linha";

export default function Perfil({navigation}) {
    return (
        <View style={Estilos.container}>
            <Cabecalho
                texto="Perfil"
                imagemEsquerda={require('../../assets/voltar.png')}
                botaoEsquerda={{
                    onPress: ()=>navigation.goBack(''),
                }}
            />
            <Linha/>
            <View>
            <Image source={require('../../assets/avatar.png')}/>
                <TouchableOpacity style={Estilos.botaoPerfil}>
                    <Text style={Estilos.textoBotao}>Editar Perfil</Text>
                </TouchableOpacity>
            </View>
            <View style={Estilos.containerInformacoes}>
                <Text style={Estilos.textMinhasInformacoes}>Minhas Informações</Text>
                <Text style={Estilos.textosTitulos}>Nome</Text>
                <TextInput
                placeholder="Nome"
                style={Estilos.entrada}
                />
                <Text style={Estilos.textosTitulos}>Data de Nascimento</Text>
                <TextInput
                placeholder="Nome"
                style={Estilos.entrada}
                />
                <Text style={Estilos.textosTitulos}>Email</Text>
                <TextInput
                placeholder="Nome"
                style={Estilos.entrada}
                />
                <Text style={Estilos.textosTitulos}>Telefone</Text>
                <TextInput
                placeholder="Nome"
                style={Estilos.entrada}
                />
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
        marginTop:"2%",
        borderRadius:20,
        width:120,
        minwidth:"40%",
        height:30,
        alignItems:"center",
        justifyContent:'center',
        alignSelf:'center'
    },
    textoBotao:{
        fontSize:18,
        color: "white",
        fontWeight:"bold"
    },
    textMinhasInformacoes:{
        fontSize:18,
        alignSelf:'center'
    },
    containerInformacoes:{
        // backgroundColor:'green',
        width:'90%',
        marginTop:'1%'
    },
    entrada:{
        height:30,
        maxHeight:30
    },
    textosTitulos:{
        fontSize:20,
        fontWeight:'bold'
    }
})