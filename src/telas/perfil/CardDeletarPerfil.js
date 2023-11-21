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
                style={Estilos.botaoCadastrar}
                onPress={() => { Deletar()}}>
                <Text style={Estilos.textoIniciar}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Estilos.botaoCadastrar}
                onPress={() => { navigation.navigate('EditarPerfil') }}>
                <Text style={Estilos.textoIniciar}>Não</Text>
            </TouchableOpacity>
        </View>
    );
};

const Estilos = StyleSheet.create({
    card: {
        height: 200,
        width: '90%',
        minWidth: '90%',
        backgroundColor: '#EDCECE',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20
    },
    containerEntrada: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    textoCard: {
        marginRight: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    Entrada: {
        flex: 1,
        padding: 8,
    },
    botaoCadastrar: {
        backgroundColor: '#D69595',
        width: '60%',
        minWidth: '60%',
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoIniciar: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
});
