import {StyleSheet} from 'react-native'

const EstilosBotao =StyleSheet.create({
    containerBotao:{
        alignItems: "center",
        justifyContent: "center",
      },
      // Botoes de login, cadastrar e enviar email para recuperar senha
      botao:{
        backgroundColor: "#D69595",
        minWidth: 330,
        maxWidth: 300,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        margin:12,
      },
      botaoVoltar:{
        
      },
      // Estilo do container Texto e botoes da tela de Home
      botaoHome:{
        height:108,
        width:205,
        backgroundColor:'#FFDFDF',
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
      },
      estiloTextoBotao:{
        textAlign:'center'
      }
})

export default EstilosBotao;