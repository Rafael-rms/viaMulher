import react from "react";
import { View, Text, StyleSheet } from "react-native";

export default function() {
    return(
        <View style={Estilos.container}>
            <Text>Rafael</Text>
        </View>
    )
}

const Estilos = StyleSheet.create({
    container:{
        backgroundColor:'green',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})