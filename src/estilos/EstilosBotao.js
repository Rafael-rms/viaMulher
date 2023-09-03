import {StyleSheet} from 'react-native'

const EstilosBotao =StyleSheet.create({
    containerBotao:{
        //alignItems: "center",
        //justifyContent: "center",
        //textAlign:'center'
      },
      // Botoes de login, cadastrar e enviar email para recuperar senha
      botao:{
        backgroundColor: "#D69595",
        minWidth: '70%',
        maxWidth: '70%',
        height:70,
        maxHeight:'70%',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        margin:12,
        textAlign:'center',
      },
      botaoVoltar:{
        
      },
      // Estilo do container Texto imagem e botoes da tela de Home
      botaoHome:{
        height:'34%',
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

      }
})

export default EstilosBotao;