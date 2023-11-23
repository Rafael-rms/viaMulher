import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
//import { getAuth, deleteUser, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import { auth } from '../../config/firebase';






export default CardDeletarPerfil = ({ onPress }) => {


    // const [card, setCard] = useState(false);
    // const [senha, setSenha] = useState('')

    // const Card = () => {
    //     setCard(!card);
    // };

    // const fecharCard = () => {
    //     setCard(!card);
    // };

    // // const auth = getAuth();
    // const user = auth.currentUser;
    
    // const cred = (user.email, senha)
    
    
    
    
    // async function Deletar() {
    //     if(user){
    //         const resultado = await auth.reauthenticateWithCredential(user, cred)
    //         console.log("Deu certo", resultado)
    //     }
    
    //     deleteUser(user).then(() => {
    //         console.log('Deletado')
    //         navigation.navigate('Login')
    //     }).catch((error) => {
    //     console.log(error)
    //     });
    // }




    return (
        <View style={Estilos.card}>

            <View style={Estilos.containerEntrada}>
                <Text>Digite sua senha</Text>
            </View>
            <TextInput
            style={Estilos.entrada}
            placeholder='Digite sua senha'
            
            >

            </TextInput>
            <TouchableOpacity
                style={Estilos.botao}
                onPress={() => {Deletar()}}>
                <Text style={Estilos.textoBotao}>Deletar</Text>
            </TouchableOpacity>
        </View>
    );
};

const Estilos = StyleSheet.create({
    card: {
        height: 120,
        width: '90%',
        minWidth: '90%',
        backgroundColor: '#EDCECE',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        position:'absolute',
        marginBottom:40,
        borderColor:"blue"
    
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
    },
    entrada: {
        height: 30,
        maxHeight: 30,
        width:'100%',
        minWidth:'100%',
        alignSelf:'center',
    }
});
