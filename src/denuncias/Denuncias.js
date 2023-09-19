import React from "react";

import { ScrollView, View, StyleSheet } from 'react-native'
import Cabecalho from "../componentes/Cabecalho";
import Caixa from "./componentes/Caixa";
import Linha from "../componentes/Linha";
import {centralAM} from "../mocks/Textos"

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
                    titulo="Central de Atendimento a Mulher"
                    texto={centralAM}
                    imagem={require('../assets/denuncias.png')}
                />

                <Caixa
                    titulo="Central de Atendimento a Mulher"
                    texto="Disque 180 – recebe as denúncias de violência e orienta as mulheres sobre seus direitos, sobre as Leis que a protegem e, quando necessário as encaminham para outros serviços."
                    imagem={require('../assets/denuncias.png')}
                />
                <Caixa
                    titulo="Disque Direitos Humanos"
                    texto="Disque 100 – atende graves situações de violação de Direitos Humanos, como da violência contra a mulher e aciona os órgãos competentes, possibilitando o flagrante."
                    imagem={require('../assets/denuncias.png')}
                />

                <Caixa
                    titulo="Delegacia da Mulher"
                    texto="delegacia especializada no atendimento de mulheres vítimas de violência física, moral e sexual.
                    Barueri- Telefone: (11) 4198-0522
                    "
                    imagem={require('../assets/denuncias.png')}
                />
                <Caixa
                    titulo="Policia Militar"
                    texto="190 - Polícia Militar"
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

