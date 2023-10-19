import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";

// Criando componente Botao para tela de configurações
export default function Botao({ onPress, imagem, texto }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={Estilos.containerBotão}>
            <Image
                style={Estilos.imagem}
                source={imagem} />
            <Text style={Estilos.textoBotao}>{texto}</Text>
        </TouchableOpacity>
    )
}

// Estilos do componente
const Estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDFDF',
        alignItems: 'center',
    },
    containerBotão: {
        flexDirection: 'row',
        alignItems: 'center',

        margin: '7%',
        marginRight: 'auto',

    },
    textoBotao: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: 'center',
        marginLeft: 40
    }
})