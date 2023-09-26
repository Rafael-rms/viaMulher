import React from 'react'
import { Snackbar, Text  } from 'react-native-paper'
    

const mensagem = "Verifique seu email e senha e tente novamente"
    
    
export default function Alert({ error = false, setError }) {
    return (
        <Snackbar
            style={Estilos.alert}
            visible={error}
            onDismiss={() => setError(false)}
            duration={20000}
            action={{
                label: 'OK',
                onPress: () => setError(false),
                labelStyle: Estilos.textobtn
            }}
        >
            <Text style={Estilos.texto}>{mensagem}</Text>
        </Snackbar>
    )
    
}
    
    
const Estilos = {
    alert:{
        backgroundColor: 'red', 
        marginBottom: 200, 
        borderRadius: 20,
        width:'90%',
        height:100,
        alignSelf:'center'
            
    },
    texto:{
        fontSize:20,
        color:'black'
    },
    textobtn:{
        fontSize:50,
        color:'black'
        }
    }
    