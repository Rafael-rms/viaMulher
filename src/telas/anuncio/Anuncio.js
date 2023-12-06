
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image  } from "react-native";
import { auth } from "../../config/firebase";
import {capturaDadosContatos, capturaDadosUsuario} from '../../servicos/req'
import { apiSms } from "../../servicos/apiSms";
import { requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    } from 'expo-location';


function Anuncio ({navigation}) {

    const [telefoneContatos, setTelefoneContatos] = useState([])
    const [dadosUsuario, setDadosUsuario] = useState([])
    const [localizacao, setLocalizacao] = useState([])


useEffect(() => {
        auth.onAuthStateChanged(usuario => {
            if (usuario) {
                const result = usuario.uid
                //console.log(result)
                // Função para carregar os dados do Firestore
                async function carregarDadosFirestore() {
                    const users = await capturaDadosUsuario(result)
                    const contatos = await capturaDadosContatos(result)
                    setTelefoneContatos(contatos)
                    setDadosUsuario(users)
                }
                carregarDadosFirestore()
                permissaoLocalizacao()

            }
        })
    }, [])

    async function permissaoLocalizacao(){
        const {granted} = await requestForegroundPermissionsAsync()

        if (granted){
            const pegarLocalizacao = await getCurrentPositionAsync()
            setLocalizacao(pegarLocalizacao)
            
            

        }
    }

    async function sms() {
            try {
                apiSms.post('/channels/whatsapp/messages', {
                    from: 'carnelian-keeper',
                    to: `${telefoneContatos.celular}`,
                    contents: [{
                        type: 'text',
                        text:`Oi, sou ${dadosUsuario.nome} e nesse momento estou
                        Precisando de ajuda, estou no endereço: https://www.google.com/maps/search/?api=1&query=${localizacao.coords.latitude},${localizacao.coords.longitude}
                        se nao acessar a rota, estou na LATITUDE: ${localizacao.coords.latitude} e na LONGITUDE: ${localizacao.coords.longitude}`
                    }]

                }, {
                    headers: {
                    'X-API-TOKEN':"7xjkY2Kvj2iur1Rh4aVWQACf6hXOsNmAgKJi "
                    // Token antigoZptn4IwxijdaYMIOVKM-EfQDYijyaDTN8x4I
                    }
                }).then(res => console.log("sucesso", res))
                    .catch(er => console.log(er))
                
            }
            catch (er) {
                console.log(er)
            }

        console.log(localizacao.coords.latitude)
        console.log(localizacao.coords.longitude)

    }



    return(
        <View style={Estilos.container}>
            <TouchableOpacity style={Estilos.imagem} onPress={() => {sms()}}>
            <Image style={Estilos.imagem} source={require('../../assets/Anuncio2.jpg')} />
            </TouchableOpacity>
            
            <TouchableOpacity style={Estilos.botaoFechar} onPress={()=>{navigation.navigate('Login')}}>
                <Text style={Estilos.textoBotao}>Fechar</Text>
            </TouchableOpacity>
        </View>
    )
}

const Estilos = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#FFDFDF",
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem:{
        width:'100%',
        height:'100%',
        alignSelf:'center'
    },
    botaoFechar:{
        backgroundColor:'rgba(87, 89, 110, 0.7)',
        borderRadius: 20,
        position:'absolute',
        right:'2%',
        top:'4%',
        height:'3.5%',
        width:'14.5%'
    },
    textoBotao:{
        textAlign:'center',
        color:'white'
    }
})

export default Anuncio