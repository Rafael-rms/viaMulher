import React, { useEffect, useState } from "react";
import { View, StyleSheet , Image, TouchableOpacity, Text } from "react-native";
import Cabecalho from "../../componentes/Cabecalho";
import Linha from "../../componentes/Linha";
import { capturaDadosUsuario } from "../../servicos/req";
import { auth } from "../../config/firebase";

export default function Perfil({navigation}) {
    const [dadosUsuario, setDadosUsuario] = useState([])

    useEffect(() => {
        auth.onAuthStateChanged(usuario => {
            if (usuario) {
                const result = usuario.uid
                //console.log(result)
                // Função para carregar os dados do Firestore
                async function carregarDadosFirestore(){
                const users = await capturaDadosUsuario(result)
                    setDadosUsuario(users)
            }
            carregarDadosFirestore()
            }
        })
        },[])

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
                <TouchableOpacity style={Estilos.botaoPerfil}
                    onPress={() => navigation.navigate('EditarPerfil')}
                >
                    <Text style={Estilos.textoBotao}>Editar Perfil</Text>

                </TouchableOpacity>
            </View>
            <View style={Estilos.containerInformacoes}>
                <Text style={Estilos.textMinhasInformacoes}>Minhas Informações</Text>
                
                <Text style={Estilos.textosTitulos}>Nome</Text>
                <Text style={Estilos.textosDados}>{dadosUsuario.nome}</Text>

                <Text style={Estilos.textosTitulos}>Data de Nascimento</Text>
                <Text style={Estilos.textosDados}>{dadosUsuario.nascimento}</Text>

                <Text style={Estilos.textosTitulos}>Email</Text>
                <Text style={Estilos.textosDados}>{dadosUsuario.email}</Text>

                <Text style={Estilos.textosTitulos}>Telefone</Text>
                <Text style={Estilos.textosDados}>{dadosUsuario.celular}</Text>
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
        alignSelf:'center',
        fontWeight:"400"
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
    },
    textosDados:{
        fontSize:18,
        fontWeight:'500',
        color:'gray',
        marginBottom: '1%'
    }
})