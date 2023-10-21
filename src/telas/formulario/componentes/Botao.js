import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function Botao({onPress, texto}) {
    return (
        <View>
            {/* Botões do formulário */}
            <TouchableOpacity
                onPress={onPress}
                style={Estilos.botaoPergunta}>
                <Text style={Estilos.texto}>{texto}</Text>
            </TouchableOpacity>

        </View>
    )
}

const Estilos = StyleSheet.create({
    botaoPergunta:{
        backgroundColor: "#EFEFEF",
        minWidth:'94%',
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        margin:'2%',
    },
    texto:{
        fontSize:25
    },
})