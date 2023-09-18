import React from "react";

import { ScrollView, View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import Cabecalho from "../componentes/Cabecalho";

export default Denuncias = ({navigation})=>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <Cabecalho 
                texto="Denúncias"
                imagemEsquerda={require('../assets/voltar.png')}
                botaoEsquerda={{
                    onPress: ()=>navigation.goBack(),
                }}/>
                
                <View style={styles.linha}/>

                <View style={styles.caixaDenuncias}>
                    <Text style={styles.texoTituloCaixa}>Central de Atendimento a Mulher</Text>
                    <View style={[styles.linha, {width:'90%'}]}/>
                    <Text style={styles.textoCaixa}>Disque 180 – recebe as denúncias de violência e orienta as mulheres sobre seus direitos, sobre as Leis que a protegem e, quando necessário as encaminham para outros serviços.</Text>

                    <TouchableOpacity>
                        <Image source={require('../assets/denuncias.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.caixaDenuncias}>
                    <Text style={styles.texoTituloCaixa}>Disque Direitos Humanos</Text>
                    <View style={[styles.linha, {width:'90%'}]}/>
                    <Text style={styles.textoCaixa}>Disque 100 – atende graves situações de violação de Direitos Humanos, como da violência contra a mulher e aciona os órgãos competentes, possibilitando o flagrante.</Text>

                    <TouchableOpacity>
                        <Image source={require('../assets/denuncias.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.caixaDenuncias}>
                    <Text style={styles.texoTituloCaixa}>Delegacia da Mulher</Text>
                    <View style={[styles.linha, {width:'90%'}]}/>
                    <Text style={styles.textoCaixa}>delegacia especializada no atendimento de mulheres vítimas de violência física, moral e sexual.
                    Barueri- Telefone: (11) 4198-0522
                    </Text>

                    <TouchableOpacity>
                        <Image source={require('../assets/denuncias.png')}/>
                    </TouchableOpacity>
                </View>

                <View style={[styles.caixaDenuncias,{marginBottom:20}]}>
                    <Text style={styles.texoTituloCaixa}>Policia Militar</Text>
                    <View style={[styles.linha, {width:'90%'}]}/>
                    <Text style={styles.textoCaixa}>190 - Polícia Militar</Text>

                    <TouchableOpacity>
                        <Image source={require('../assets/denuncias.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFDFDF',
        alignItems:'center',
    },
    linha:{
        width:'100%',
        height:2,
        backgroundColor:'black',
        marginTop:'4%'
    },
    caixaDenuncias:{
        backgroundColor: '#EDCECE',
         marginTop:'5%',
         height:'auto',
         width:'94%',
         alignItems:'center',
         borderRadius:20,
    },
    texoTituloCaixa:{
        marginTop:'3%',
        fontSize:23,
        fontWeight:'bold'
    },
    textoCaixa:{
        fontSize:20,
        padding:'4%',
        textAlign:'justify',
        
    }
})

