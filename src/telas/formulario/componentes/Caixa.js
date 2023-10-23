import React from "react";
import { StyleSheet, View, Text } from "react-native";


// Criando componente caixa que será exibido com os textos na tela de denuncias
export default function Caixa({ texto }) {
    return (
        <View style={Estilos.caixa}>
            <Text style={Estilos.texto}>{texto}</Text>
        </View>
    )
}

// Estilos do componente
const Estilos = StyleSheet.create({
    caixa:{
        backgroundColor: '#EDCECE',
        marginTop:10,
        // marginLeft:10,
        // marginRight:10,
        margin:'3%',
        height:'auto',
        width:'94%',
        justifyContent:'center',
        borderRadius:20,
        padding:20
    },
    texto:{
        fontWeight:'bold',
        fontSize:22,
        textAlign:'justify'
    },
})