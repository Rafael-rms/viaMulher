import react from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import Cabecalho from "../../componentes/Cabecalho";
import CarrosselA from "./componentes/CarrosselA";
import CarrosselB from "./componentes/CarrosselB";
import CarrosselC from "./componentes/CarrosselC";



export default Informacoes = ({navigation})=>{
    return (
        <ScrollView>
            <View style={Estilos.container}>
            <Cabecalho 
                texto="Informações"
                imagemEsquerda={require('../../assets/voltar.png')}
                botaoEsquerda={{
                    onPress: ()=>navigation.goBack(),
                }}/>

                <View style={Estilos.linha}/>

                <Text style={Estilos.titulos}>Ciclo de Violência</Text>
                <CarrosselA/>

                <View style={[Estilos.linha, {width:'95%'}]}/>
                <Text style={Estilos.titulos}>É Lei</Text>
                <CarrosselC/>

                <View style={[Estilos.linha, {marginBottom:20, width:'95%'}]}/>
                <CarrosselB/>

                <View style={{marginTop:30}}/>

            </View>
            
        </ScrollView>
    )
}

const Estilos = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFDFDF',
        alignItems:'center',
        justifyContent:'center'
    },
    linha:{
        width:'100%',
        height:2,
        backgroundColor:'black',
        marginTop:'4%'
    },
    titulos:{
        backgroundColor:'#D69595',
        borderRadius:20,
        width:'90%',
        height:50,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:25,
        fontWeight:'bold',
        marginTop:'5%',
        marginBottom:'5%'
    }
})