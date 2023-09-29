import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";

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
        marginRight: 'auto',

    },
    textoBotao: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: 'center',
        marginLeft: 40
    },
    sair: {
        // marginLeft: 20,
        // justifyContent: 'center'

    }
})