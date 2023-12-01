import React from "react";

import { ScrollView, View, StyleSheet } from 'react-native'
import Cabecalho from "../../componentes/Cabecalho";
import Linha from "../../componentes/Linha";
import Caixa from "./componentes/Caixa"
import { tituloPSP, tituloCF, textoPSP, textoCF } from "../../mocks/TextosSobre"

export default Sobre = ({navigation})=>{
    return(
        <ScrollView>
            <View style={styles.container}>

                <Cabecalho 
                texto="Sobre"
                imagemEsquerda={require('../../assets/voltar.png')}
                botaoEsquerda={{
                    onPress: ()=>navigation.goBack(''),
                }}/>
                <Linha/>
                
                <Caixa
                    titulo={tituloPSP}
                    texto={textoPSP}
                />
                <Caixa
                    titulo={tituloCF}
                    texto={textoCF}
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