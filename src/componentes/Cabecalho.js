import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

// Criando o componente de cabeçalho
export default function Cabecalho({ texto, imagemEsquerda, imagemDireita, botaoEsquerda, botaoDireita }) {
    return (
        // Este componente vai verificar se os botões de direita e esquerda são verdadeiros, caso seja, eles serão renderizados na tela
        <View style={Estilos.cabecalho}>
            {/* Renderiza o botão da esquerda se ele existir */}
            {botaoEsquerda && (
                <TouchableOpacity
                    style={Estilos.botaoE}
                    onPress={botaoEsquerda.onPress}>
                    <Image source={imagemEsquerda} />
                </TouchableOpacity>
            )}

            {/* Textos dos titulos das telas */}
            <View style={Estilos.tituloContainer}>
                <Text style={Estilos.textoTituloCabecalho}>{texto}</Text>
            </View>

                {/* Renderiza o botão da Direita se ele existir */}
            {botaoDireita && (
                <TouchableOpacity
                    style={Estilos.botaoD}
                    onPress={botaoDireita.onPress}>
                    <Image source={imagemDireita} />
                </TouchableOpacity>
            )}

        </View>
    )
}

//Estilos do componente cabeçalho
const Estilos = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: '2%',
        alignItems: 'center',
    },
    textoTituloCabecalho: {
        fontSize: 28,
        fontWeight: 'bold'
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

