import { View, StyleSheet, Image, Text } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';
import Botao1 from './componente/Botao';

export default Home = ({navigation}) => {
    return (
        <View style={styles.container}>   
            {/* Cabeçalho */}
                <Cabecalho 
                texto="Home"
                imagemDireita={require('../../assets/configuracoes.png')}
                botaoDireita={{
                    onPress: ()=>navigation.goBack(''),
                }}/>

            {/* Container de foto e nome de usuaria */}
            <View style={styles.containerFoto}> 
                <Image style={{height:'70%'}} source={require('../../assets/avatar.png')}/>
                <Text style={styles.nomeUsuario}>Nome Usuário</Text>
            </View>

            {/* Container de botoes da tela home */}
            <View style={styles.containerBotoes}>  
                
                <Botao1
                style={{borderTopLeftRadius: 20}}
                onpress={()=>navigation.navigate("Perfil")}
                textoBotao="Perfil"
                imagemBotao={require('../../assets/teste/perfilColo.png')}/>

                <Botao1
                style={{borderTopRightRadius:20}}
                onpress={()=>navigation.navigate('Pergunta1')}
                textoBotao="Formulário"
                imagemBotao={require('../../assets/teste/form.png')}/>

                <Botao1
                onpress={()=>navigation.navigate('Contatos')}
                textoBotao="Contatos"
                imagemBotao={require('../../assets/contatos.png')}/>

                <Botao1
                onpress={()=>navigation.navigate('Denuncias')}
                textoBotao="Denúncias"
                imagemBotao={require('../../assets/teste/denunciascolorido.png')}/>

                <Botao1
                onpress={()=>navigation.navigate('Informacoes')}
                textoBotao="Informaçoes"
                imagemBotao={require('../../assets/teste/iinfo.png')}/>

                <Botao1
                onpress={()=>navigation.navigate('Sobre')}
                textoBotao="Sobre"
                imagemBotao={require('../../assets/sobre.png')}/>
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