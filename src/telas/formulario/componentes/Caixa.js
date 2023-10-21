import React from "react";
import { StyleSheet, View, Text } from "react-native";


// Criando componente caixa que será exibido com os textos na tela de denuncias
export default function Caixa({ titulo, texto, imagem, onPress }) {
    return (
        <View style={Estilos.caixa}>
            <Text style={Estilos.texto}> A senhora/você tem filhos(as) com o(a) agressor(a)? (Caso não tenham filhos em comum, o registro não se aplica)
                Em caso afirmativo, estão vivendo algum conflito com relação àguarda dos filhos, visitas ou pagamento de pensão pelo agressor?</Text>
        </View>
    )
}

// Estilos do componente
const Estilos = StyleSheet.create({
    caixa:{
        backgroundColor: '#EDCECE',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        //margin:'3%',
        height:'26%',
        width:'94%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    texto:{
        fontWeight:'bold',
        fontSize:22,
        textAlign:'justify'
    },
})