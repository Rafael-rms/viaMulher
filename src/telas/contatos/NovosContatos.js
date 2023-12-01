import { View, StyleSheet, TouchableOpacity, Text, ImageBackground, Button } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';
import Linha from '../../componentes/Linha';
import { useEffect, useState } from 'react';
import { auth } from '../../config/firebase';
import { capturaDadosUsuario, capturaDadosContatos } from '../../servicos/req';

export default NovosContatos = ({ navigation }) => {
    const [dadosUsuario, setDadosUsuario] = useState([])
    const [telefoneContatos, setTelefoneContatos] = useState([])


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
            }
        })
    }, [])


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

            <View style={Estilos.cards}>
                <View style={Estilos.card} >
                    <Text style={Estilos.textoCard}>Nome:   </Text>
                    <Text style={Estilos.textoCard}>{telefoneContatos.nome}</Text>
                </View>
                <View style={Estilos.card} >
                    <Text style={Estilos.textoCard}>Celular:   </Text>
                    <Text style={Estilos.textoCard}>{telefoneContatos.celular}</Text>
                </View>    
            </View>
            {/* <View style={Estilos.cards}>
                <View style={Estilos.card} >
                    <Text style={Estilos.textoCard}>Nome:   </Text>
                    <Text style={Estilos.textoCard}>Nome Dele(a)</Text>
                </View>
                <View style={Estilos.card} >
                    <Text style={Estilos.textoCard}>Celular:   </Text>
                    <Text style={Estilos.textoCard}>Celular</Text>
                </View>    
            </View>
            <View style={Estilos.cards}>
                <View style={Estilos.card} >
                    <Text style={Estilos.textoCard}>Nome:   </Text>
                    <Text style={Estilos.textoCard}>Nome Dele(a)</Text>
                </View>
                <View style={Estilos.card} >
                    <Text style={Estilos.textoCard}>Celular:   </Text>
                    <Text style={Estilos.textoCard}>Celular</Text>
                </View>    
            </View> */}

            
            
        </ImageBackground>
    )
}

const Estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDFDF',
        alignItems: 'center',
    },
    cards: {
        backgroundColor: '#D69595',
        marginTop:20,
        height:80,
        width:'90%',
        minWidth:'90%',
        borderRadius:20,
        justifyContent:'center'
        
    },
    card:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    textoCard:{
        fontSize:20,
        color:'white',
        left:20
    }
})