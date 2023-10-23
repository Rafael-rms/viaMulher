import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import Cabecalho from '../../../componentes/Cabecalho'
import Linha from '../../../componentes/Linha'
import Caixa from '../componentes/Caixa'
import Botao from '../componentes/Botao'

export default function Pergunta07({ navigation }) {
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
                    <Text style={[styles.textUsuario, { fontSize: 22 }]}>Nome do usuário</Text>
                    <Text style={styles.textUsuario}>00/00/0000</Text>
                    <Text style={[styles.textUsuario, { marginLeft: '70%' }]}>07/19</Text>
                </>

                {/* caixa de perguntas do formulário */}
                <Caixa 
                texto="A senhora/você possui algum animal doméstico? (Caso nãotenha animal doméstico, o registro não se aplica.)
                Em caso afirmativo, o(a) agressor(a) maltrata ou agride o animal?"/>

                <View>
                    {/* Botões do formulário */}
                    <Botao
                        onPress={() => { }}
                        texto='SIM' />
                    <Botao
                        onPress={() => { }}
                        texto='NÃO' />
                    <Botao
                        onPress={() => { }}
                        texto='NÃO SABE' />
                    <Botao
                        onPress={() => { }}
                        texto='NÃO SE APLICA' />

                    {/* <Botao
                        onPress={() => { }}
                        texto='Próximo' 
                        style={[styles.botaoProximo]}/> */}

                    <TouchableOpacity
                        onPress={() => {navigation.navigate('Pergunta08')}}
                        style={styles.botaoProximo}>
                        <Text style={styles.textoProximo}>Próximo</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDFDF',
        alignItems: 'center',
    },
    textUsuario: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    botaoProximo: {
        backgroundColor: "#D69595",
        width: 140,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        margin: '5%',
        marginLeft: 'auto',
    },
    textoProximo: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    }
})