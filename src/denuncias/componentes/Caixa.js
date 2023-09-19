import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function Caixa({titulo, texto, imagem}) {
    return (
        <View style={Estilos.caixaDenuncias}>
            <Text style={Estilos.texoTituloCaixa}>{titulo}</Text>
            <View style={Estilos.linha}/>
             <Text style={Estilos.textoCaixa}>{texto}</Text>

            <TouchableOpacity>
                <Image source={imagem}/>
            </TouchableOpacity>
        </View>
    )
}

const Estilos = StyleSheet.create({
    linha:{
        width:'90%',
        height:2,
        backgroundColor:'black',
        marginTop:'4%',
    },
    caixaDenuncias:{
        backgroundColor: '#EDCECE',
        margin:'3%',
        height:'auto',
        width:'94%',
        alignItems:'center',
        borderRadius:20,
    },
    texoTituloCaixa:{
        marginTop:'3%',
        fontSize:23,
        fontWeight:'bold'
    },
    textoCaixa:{
        fontSize:20,
        padding:'4%',
        textAlign:'justify',
        
    }
})