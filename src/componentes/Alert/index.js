import React from 'react'
import { Snackbar} from 'react-native-paper'

export default function Alert({mensagem, error = false, setError }) {
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
            {mensagem}
        </Snackbar>
    )
    
}
    
    
const Estilos = {
    alert:{
        backgroundColor: 'white', 
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
        fontSize:15,
        color:'black'
        }
    }
    