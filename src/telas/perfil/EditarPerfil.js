import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import Cabecalho from "../../componentes/Cabecalho";
import Linha from "../../componentes/Linha";
import { capturaDadosUsuario } from "../../servicos/req";
import { auth } from "../../config/firebase";
import { Button, TextInput } from "react-native-paper";
import { db } from "../../config/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { getAuth, updateEmail,updateProfile, reauthenticateWithCredential  } from "firebase/auth";
import CardDeletarPerfil from "./CardDeletarPerfil";

export default function EditarPerfil({ navigation }) {
    const [dadosUsuario, setDadosUsuario] = useState([])
    const [novoEmail, setNovoEmail] = useState('')
    const [nome, setNome] = useState('')
    const [nascimento, setNascimento] = useState('')
    const [celular, setCelular] = useState('')
        // Utiliza o useState para controlar o estado do componente, começando como falso
        const [card, setCard] = useState(false);

        const Card = () => {
            setCard(!card);
        };
    


    useEffect(() => {
        auth.onAuthStateChanged(usuario => {
            if (usuario) {
                const result = usuario.uid
                //console.log(result)
                // Função para carregar os dados do Firestore
                async function carregarDadosFirestore() {
                    const users = await capturaDadosUsuario(result)
                    setDadosUsuario(users)
                }
                carregarDadosFirestore()
            }
        })
    }, [])


    async function update() {
        
        try {
            await updateDoc(doc(db, 'usuarios', dadosUsuario.id), { nome, celular, nascimento })
        }
        catch (err) {
            console.log(err)
        }

        console.log(dadosUsuario)
    }


    return (
<ScrollView>
        <View style={Estilos.container}>
            <Cabecalho
                texto="Perfil"
                imagemEsquerda={require('../../assets/voltar.png')}
                botaoEsquerda={{
                    onPress: () => navigation.goBack(''),
                }}
            />
            <Linha />
            <View>
                <Image source={require('../../assets/avatar.png')} />
            </View>
            <View style={Estilos.containerInformacoes}>
                <Text style={Estilos.textMinhasInformacoes}>Minhas Informações</Text>

                <Text style={Estilos.textosTitulos}>Nome</Text>
                <TextInput style={Estilos.textosDados}>{dadosUsuario.nome}</TextInput>

                <Text style={Estilos.textosTitulos}>Data de Nascimento</Text>
                <TextInput placeholder={dadosUsuario.nascimento}
                    onChangeText={setNascimento}
                    value={nascimento}
                ></TextInput>

                <Text style={Estilos.textosTitulos}>Email</Text>
                <Text style={Estilos.textosDados}>{dadosUsuario.email}</Text>

                <Text style={Estilos.textosTitulos}>Telefone</Text>
                <TextInput placeholder={dadosUsuario.celular}
                    onChangeText={setCelular}
                    value={celular}
                ></TextInput>


                <TouchableOpacity
                    style={Estilos.botaoSalvar}
                    onPress={() => { update() }}>
                    <Text style={Estilos.textoBotao}>Salvar</Text></TouchableOpacity>
                <View style={Estilos.containerCard}>
                {!card ? (
                    <TouchableOpacity
                    style={Estilos.botaoDeletar}
                    onPress={Card}>
                    <Text style={Estilos.textoBotao}>Deletar Conta</Text>
                    </TouchableOpacity>

                ): (
                    <CardDeletarPerfil
                    navigation = {navigation}
                    />

                )}
                </View>
                    
            </View>
        </View>
        </ScrollView>
    )
}

const Estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDFDF',
        alignItems: 'center',
    },
    botaoSalvar: {
        backgroundColor: "#D69595",
        marginTop: "3%",
        borderRadius: 20,
        width: 120,
        minwidth: "40%",
        height: 30,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'center'
    },
    botaoDeletar:{
        backgroundColor: "#DE3E26",
        marginTop: "3%",
        marginBottom:"3%",
        borderRadius: 20,
        width: 120,
        minwidth: "40%",
        height: 30,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'center'
    },
    textoBotao: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },
    textMinhasInformacoes: {
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: "400"
    },
    containerInformacoes: {
        // backgroundColor:'green',
        width: '90%',
        marginTop: '1%'
    },
    containerCard: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    entrada: {
        height: 30,
        maxHeight: 30
    },
    textosTitulos: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textosDados: {
        fontSize: 18,
        fontWeight: '500',
        color: 'gray',
        marginBottom: '1%'
    }
})