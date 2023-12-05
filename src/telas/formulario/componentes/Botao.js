import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function Botao({onPress, texto, ativo, onDesativar}) {

    const pressionado = () => {
        onDesativar(); 
        onPress();
    };
    
    return (
        <View>
            {/* Botões do formulário */}
            <TouchableOpacity
                onPress={pressionado}
                style={[Estilos.botaoPergunta, ativo ? Estilos.botaoPressionado : null]}>
                <Text style={[Estilos.texto, ativo ? Estilos.textoPressinado : null]}>{texto}</Text>
            </TouchableOpacity>

        </View>
    )
}

const Estilos = StyleSheet.create({
    botaoPergunta:{
        backgroundColor: "#EFEFEF",
        minWidth:'94%',
        height: 65,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        margin:'2%',
    },
    texto:{
        fontSize:25,
        fontWeight:'bold'
    },
    textoPressinado:{
        fontSize:25,
        color: 'white'
    },
    botaoPressionado: {
        backgroundColor: "#E6AFAF", 
    },
})