import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import Cabecalho from '../../../componentes/Cabecalho'
import Linha from '../../../componentes/Linha'
import Caixa from '../componentes/Caixa'
import Botao from '../componentes/Botao'
import { useEffect, useState } from 'react'
import { auth, db } from '../../../config/firebase'
import { capturaDadosUsuario } from '../../../servicos/req'
import moment from 'moment/moment'
import { styles } from './styles'
import { updateDoc, doc } from 'firebase/firestore'

export default function Pergunta04({ navigation }) {
    const [resposta04, setResposta4] = useState('')
    const [dadosUsuario, setDadosUsuario] = useState([])
    let dia = moment().format('DD/MM/YYYY')
    
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

    async function pegarResposta(){
        await updateDoc(doc(db, "formulario", dadosUsuario.id),{resposta04})
        navigation.navigate('Pergunta05')
    }

    return (
        <ScrollView contentContainerStyle={{flex:1}}>
            <View style={styles.container}>
                <Cabecalho
                    texto="Formulário"
                    imagemEsquerda={require('../../../assets/voltar.png')}
                    imagemDireita={require('../../../assets/home.png')}
                    botaoEsquerda={{
                        onPress: () => navigation.goBack(),
                    }}
                    botaoDireita={{
                        onPress: () => navigation.navigate('Home'),
                    }}
                />

                <Linha />

                <>
                    <Text style={[styles.textUsuario, { fontSize: 22 }]}>{dadosUsuario.nome}</Text>
                    <Text style={styles.textData}>Data de Preenchimento: {dia}</Text>
                    <Text style={[styles.textUsuario, { marginLeft: '70%' }]}>04/19</Text>
                </>

                {/* caixa de perguntas do formulário */}
                <Caixa 
                texto="O(A) agressor(a) persegue a senhora/você, demonstra ciúme excessivo, tenta controlar sua vida e as coisas que você faz (aonde você vai, com quem conversa, o tipo de roupa que usa, etc.)?"/>

                <View>
                    {/* Botões do formulário */}
                    <Botao onPress={() => {setResposta4("Sim")}} texto="Sim"></Botao>
                    <Botao onPress={() => {setResposta4("Não")}} texto="Não"></Botao>
                    <Botao onPress={() => {setResposta4("Não sabe")}} texto="Não sabe"></Botao>
                    <Botao onPress={() => {setResposta4("Não se aplica")}} texto="Não se aplica"></Botao>


                    {/* <Botao
                        onPress={() => { }}
                        texto='Próximo' 
                        style={[styles.botaoProximo]}/> */}

                    <TouchableOpacity
                        onPress={() => {pegarResposta()}}
                        style={styles.botaoProximo}>
                        <Text style={styles.textoProximo}>Próximo</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )
}

