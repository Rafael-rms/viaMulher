import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default Pergunta01 = ({navigation}) => {
    return(
        <View style={styles.container}>
            {/* Cabeçalho da tela formulário */}
            <View style={styles.cabecalho}>
                <TouchableOpacity 
                onPress={()=>navigation.navigate('Home')}>
                    <Image source={require('../assets/voltar.png')}/>
                </TouchableOpacity>

                <Text style={styles.textoCabecalho}>Formulário</Text>

                <TouchableOpacity 
                onPress={()=>navigation.navigate('Home')}>
                    <Image source={require('../assets/home.png')}/>
                </TouchableOpacity>           
            </View>

            <>
                <Text style={[styles.textUsuario, {fontSize:22}]}>Nome do usuário</Text>
                <Text style={styles.textUsuario}>00/00/0000</Text>
                <Text style={[styles.textUsuario, {marginLeft:290}]}>01/19</Text>
            </>
            {/* caixa de perguntas do formulário */}
            <View style={styles.caixaPergunta}>
                <Text style={styles.textoCaixaPergunta}> A senhora/você tem filhos(as) com o(a) agressor(a)? (Caso não tenham filhos em comum, o registro não se aplica)
                Em caso afirmativo, estão vivendo algum conflito com relação àguarda dos filhos, visitas ou pagamento de pensão pelo agressor?</Text>
            </View>
            <View>
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
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFDFDF',
        alignItems:'center',
    },
    cabecalho:{
        flexDirection: 'row',
        marginTop:30,
        alignItems:'center',
        justifyContent: 'flex-end'
    },
    textoCabecalho:{
        marginLeft:80,
        marginRight:80,
        fontSize:28,
        fontWeight: 'bold'
    },
    caixaPergunta:{
        backgroundColor: '#EDCECE',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        height:150,
        width:370,
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
        width:370,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        margin:10,
    },
    botaoProximo:{
        backgroundColor: "#D69595",
        width:140,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        margin:12,
        marginLeft: 'auto'
    },
    textoProximo:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    }
})