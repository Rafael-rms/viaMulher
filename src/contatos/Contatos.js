import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Text, TextInput, ImageBackground } from 'react-native'
import CardContatos from '../contatos/componentes/CardContatos';
import Cabecalho from '../componentes/Cabecalho';

export default Contatos = ({navigation})=>{
    const [card, setCard] = useState(false);

    const Card = () => {
        setCard(!card);
    };

    return (
        <ImageBackground source={require('../assets/contatosFundo.png')} style={Estilos.container} resizeMode="contain">
                <Cabecalho 
                texto="Contatos"
                imagemEsquerda={require('../assets/voltar.png')}
                botaoEsquerda={{
                    onPress: ()=>navigation.goBack(),
                }}/>

                <View style={Estilos.linha}/>

                <>
                        <View style={Estilos.containerCard}>
                        {!card ? (
                            <TouchableOpacity 
                            onPress={Card}
                            style={Estilos.botaoContatos}>
                                <Text style={Estilos.textoBotaoContatos}>Adicionar Contatos</Text>
                            </TouchableOpacity>
                        ) : (
                            <>
                            <CardContatos navigation={navigation}/>
                            </>
                        )}
                        </View>
                </>
        </ImageBackground>
    )
}

const Estilos = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFDFDF',
        alignItems:'center',
    },
    linha:{
        width:'100%',
        height:2,
        backgroundColor:'black',
        marginTop:'4%'
    },
    botaoContatos:{
        backgroundColor:'#D69595',
        width:'60%',
        minWidth:'60%',
        height:50,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginTop:'100%',
    },
    textoBotaoContatos:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    containerCard:{
        alignItems:'center',
        justifyContent:'center',
         flex:1
    }
})

