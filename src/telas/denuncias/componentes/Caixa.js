import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";


// Criando componente caixa que será exibido com os textos na tela de denuncias
export default function Caixa({ titulo, texto, imagem, onPress }) {
    return (
        <View style={Estilos.caixaDenuncias}>
            <Text style={Estilos.texoTituloCaixa}>{titulo}</Text>
            <View style={Estilos.linha} />
            <Text style={Estilos.textoCaixa}>{texto}</Text>

            <TouchableOpacity onPress={onPress}>
                <Image 
                source={imagem} />
            </TouchableOpacity>
        </View>
    )
}

// Estilos do componente
const Estilos = StyleSheet.create({
    linha: {
        width: '90%',
        height: 2,
        backgroundColor: 'black',
        marginTop: '4%',
    },
    caixaDenuncias: {
        backgroundColor: '#EDCECE',
        margin: '3%',
        height: 'auto',
        width: '94%',
        alignItems: 'center',
        borderRadius: 20,
        paddingBottom: '1%'
    },
    texoTituloCaixa: {
        marginTop: '3%',
        fontSize: 23,
        fontWeight: 'bold'
    },
    imagemIcon:{
        position:'absolute',
        top:'19%',
        width:'38%',
        height:'75%'
    },
    textoCaixa: {
        fontSize: 20,
        padding: '4%',
        textAlign: 'justify',

    }
})