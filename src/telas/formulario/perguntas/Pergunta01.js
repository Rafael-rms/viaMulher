import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert } from 'react-native'
import Cabecalho from '../../../componentes/Cabecalho'
import Linha from '../../../componentes/Linha'
import Caixa from '../componentes/Caixa'
import { useEffect, useState } from 'react'
import { auth } from '../../../config/firebase'
import {capturaDadosUsuario, salvarFormulario } from '../../../servicos/req'
import moment from 'moment/moment'
import { styles } from './styles'
import Botao from '../componentes/Botao'
import { pergunta01 } from '../../../mocks/perguntas'

export default function Pergunta01({ navigation }) {

    const [resposta01, setResposta1] = useState('')
    const [botaoAtivo, setBotaoAtivo] = useState(null);

    const botaoPressionado = (resposta) => {
        setResposta1(resposta);
        setBotaoAtivo(resposta);
    };

    const [dadosUsuario, setDadosUsuario] = useState([])
    let diaRealizado = moment().format('DD/MM/YYYY')

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
    if(resposta01 === ''){
        Alert.alert("Selecione uma resposta")
    }else{
        const id = dadosUsuario.id
        const resul = await salvarFormulario({dadosUsuario, resposta01, id, diaRealizado})
        console.log(resul)
        navigation.navigate('Pergunta02')
        
    }
    }
    


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                    <Text style={styles.textData}>Data de Preenchimento: {diaRealizado}</Text>
                    <Text style={[styles.textUsuario, { marginLeft: '70%' }]}>01/19</Text>
                </>

                {/* caixa de perguntas do formulário */}
                <Caixa
                    texto={pergunta01}/>

                <View>
                    {/* Botões do formulário */}
                    <Botao
                        onPress={() => botaoPressionado("Sim")}
                        texto="Sim"
                        ativo={botaoAtivo === "Sim"}
                        onDesativar={() => setBotaoAtivo(null)}
                    />
                    <Botao
                        onPress={() => botaoPressionado("Não")}
                        texto="Não"
                        ativo={botaoAtivo === "Não"}
                        onDesativar={() => setBotaoAtivo(null)}
                    />
                    <Botao
                        onPress={() => botaoPressionado("Não sabe")}
                        texto="Não sabe"
                        ativo={botaoAtivo === "Não sabe"}
                        onDesativar={() => setBotaoAtivo(null)}
                    />
                    <Botao
                        onPress={() => botaoPressionado("Não se aplica")}
                        texto="Não se aplica"
                        ativo={botaoAtivo === "Não se aplica"}
                        onDesativar={() => setBotaoAtivo(null)}
                    />


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