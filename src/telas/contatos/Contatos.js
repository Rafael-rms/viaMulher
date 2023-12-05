import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground, Button } from 'react-native'
import CardContatos from './componentes/CardContatos';
import Cabecalho from '../../componentes/Cabecalho';
import Linha from '../../componentes/Linha';
import { auth } from '../../config/firebase';
import {capturaDadosUsuario, capturaDadosContatos } from '../../servicos/req';
import { apiSms } from '../../servicos/apiSms';
import { requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    } from 'expo-location'

// Criando o componente Contatos
export default Contatos = ({ navigation }) => {



    // Utiliza o useState para controlar o estado do componente, começando como falso
    const [card, setCard] = useState(false);
    const [dadosUsuario, setDadosUsuario] = useState([])
    const [telefoneContatos, setTelefoneContatos] = useState([])
    const [localizacao, setLocalizacao] = useState([])


    useEffect(() => {
        auth.onAuthStateChanged(usuario => {
            if (usuario) {
                const result = usuario.uid
                //console.log(result)
                // Função para carregar os dados do Firestore
                async function carregarDadosFirestore() {
                    const users = await capturaDadosUsuario(result)
                    const contatos = await capturaDadosContatos(result)
                    setTelefoneContatos(contatos)
                    setDadosUsuario(users)
                }
                carregarDadosFirestore()
                permissaoLocalizacao()

            }
        })
    }, [])


    const Card = () => {
        setCard(!card);
    };

    async function permissaoLocalizacao(){
        const {granted} = await requestForegroundPermissionsAsync()

        if (granted){
            const pegarLocalizacao = await getCurrentPositionAsync()
            setLocalizacao(pegarLocalizacao)
            
            

        }
    }

    return (
        // utilizando uma imagem como plano de fundo
        <ImageBackground source={require('../../assets/contatosFundo.png')} style={Estilos.container} resizeMode="contain">
            {/* Chamda do componente cabeçalho */}
            <Cabecalho
                texto="Contatos"
                imagemEsquerda={require('../../assets/voltar.png')}
                botaoEsquerda={{
                    onPress: () => navigation.goBack(),
                }} />


            <Linha />
            <>

                {/* Renderiza o botão adicionar contatos ou o card de contatos */}
                <View style={Estilos.containerCard}>

                    {!card ? (
                        // Botão para adicionar contatos (exibido quando 'card' é falso)
                        <TouchableOpacity
                            onPress={Card}
                            style={Estilos.botaoContatos}>
                            <Text style={Estilos.textoBotaoContatos}>Adicionar Contatos</Text>
                        </TouchableOpacity>
                    ) : (
                        // Renderiza o componente CardContatos quando 'card' é verdadeiro
                        <CardContatos
                        // navigation={navigation}
                        />

                    )}

                </View>
                        { telefoneContatos &&(
                            <TouchableOpacity style={Estilos.botaoListar}
                        onPress={() => navigation.navigate('NovosContatos')}
                        ><Text style={Estilos.textoBotaoListar}>Listar Contatos</Text></TouchableOpacity>
                        )

                        }
                
            </>
        </ImageBackground>
    )
}

// Estilos da tela de contatos
const Estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDFDF',
        alignItems: 'center',
    },
    botaoContatos: {
        backgroundColor: '#D69595',
        width: '60%',
        minWidth: '60%',
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '100%',
    },
    textoBotaoContatos: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    containerCard: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    botaoListar:{
        backgroundColor:"#D69595",
        marginTop:"1%",
        marginBottom:"10%",
        borderRadius:20,
        width:135,
        minwidth:"40%",
        height:30,
        alignItems:"center",
        justifyContent:'center',
        
    },
    textoBotaoListar: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }

})

