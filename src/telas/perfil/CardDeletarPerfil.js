import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { getAuth, deleteUser } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

async function Deletar() {
    console.log(user)

    deleteUser(user).then(() => {
        console.log('Deletado')
        navigation.navigate('Login')
    }).catch((error) => {
    console.log(error)
    });
}

export default CardDeletarPerfil = ({ navigation }) => {

    return (
        <View style={Estilos.card}>

            <View style={Estilos.containerEntrada}>
                <Text>Você tem certeza que deseja excluir sua conta?</Text>
            </View>
            <TouchableOpacity
                style={Estilos.botao}
                onPress={() => { Deletar()}}>
                <Text style={Estilos.textoBotao}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Estilos.botao}
                onPress={() => { navigation.navigate('EditarPerfil') }}>
                <Text style={Estilos.textoBotao}>Não</Text>
            </TouchableOpacity>
        </View>
    );
};

const Estilos = StyleSheet.create({
    card: {
        height: 220,
        width: '90%',
        minWidth: '90%',
        backgroundColor: '#EDCECE',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
    
    },
    containerEntrada: {
        alignItems: 'center',
        marginBottom: 10,
    },
    botao: {
        backgroundColor: '#D69595',
        width: '60%',
        minWidth: '60%',
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
    },
    textoBotao: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});
