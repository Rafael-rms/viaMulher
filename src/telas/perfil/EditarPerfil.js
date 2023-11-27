import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import Cabecalho from "../../componentes/Cabecalho";
import Linha from "../../componentes/Linha";
import { capturaDadosUsuario } from "../../servicos/req";
import { auth } from "../../config/firebase";
import { Button, TextInput } from "react-native-paper";
import { db } from "../../config/firebase";
import { updateDoc, doc } from "firebase/firestore";
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

    const fecharCard = () => {
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
        if (nome === '' && nascimento === '' && celular === '') {
            navigation.navigate('Perfil')
        }
        if (nome === '') {
            if (nome === '' && nascimento === '') {
                await updateDoc(doc(db, 'usuarios', dadosUsuario.id), { celular })
            } else if (nome === '' && celular === '') {
                await updateDoc(doc(db, 'usuarios', dadosUsuario.id), { nascimento })
            }
        }

        if (nascimento === '') {
            if (nascimento === '' && celular === '') {
                await updateDoc(doc(db, 'usuarios', dadosUsuario.id), { nome })
            } else if (nascimento === '' && nome === '') {
                await updateDoc(doc(db, 'usuarios', dadosUsuario.id), { celular })
            }
        }
        
        if(celular === ''){        
        if (celular === '' && nome === '') {
            await updateDoc(doc(db, 'usuarios', dadosUsuario.id), { nascimento })
        } else if (celular === '' && nascimento === '') {
            await updateDoc(doc(db, 'usuarios', dadosUsuario.id), { nome })
        }
}
        else {
            await updateDoc(doc(db, 'usuarios', dadosUsuario.id), { nome, nascimento, celular })
        }


        console.log(dadosUsuario)
    }


    return (
        <View style={Estilos.container}>
            <Cabecalho
                texto="Editar Perfil"
                imagemEsquerda={require('../../assets/voltar.png')}
                botaoEsquerda={{
                    onPress: () => navigation.goBack(''),
                }}
            />
            <Linha />
            <View style={Estilos.containerCard}>
                <ScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/avatar.png')} />
                    </View>

                    <View style={Estilos.containerInformacoes}>
                        <Text style={Estilos.textMinhasInformacoes}>Minhas Informações</Text>

                        <Text style={Estilos.textosTitulos}>Nome</Text>
                        <TextInput
                            style={Estilos.entrada}
                            placeholder={dadosUsuario.nome}
                            onChangeText={setNome}
                            value={nome}
                        ></TextInput>

                        {/* <TouchableOpacity
                            style={Estilos.botaoSalvar}
                            onPress={() => {
                                update();
                            }}>
                            <Text style={Estilos.textoBotao}>Salvar</Text>
                        </TouchableOpacity>
     */}
                        <Text style={Estilos.textosTitulos}>Data de Nascimento</Text>
                        <TextInput
                            style={Estilos.entrada}
                            placeholder={dadosUsuario.nascimento}
                            onChangeText={setNascimento}
                            value={nascimento}
                        ></TextInput>

                        {/* <TouchableOpacity
                            style={Estilos.botaoSalvar}
                            onPress={() => {
                                update();
                            }}>
                            <Text style={Estilos.textoBotao}>Salvar</Text>
                        </TouchableOpacity> */}

                        <Text style={Estilos.textosTitulos}>Email</Text>
                        <Text style={Estilos.textosDados}>{dadosUsuario.email}</Text>

                        <Text style={Estilos.textosTitulos}>Telefone</Text>
                        <TextInput
                            style={Estilos.entrada}
                            placeholder={dadosUsuario.celular}
                            onChangeText={setCelular}
                            value={celular}
                        />

                        <TouchableOpacity
                            style={Estilos.botaoSalvar}
                            onPress={() => {
                                update();
                            }}
                            disabled={card}>
                            <Text style={Estilos.textoBotao}>Salvar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={Estilos.botaoDeletar}
                            onPress={Card}
                            disabled={card}>
                            <Text style={Estilos.textoBotao}>Deletar Conta</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                {card && <CardDeletarPerfil onPress={fecharCard} />}
            </View>
        </View>
    );
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
    botaoDeletar: {
        backgroundColor: "#DE3E26",
        marginTop: "3%",
        marginBottom: "3%",
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
        fontWeight: "400",
    },
    containerInformacoes: {
        // backgroundColor:'green',
        width: '95%',
        minWidth: '95%',
        marginTop: '1%',
        alignSelf: 'center'
    },
    containerCard: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    entrada: {
        height: 30,
        maxHeight: 30,
        width: '100%',
        minWidth: '100%',
        alignSelf: 'center'
    },
    textosTitulos: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textosDados: {
        fontSize: 18,
        fontWeight: '500',
        color: 'gray',
        marginBottom: '1%',
        height: 20,
        maxHeight: 20
    }
})