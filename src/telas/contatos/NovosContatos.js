import { View, StyleSheet, TouchableOpacity, Text, ImageBackground, Button } from 'react-native';
import Cabecalho from '../../componentes/Cabecalho';
import Linha from '../../componentes/Linha';

export default NovosContatos = ({ navigation }) => {
    return (
        // utilizando uma imagem como plano de fundo
        <ImageBackground source={require('../../assets/contatosFundo.png')} style={Estilos.container} resizeMode="contain">
            {/* Chamda do componente cabeçalho */}
            <Cabecalho
                texto="Contatos"
                imagemEsquerda={require('../../assets/voltar.png')}
                botaoEsquerda={{
                    onPress: () => navigation.goBack(),
                }} />

            <Linha />

            <View style={Estilos.cards}>
                <View style={Estilos.card} >
                    <Text style={Estilos.textoCard}>Nome:   </Text>
                    <Text style={Estilos.textoCard}>Nome Dele(a)</Text>
                </View>
                <View style={Estilos.card} >
                    <Text style={Estilos.textoCard}>Celular:   </Text>
                    <Text style={Estilos.textoCard}>Celular</Text>
                </View>    
            </View>
            <View style={Estilos.cards}>
                <View style={Estilos.card} >
                    <Text style={Estilos.textoCard}>Nome:   </Text>
                    <Text style={Estilos.textoCard}>Nome Dele(a)</Text>
                </View>
                <View style={Estilos.card} >
                    <Text style={Estilos.textoCard}>Celular:   </Text>
                    <Text style={Estilos.textoCard}>Celular</Text>
                </View>    
            </View>
            <View style={Estilos.cards}>
                <View style={Estilos.card} >
                    <Text style={Estilos.textoCard}>Nome:   </Text>
                    <Text style={Estilos.textoCard}>Nome Dele(a)</Text>
                </View>
                <View style={Estilos.card} >
                    <Text style={Estilos.textoCard}>Celular:   </Text>
                    <Text style={Estilos.textoCard}>Celular</Text>
                </View>    
            </View>

            
            
        </ImageBackground>
    )
}

const Estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDFDF',
        alignItems: 'center',
    },
    cards: {
        backgroundColor: '#D69595',
        marginTop:20,
        height:80,
        width:'90%',
        minWidth:'90%',
        borderRadius:20,
        justifyContent:'center'
        
    },
    card:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    textoCard:{
        fontSize:20,
        color:'white',
        left:20
    }
})