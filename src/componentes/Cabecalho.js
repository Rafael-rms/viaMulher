import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

export default function Cabecalho({ texto, imagemEsquerda, imagemDireita, botaoEsquerda, botaoDireita}) {
    return (
        <View style={Estilos.cabecalho}>
            {botaoEsquerda && (
                <TouchableOpacity 
                    style={Estilos.botaoE}
                    onPress={botaoEsquerda.onPress}>
                    <Image source={imagemEsquerda}/>
                </TouchableOpacity>
            )}
            <View style={Estilos.tituloContainer}>
                <Text style={Estilos.textoCabecalhoDenuncias}>{texto}</Text>
            </View>

            {botaoDireita && (
                <TouchableOpacity 
                    style={Estilos.botaoD}
                    onPress={botaoDireita.onPress}>
                    <Image source={imagemDireita}/>
                </TouchableOpacity>
            )}
            
        </View>
    )
}

const Estilos = StyleSheet.create({
    cabecalho:{
        flexDirection: 'row',
        marginTop:'6%',
        alignItems:'center',
    },
    textoCabecalhoDenuncias:{
        fontSize:28,
        fontWeight: 'bold'
    },
    cabecalhoSobre:{
        flexDirection: 'row',
        marginTop:'6%',
        alignItems:'center',
        paddingRight:'38%'
    },
    botaoE: {
        position: 'absolute',
        left: 15,
   
    },
    botaoD: {
        position: 'absolute',
        right: 15,
    },
    tituloContainer: {
        flex: 1,
        alignItems: 'center',
    },
    
})

