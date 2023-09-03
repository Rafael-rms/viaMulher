import react from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";


export default Informacoes = ({navigation})=>{
    return (
        <ScrollView>
            <View style={Estilos.container}>
                <View style={Estilos.cabecalho}>
                <TouchableOpacity 
                    onPress={()=>navigation.navigate('Home')}>
                        <Image source={require('../assets/voltar.png')}/>
                    </TouchableOpacity>

                    <Text style={Estilos.textoCabecalho}>Informações</Text>
                </View>

                <View style={Estilos.linha}/>

                <Text style={Estilos.titulos}>Ciclos de Violência</Text>

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
    cabecalho:{
        flexDirection: 'row',
        marginTop:'6%',
        alignItems:'center',
        paddingRight:'30%'
    },
    textoCabecalho:{
        marginLeft:'15%',
        fontSize:28,
        fontWeight: 'bold'
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