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
      // Estilo do container Texto imagem e botoes da tela de Home
      botaoHome:{
        height:104,
        width:'100%',
        minWidth:'50%',
        maxWidth:'100%',
        backgroundColor:'#FFDFDF',
        alignItems:'center',
        justifyContent:'center',
        borderWidth: 1,
      },
      estiloTextoBotao:{
        textAlign:'center'
      },
      imagemBotaoHome:{
        height:75,
        width:60
      }
})

export default EstilosBotao;