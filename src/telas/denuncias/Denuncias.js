import React from "react";
import { ScrollView, View, StyleSheet, Alert, Linking } from 'react-native'
import Cabecalho from "../../componentes/Cabecalho";
import Caixa from "./componentes/Caixa";
import Linha from "../../componentes/Linha";
import { textoCAM, textoDDH, textoDM, textoPM, tituloCAM, tituloDDH, tituloDM, tituloPM } from "../../mocks/TextosDenuncias"

//Função para abrir discador

const abrirDiscador = (numeroTelefone) => {
    //let numeroSemEspaco = numeroTelefone.replace(/\s/g, ''); // Remove espaços em branco do número de telefone
    let telefoneUrl = `tel:${numeroTelefone}`;

    Linking.openURL(telefoneUrl)
        .catch((err) => console.error('Erro ao abrir o discador: ', err));
};


// Criando o componente denuncias
export default Denuncias = ({ navigation }) => {

    const numeroTelefone = '180'; // Número de telefone que você deseja discar

    const chamarCAM = () => {
        abrirDiscador(numeroTelefone);
    };


    const phoneNumber2 = '2'; // Número de telefone que você deseja discar

    const handlePhoneDialerPress2 = () => {
        openPhoneDialer(phoneNumber2);
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Chamando o componente cabecalho */}
                <Cabecalho
                    texto="Denúncias"
                    imagemEsquerda={require('../../assets/voltar.png')}
                    botaoEsquerda={{
                        onPress: () => navigation.goBack(),
                    }}
                />
                <Linha />

                {/* Chamando o componente Caixa */}
                <Caixa
                    titulo={tituloCAM}
                    texto={textoCAM}
                    imagem={require('../../assets/denuncias.png')}
                    onPress={chamarCAM}
                />
                <Caixa
                    titulo={tituloDDH}
                    texto={textoDDH}
                    imagem={require('../../assets/denuncias.png')}
                    onPress={handlePhoneDialerPress2}
                />

                <Caixa
                    titulo={tituloDM}
                    texto={textoDM}
                    imagem={require('../../assets/denuncias.png')}
                />
                <Caixa
                    titulo={tituloPM}
                    texto={textoPM}
                    imagem={require('../../assets/denuncias.png')}
                />
            </View>
        </ScrollView>
    )
}

// Estilos da tela Denúnicas
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDFDF',
        alignItems: 'center',
    }
})

