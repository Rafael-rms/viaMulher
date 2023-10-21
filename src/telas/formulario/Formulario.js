import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ImageBackground } from 'react-native'
import CardFormulario from './componentes/CardFormulario';
import Cabecalho from '../../componentes/Cabecalho';
import Linha from '../../componentes/Linha';


// Criando componente Formulario
export default Formulario = ({ navigation }) => {
    // Utiliza o useState para controlar o estado do componente, começando como falso
    const [card, setCard] = useState(false);

    const Card = () => {
        setCard(!card);
    };

    return (
        // utilizando uma imagem como plano de fundo
        <ImageBackground source={require('../../assets/formularioFundo.png')} style={Estilos.container} resizeMode="contain">

            {/* Chamando componente cabecalho */}
            <Cabecalho
                texto="Formulário"
                imagemEsquerda={require('../../assets/voltar.png')}
                botaoEsquerda={{
                    onPress: () => navigation.goBack(),
                }} />

            <Linha />

            <>

                {/* Renderiza o botão adicionar Formulario ou o card de contatos */}
                <View style={Estilos.containerCard}>
                    {!card ? (
                        <TouchableOpacity
                            onPress={Card}
                            style={Estilos.botaoContatos}>
                            <Text style={Estilos.textoBotaoContatos}>Adicionar Formulário</Text>
                        </TouchableOpacity>
                    ) : (
                        // Renderiza o componente CardContatos quando 'card' é verdadeiro
                        <CardFormulario
                        navigation={navigation}
                        />

                    )}
                </View>
            </>
        </ImageBackground>
    )
}

// Estilos da tela de Formulario
const Estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDFDF',
        alignItems: 'center',
    },
    botaoContatos: {
        backgroundColor: '#D69595',
        width: '60%',
        minWidth: '60%',
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '100%',
    },
    textoBotaoContatos: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    containerCard: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})

