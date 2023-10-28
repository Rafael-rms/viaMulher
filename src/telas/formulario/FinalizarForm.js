import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Cabecalho from "../../componentes/Cabecalho";
import Linha from "../../componentes/Linha";

export default function ({navigation}) {
    return (
        <View style={Estilos.container}>

            <Cabecalho
                texto="Formulário"
                imagemEsquerda={require('../../assets/voltar.png')}
                imagemDireita={require('../../assets/home.png')}
                botaoEsquerda={{
                    onPress: () => navigation.goBack(),
                }} 
                botaoDireita={{
                    onPress: () => navigation.navigate('Home'),
                }}/>

            <Linha />

            <View style={Estilos.containerCard}>
                <Text style={Estilos.textosTitulos}>Nome da usuaria</Text>
                <Text style={Estilos.textosDados}>Nome da usuaria</Text>
                <Text style={Estilos.textosTitulos}>Data de Nascimento</Text>
                <Text style={Estilos.textosDados}>00/00/0000</Text>
                <Text style={Estilos.textosTitulos}>Data da realização</Text>
                <Text style={Estilos.textosDados}>00/00/0000</Text>

                <TouchableOpacity style={Estilos.botaoExibirForm}>
                    <Text style={Estilos.textoExibirForm}>Exibir Formulário</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const Estilos = StyleSheet.create({
    container: {
        backgroundColor: '#FFDFDF',
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    containerCard: {
        backgroundColor: '#EDCECE',
        width: '90%',
        height: '60%',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        marginTop:60
    },
    textosTitulos: {
        fontSize: 30,
        fontWeight:'bold',
        margin:10
    },
    textosDados: {
        fontSize: 25
    },
    botaoExibirForm:{
        backgroundColor:'#D69595',
        height:40,
        width:'65%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'10%',
        borderRadius:20
    },
    textoExibirForm:{
        fontSize:25,
        fontWeight:'bold'
    }
})