import React from "react";

import { ScrollView, View, StyleSheet } from 'react-native'
import Cabecalho from "../componentes/Cabecalho";
import Caixa from "./componentes/Caixa";
import Linha from "../componentes/Linha";
import {textoCAM, textoDDH, textoDM, textoPM, tituloCAM, tituloDDH, tituloDM, tituloPM } from "../mocks/TextosDenuncias"

export default Denuncias = ({navigation})=>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <Cabecalho 
                    texto="Denúncias"
                    imagemEsquerda={require('../assets/voltar.png')}
                    botaoEsquerda={{
                        onPress: ()=>navigation.goBack(),
                    }}
                />
                <Linha/>
                <Caixa
                    titulo={tituloCAM}
                    texto={textoCAM}
                    imagem={require('../assets/denuncias.png')}
                />
                <Caixa
                    titulo={tituloDDH}
                    texto={textoDDH}
                    imagem={require('../assets/denuncias.png')}
                />

                <Caixa
                    titulo={tituloDM}
                    texto={textoDM}
                    imagem={require('../assets/denuncias.png')}
                />
                <Caixa
                    titulo={tituloPM}
                    texto={textoPM}
                    imagem={require('../assets/denuncias.png')}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFDFDF',
        alignItems:'center',
    }
})

