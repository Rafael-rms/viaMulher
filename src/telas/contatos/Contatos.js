import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text,  ImageBackground } from 'react-native'
import CardContatos from './componentes/CardContatos';
import Cabecalho from '../../componentes/Cabecalho';
import Linha from '../../componentes/Linha';

// Criando o componente Contatos
export default Contatos = ({ navigation }) => {
    // Utiliza o useState para controlar o estado do componente, começando como falso
    const [card, setCard] = useState(false);


    const Card = () => {
        setCard(!card);
    };

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

            <>

                {/* Renderiza o botão adicionar contatos ou o card de contatos */}
                <View style={Estilos.containerCard}>
                    {!card ? (
                        // Botão para adicionar contatos (exibido quando 'card' é falso)
                        <TouchableOpacity
                            onPress={Card}
                            style={Estilos.botaoContatos}>
                            <Text style={Estilos.textoBotaoContatos}>Adicionar Contatos</Text>
                        </TouchableOpacity>
                    ) : (
                        // Renderiza o componente CardContatos quando 'card' é verdadeiro
                        <CardContatos
                        // navigation={navigation}
                        />

                    )}
                </View>
            </>
        </ImageBackground>
    )
}

// Estilos da tela de contatos
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

