import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import Cabecalho from '../../componentes/Cabecalho'

export default function Pergunta01({navigation}) {
    return(
         <ScrollView>
            <View style={styles.container}>
                <Cabecalho 
                texto="Sobre"
                imagemEsquerda={require('../../assets/voltar.png')}
                imagemDireita={require('../../assets/home.png')}
                botaoEsquerda={{
                    onPress: ()=>navigation.goBack(),
                }}
                botaoDireita={{
                    onPress: ()=>navigation.goBack(''),
                }}/>

                <>
                    <Text style={[styles.textUsuario, {fontSize:22}]}>Nome do usuário</Text>
                    <Text style={styles.textUsuario}>00/00/0000</Text>
                    <Text style={[styles.textUsuario, {marginLeft:'70%'}]}>01/19</Text>
                </>

                {/* caixa de perguntas do formulário */}
                <View style={styles.caixaPergunta}>
                    <Text style={styles.textoCaixaPergunta}> A senhora/você tem filhos(as) com o(a) agressor(a)? (Caso não tenham filhos em comum, o registro não se aplica)
                    Em caso afirmativo, estão vivendo algum conflito com relação àguarda dos filhos, visitas ou pagamento de pensão pelo agressor?</Text>
                </View>

                <View style={styles.containerBotoes}> 
                    {/* Botões do formulário */}
                    <TouchableOpacity 
                    onPress={()=>{}}
                    style={styles.botaoPergunta}>
                        <Text>SIM</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={()=>{}}
                    style={styles.botaoPergunta}>
                        <Text>NÃO</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={()=>{}}
                    style={styles.botaoPergunta}>
                        <Text>NÃO SABE</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={()=>{}}
                    style={styles.botaoPergunta}>
                        <Text>NÃO SE APLICA</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={()=>{}}
                    style={styles.botaoProximo}>
                        <Text style={styles.textoProximo}>Próximo</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
         </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFDFDF',
        alignItems:'center',
    },
    containerBotoes:{
        marginBottom:'20%'
    },
    caixaPergunta:{
        backgroundColor: '#EDCECE',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        //margin:'3%',
        height:'26%',
        width:'94%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    textUsuario:{
        fontSize:18,
        fontWeight:'bold'
    },
    textoCaixaPergunta:{
        fontWeight:'bold',
        fontSize:18
    },
    botaoPergunta:{
        backgroundColor: "#EFEFEF",
        minWidth:'94%',
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        margin:'2%',
    },
    botaoProximo:{
        backgroundColor: "#D69595",
        width:140,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        margin:'5%',
        marginLeft: 'auto',
    },
    textoProximo:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
    }
})