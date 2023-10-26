import { View, StyleSheet, Image, Text } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';
import Botao from './componente/Botao';
import { useEffect, useState } from 'react';
import { capturaDados } from '../../servicos/banco';
import { auth } from '../../config/firebase';





export default Home = ({navigation}) => {
    const [dadosUsuario, setDadosUsuario] = useState([])
    

    useEffect(() => {
    auth.onAuthStateChanged(usuario => {
        if (usuario) {
            const result = usuario.uid
            //console.log(result)

            // Função para carregar os dados do Firestore
            async function carregarDadosFirestore(){
            const users = await capturaDados(result)
                setDadosUsuario(users)
        }
        carregarDadosFirestore()
        }
    })
    },[])




    
    return (
        <View style={styles.container}>   
            {/* Cabeçalho */}
                <Cabecalho 
                texto="Início"
                imagemDireita={require('../../assets/configuracoes.png')}
                botaoDireita={{
                    onPress: ()=>navigation.navigate('Configuracoes'),
                }}/>

            {/* Container de foto e nome de usuaria */}
            <View style={styles.containerFoto}> 
                <Image style={{height:'70%'}} source={require('../../assets/avatar.png')}/>
                <Text style={styles.sejaBemVindo}>Seja bem vindo</Text>
                <Text style={styles.nomeUsuario}>{dadosUsuario.nome}</Text>
            </View>

            {/* Container de botoes da tela home */}
            <View style={styles.containerBotoes}>  
                
                <Botao
                style={{borderTopLeftRadius: 20}}
                onpress={()=>navigation.navigate("Perfil")}
                texto="Perfil"
                imagem={require('../../assets/teste/perfilColo2.png')}/>

                <Botao
                style={{borderTopRightRadius:20}}
                onpress={()=>navigation.navigate('Formulario')}
                texto="Formulário"
                imagem={require('../../assets/teste/form.png')}/>

                <Botao
                onpress={()=>navigation.navigate('Contatos')}
                texto="Contatos"
                imagem={require('../../assets/contatos.png')}/>

                <Botao
                onpress={()=>navigation.navigate('Denuncias')}
                texto="Denúncias"
                imagem={require('../../assets/teste/denunciascolorido.png')}/>

                <Botao
                onpress={()=>navigation.navigate('Informacoes')}
                texto="Informaçoes"
                imagem={require('../../assets/teste/iinfo.png')}/>

                <Botao
                onpress={()=>navigation.navigate('Sobre')}
                texto="Sobre"
                imagem={require('../../assets/sobre.png')}/>
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
        fontWeight:'500',
        fontSize:25,
    },
    sejaBemVindo:{
        fontWeight:'500',
        fontSize:15,
        marginTop:'3%'
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