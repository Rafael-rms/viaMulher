import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Botao from '../componentes/Botao';
import EstilosBotao from '../estilos/EstilosBotao';

export default Home = ({navigation}) => {
    return (
        <View style={styles.container}>   
            {/* Cabeçalho */}
            <View style={styles.cabecalho}>
                    <Text style={styles.textoCabecalho}>Inicio</Text>

                    <TouchableOpacity 
                    onPress={()=>navigation.navigate('Login')}>
                        <Image source={require('../assets/configuracoes.png')}/>
                    </TouchableOpacity>           
                </View>

            {/* Container de foto e nome de usuaria */}
            <View style={styles.containerFoto}> 
                <Image style={{height:'70%'}} source={require('../assets/avatar.png')}/>
                <Text style={styles.nomeUsuario}>Nome Usuário</Text>
            </View>

            {/* Container de botoes da tela home */}
            <View style={styles.containerBotoes}>  
                <Botao
                onpress={()=>{}}
                estiloBotao={[EstilosBotao.botaoHome, {borderTopLeftRadius: 20}]}
                textoBotao="Perfil"
                imagemBotao={require('../assets/teste/perfilColo.png')}/>

                <Botao
                onpress={()=>navigation.navigate('Pergunta1')}
                estiloBotao={[EstilosBotao.botaoHome, {borderTopRightRadius: 20}]}
                textoBotao="Formulário"
                imagemBotao={require('../assets/teste/form.png')}/>

                <Botao
                onpress={()=>navigation.navigate('Contatos')}
                estiloBotao={EstilosBotao.botaoHome}
                textoBotao="Contatos"
                imagemBotao={require('../assets/contatos.png')}/>

                <Botao
                onpress={()=>navigation.navigate('Denuncias')}
                estiloBotao={EstilosBotao.botaoHome}
                textoBotao="Denúncias"
                imagemBotao={require('../assets/teste/denunciascolorido.png')}/>

                <Botao
                onpress={()=>{}}
                estiloBotao={EstilosBotao.botaoHome}
                textoBotao="Informaçoes"
                imagemBotao={require('../assets/teste/iinfo.png')}/>

                <Botao
                onpress={()=>navigation.navigate('Sobre')}
                estiloBotao={EstilosBotao.botaoHome}
                textoBotao="Sobre"
                imagemBotao={require('../assets/sobre.png')}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFDFDF',
        alignItems:'center'
    },
    cabecalho:{
        flexDirection: 'row',
        marginTop:'6%',
        alignItems:'center',
        paddingLeft:'36%'
    },
    textoCabecalho:{

        marginRight:'44%',
        fontSize:28,
        fontWeight: 'bold'
    },
    linha:{
        width:'100%',
        height:2,
        backgroundColor:'black',
        marginTop:'4%'
    },
    containerFoto:{
        flex:1,
        alignItems:'center',
    },
    nomeUsuario:{
        fontWeight:'bold',
        fontSize:30,
        marginTop:'6%'
    },
    containerBotoes:{
        flexDirection:'row',
        flexWrap:'wrap',
        flex:1,
        //backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',

    },
    // botoes:{
    //     height:100,
    //     width:'50%',
    //     backgroundColor:'#FFDFDF',
    //     alignItems:'center',
    //     justifyContent:'center',
    //     borderWidth: 1,
        
    // }
})