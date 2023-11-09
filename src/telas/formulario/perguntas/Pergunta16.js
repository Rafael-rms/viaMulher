import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Button } from 'react-native'
import Cabecalho from '../../../componentes/Cabecalho'
import Linha from '../../../componentes/Linha'
import Caixa from '../componentes/Caixa'
import Botao from '../componentes/Botao'
import { useEffect, useState } from 'react'
import { auth, db } from '../../../config/firebase'
import { capturaDados, capturaDadosUsuario } from '../../../servicos/req'
import moment from 'moment/moment'
import { styles } from './styles'
import { updateDoc, doc } from 'firebase/firestore'
export default function Pergunta16({ navigation }) {
    const [resposta16, setResposta16] = useState('')
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
        await updateDoc(doc(db, "formulario", dadosUsuario.id),{resposta16})
        navigation.navigate('Pergunta17')
    }


    return (
        <ScrollView>
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
                    <Text style={[styles.textUsuario, { marginLeft: '70%' }]}>16/19</Text>
                </>

                {/* caixa de perguntas do formulário */}
                <Caixa 
                texto="A senhora/você já teve ou tem medida protetiva de urgência?(Caso não tenha tido medidas protetivas de urgência antes,o registro não se aplica.)
                O(A) agressor(a) já descumpriu medida protetiva de afastamento ou proibição de contato?"/>

                <View>
                    {/* Botões do formulário */}
                    <Botao onPress={() => {setResposta16("Sim")}} texto="Sim"></Botao>
                    <Botao onPress={() => {setResposta16("Não")}} texto="Não"></Botao>
                    <Botao onPress={() => {setResposta16("Não sabe")}} texto="Não sabe"></Botao>
                    <Botao onPress={() => {setResposta16("Não se aplica")}} texto="Não se aplica"></Botao>


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
