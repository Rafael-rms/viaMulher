import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default Home = () => {
    return (
        <View style={styles.container}>
            {/* Container de foto de usuaria */}
            <View style={styles.containerFoto}> 

            </View>

            {/* Container de botoes da tela home */}
            <View style={styles.containerBotoes}>  
                <TouchableOpacity 
                onPress={()=>{}}
                style={styles.botoes}>
                    <Text>Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>{}}
                style={styles.botoes}>
                    <Text>Formulário</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>{}}
                style={styles.botoes}>
                    <Text>Contatos</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>{}}
                style={styles.botoes}>
                    <Text>Denúncias</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>{}}
                style={styles.botoes}>
                    <Text>Informações</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                onPress={()=>{}}
                style={styles.botoes}>
                    <Text>Sobre</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFDFDF'
    },
    containerFoto:{
        flex:1
    },
    containerBotoes:{
        flexDirection:'row',
        flexWrap:'wrap',
        //flex:1,
        //backgroundColor:'black',
        alignItems:'center',
        justifyContent:'center',

    },
    botoes:{
        height:100,
        width:'50%',
        backgroundColor:'#FFDFDF',
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
        
    }
})