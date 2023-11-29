
import { View, Text, StyleSheet, TouchableOpacity, Image  } from "react-native";


export default function Anuncio ({navigation}) {
    return(
        <View style={Estilos.container}>
            <TouchableOpacity style={Estilos.imagem}>
            <Image style={Estilos.imagem} source={require('../../assets/Anuncio2.jpg')}/>
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
        backgroundColor:'black',
        position:'absolute',
        right:'2%',
        top:'4%'
        
    },
    textoBotao:{
        color:'white'
    }
})