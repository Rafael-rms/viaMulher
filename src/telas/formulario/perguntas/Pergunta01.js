import { View, Text, TouchableOpacity, ScrollView, Button, StyleSheet } from 'react-native'
import Cabecalho from '../../../componentes/Cabecalho'
import Linha from '../../../componentes/Linha'
import Caixa from '../componentes/Caixa'
import { useEffect, useState } from 'react'
import { auth } from '../../../config/firebase'
import { capturaDados, capturaDadosUsuario, salvarFormulario } from '../../../servicos/req'
import moment from 'moment/moment'
import { styles } from './styles'
import { db } from '../../../config/firebase'
import Botao from '../componentes/Botao'

export default function Pergunta01({ navigation }) {

    const [resposta01, setResposta1] = useState('')
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
        const id = dadosUsuario.id
        const resul = await salvarFormulario({dadosUsuario, resposta01, id})
        console.log(resul)
        navigation.navigate('Pergunta02')
        
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
                    <Text style={[styles.textUsuario, { marginLeft: '70%' }]}>01/19</Text>
                </>

                {/* caixa de perguntas do formulário */}
                {/* <Caixa 
                texto='A senhora/você tem filhos(as) com o(a) agressor(a)? (Caso não tenham filhos em comum, o registro não se aplica)
                Em caso afirmativo, estão vivendo algum conflito com relação àguarda dos filhos, visitas ou pagamento de pensão pelo agressor?'/> */}
                <Caixa
                    texto=" A violência vem aumentando de gravidade e/ou de frequência no último mês?" />

                <View>
                    {/* Botões do formulário */}
                    <Botao onPress={() => {setResposta1("Sim")}} texto="Sim"></Botao>
                    <Botao onPress={() => {setResposta1("Não")}} texto="Não"></Botao>
                    <Botao onPress={() => {setResposta1("Não sabe")}} texto="Não sabe"></Botao>
                    <Botao onPress={() => {setResposta1("Não se aplica")}} texto="Não se aplica"></Botao>

                    {/* <Botao
                        onPress={() => { }}
                        texto='Próximo' 
                        style={[styles.botaoProximo]}/> */}

                    <TouchableOpacity
                        onPress={() => { pegarResposta() }}
                        style={styles.botaoProximo}>
                        <Text style={styles.textoProximo}>Próximo</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )
}

const style = StyleSheet.create({
    teste:{
        backgroundColor:"green"
    }
})