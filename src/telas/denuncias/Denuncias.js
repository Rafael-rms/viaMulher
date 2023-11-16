import React from "react";
import { ScrollView, View, StyleSheet, Alert, Linking } from 'react-native'
import Cabecalho from "../../componentes/Cabecalho";
import Caixa from "./componentes/Caixa";
import Linha from "../../componentes/Linha";
import { textoCAM, textoDDH, textoDM, textoPM, tituloCAM, tituloDDH, tituloDM, tituloPM } from "../../mocks/TextosDenuncias"

//Função para abrir discador

    const abrirDiscador = (numeroTelefone) => {
    //let numeroSemEspaco = numeroTelefone.replace(/\s/g, ''); // Remove espaços em branco do número de telefone
    const telefoneUrl = `tel:${numeroTelefone}`;

    Linking.openURL(telefoneUrl)
        .catch((err) => console.error('Erro ao abrir o discador: ', err));
};


// Criando o componente denuncias
export default Denuncias = ({ navigation }) => {

    const numeroTelefone = '180'; // Número de telefone que você deseja discar

    const chamarCAM = () => {
        abrirDiscador(numeroTelefone);
    };


    const numeroTelefone2 = '100'; // Número de telefone que você deseja discar

    const chamarDDH = () => {
        abrirDiscador(numeroTelefone2);
    };


    const numeroTelefone3 = '(11) 4198-0522'; // Número de telefone que você deseja discar

    const chamarDM = () => {
        abrirDiscador(numeroTelefone3);
    };

    const numeroTelefone4  = '190'; // Número de telefone que você deseja discar

    const chamarPM = () => {
        abrirDiscador(numeroTelefone4);
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
                    imagem={require('../../assets/call.png')}
                    onPress={chamarCAM}
                />
                <Caixa
                    titulo={tituloDDH}
                    texto={textoDDH}
                    imagem={require('../../assets/call.png')}
                    onPress={chamarDDH}
                />

                <Caixa
                    titulo={tituloDM}
                    texto={textoDM}
                    imagem={require('../../assets/call.png')}
                    onPress={chamarDM}
                />
                <Caixa
                    titulo={tituloPM}
                    texto={textoPM}
                    imagem={require('../../assets/call.png')}
                    onPress={chamarPM}
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

    },
    imagem:{
        position:'absolute',
        top:'19%',
        width:'38%',
        height:'75%'
    },
})

