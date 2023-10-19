import React from "react";
import { View, StyleSheet } from "react-native";

// Componente de linhas horizintais do App

export default function Linha() {
    return (
        <View style={Estilos.linha}/>
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
        marginTop:'2%',
        marginBottom:'2%'
    }
})