import { View, StyleSheet, Image } from 'react-native';
import Botao from '../componentes/Botao';
import EstilosBotao from '../estilos/EstilosBotao';

export default Home = ({navigation}) => {
    return (
        <View style={styles.container}>   
            {/* Container de foto de usuaria */}
            <View style={styles.containerFoto}> 

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
                onpress={()=>{}}
                estiloBotao={EstilosBotao.botaoHome}
                textoBotao="Contatos"
                imagemBotao={require('../assets/teste/contColorido.png')}/>

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
        backgroundColor:'#FFDFDF'
    },
    containerFoto:{
        flex:1
    },
    containerBotoes:{
        flexDirection:'row',
        flexWrap:'wrap',
        //flex:1,
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