import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import Cabecalho from "../../componentes/Cabecalho";
import Linha from "../../componentes/Linha";
import Botao from "./componentes/Botao";
import { auth } from '../../config/firebase'


function Configuracoes({ navigation }) {

    function deslogar() {
        auth.signOut()
        navigation.replace('Login')
    }
    return (
        <View style={Estilos.container}>
            <Cabecalho
                texto="Configurações"
                imagemEsquerda={require('../../assets/voltar.png')}
                botaoEsquerda={{
                    onPress: () => navigation.goBack(''),
                }}
            />

            <Linha />

            <Botao
                onPress={() => { }}
                imagem={require('../../assets/configuracoes/meusContatos.png')}
                texto="Meus Contatos"
            />
            <Botao
                onPress={() => { }}
                imagem={require('../../assets/configuracoes/editarPerfil.png')}
                texto="Editar Perfil"
            />
            <Botao
                onPress={() => { }}
                imagem={require('../../assets/configuracoes/termoDeUso.png')}
                texto="Termos de Uso"
            />
            <Botao
                onPress={() => { }}
                imagem={require('../../assets/configuracoes/alterarSenha.png')}
                texto="Alterar Senha"
            />
            <Botao
                onPress={() => { }}
                imagem={require('../../assets/configuracoes/versao.png')}
                texto="Versão  000.1"
            />
            {/* <Botao
                style={Estilos.sair}
                onPress={()=>{}}
                imagem={require('../../assets/configuracoes/sair.png')}
                texto="Sair"
            /> */}


            <TouchableOpacity
                onPress={() => deslogar()}
                style={[Estilos.containerBotão, Estilos.sair]}
            >
                <Image
                    source={require('../../assets/configuracoes/sair.png')}
                />
                <Text style={[Estilos.textoBotao, Estilos.sair]}>Sair</Text>
            </TouchableOpacity>

        </View>
    )
}

const Estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDFDF',
        alignItems: 'center',
    },
    containerBotão: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 24,
        // marginRight:'auto',
        // width:'90%',

    },
    textoBotao: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: 'center',
        marginLeft: 40
    },
    sair: {
        marginLeft: 20,

    }
})

export default Configuracoes;