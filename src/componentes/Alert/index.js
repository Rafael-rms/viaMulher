import React from 'react'
import { StyleSheet } from 'react-native'
import { Snackbar } from 'react-native-paper'



export default function Alert({ error = false, setError }) {
    const mensagem = "Verifique seu email e senha e tente novamente"
    return (
        <Snackbar
            style={Estilos.alert}
            visible={error}
            onDismiss={() => setError(false)}
            duration={2000}
            // action={{
            //     label: 'OK',
            //     onPress: () => setError(false)
            // }}
        >
            {mensagem} 
        </Snackbar>
    )

}


const Estilos = StyleSheet.create({
    alert:{
        backgroundColor: 'red', 
        marginBottom: 200, 
        borderRadius: 20,
        width:'90%',
        height:100
    }
})
