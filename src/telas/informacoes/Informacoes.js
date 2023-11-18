import react, { useState } from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Cabecalho from "../../componentes/Cabecalho";
import CarrosselA from "./componentes/CarrosselA";
import CarrosselB from "./componentes/CarrosselB";
import CarrosselC from "./componentes/CarrosselC";
import Card from "./componentes/Card";
import Linha from "../../componentes/Linha";



export default Informacoes = ({ navigation }) => {
    const [mostrarCard, setMostrarCard] = useState('');

    const abrirCard = (texto) => {
        setMostrarCard(texto);
    };
    const fecharCard = () => {
        setMostrarCard(null);
    };


    return (
        <>
            <View style={Estilos.container}>
                <Cabecalho
                    texto="Informações"
                    imagemEsquerda={require('../../assets/voltar.png')}
                    botaoEsquerda={{
                        onPress: () => navigation.goBack(),
                    }} />
                <Linha/>


                {!mostrarCard ? (
                    <ScrollView >
                        <Text style={Estilos.titulos}>Ciclo de Violência</Text>
                        <CarrosselA abrirCard={abrirCard} />

                        <View style={[Estilos.linha, { width: '95%' }]} />
                        <Text style={Estilos.titulos}>É Lei</Text>
                        <CarrosselC abrirCard={abrirCard}/>

                        <View style={[Estilos.linha, { marginBottom: 20, width: '95%' }]} />
                        <CarrosselB abrirCard={abrirCard}/>

                    </ScrollView>
                ) : (
                    <>
                        <Card texto={mostrarCard} onPress={fecharCard} />
                    </>
                )}
                <View style={{ marginTop: 30 }} />

            </View>

        </>
    )
}

const Estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDFDF',
        alignItems: 'center',
    },
    linha: {
        width: '100%',
        height: 2,
        backgroundColor: 'black',
        marginTop: '4%',
        alignSelf:'center'
    },
    titulos: {
        backgroundColor: '#D69595',
        borderRadius: 20,
        width: '90%',
        height: 50,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '5%',
        marginBottom: '5%',
        alignSelf:'center'
    }
})