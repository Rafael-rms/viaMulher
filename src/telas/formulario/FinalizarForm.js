import react, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import Cabecalho from "../../componentes/Cabecalho";
import Linha from "../../componentes/Linha";
import moment from "moment";
import { capturaDadosFormulario, capturaDadosUsuario } from "../../servicos/req";
import { auth } from "../../config/firebase";
import * as Print from 'expo-print';
import { shareAsync } from "expo-sharing";
import { pergunta01, pergunta02, pergunta03, pergunta04, 
    pergunta05, pergunta06, pergunta07, pergunta08, pergunta09, 
    pergunta10, pergunta11, pergunta12, pergunta13, pergunta14, pergunta15,
    pergunta16, pergunta17, pergunta18, pergunta19} from '../../mocks/perguntas'

export default function ({ navigation }) {
    const [dadosFormulario, setDadosFormulario] = useState([])
    const [dadosUsuario, setDadosUsuario] = useState([])
    let dia = moment().format('DD/MM/YYYY')

    useEffect(() => {
        auth.onAuthStateChanged(usuario => {
            if (usuario) {
                const resultado = usuario.uid
                //console.log(result)


                // Função para carregar os dados do Firestore
                async function carregarDadosFirestore() {
                    const users = await capturaDadosUsuario(resultado)
                    const formulario = await capturaDadosFormulario(resultado)
                    setDadosUsuario(users)
                    setDadosFormulario(formulario)
                }
                carregarDadosFirestore()
            }
        })
    }, [])

    const html = `
    <html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </head>

<style>
    body {
	display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    }

    table {
    border-collapse: collapse;
    width: 500px;
    }

    th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: center;
    }

</style>

    <body>
            <div></br>
            </br></br></br></br>
            </br></br></br></br>
            </div>

        <h1 style="font-size: 35px; font-family: Helvetica Neue; font-weight: normal; textAlign: center; justify-content: center; margin-left: 150;
    margin-right: 150;">

        FORMULÁRIO DE
        AVALIAÇÃO DE RISCO
        FRIDA: UM INSTRUMENTO
        PARA O ENFRENTAMENTO
        DA VIOLÊNCIA DOMÉSTICA
        CONTRA A MULHER
        
</h1>


        <div></br></br></br></br>
        </br></br></br></br>
        </br></br></br></br>
        </br></br></br></br>
        </br></br></br></br>
        </br></br></br></br>
        </br></br></br></br>
        </br></br></br></br>
        </br></br></br></br>
        </div>


        
        <div>
            <table>
            
                <tr>
                    <td>
                    Perguntas
                    </td>
                    <td>
                    Respostas
                    </td>
                </tr>
            

            <tbody>
                <tr>
                    <td>
                    ${pergunta01}
                    </td>
                    <td>
                    ${dadosFormulario.resposta01}
                    </td>
                </tr>
                <tr>
                    <td>
                    ${pergunta02}
                    </td>
                    <td>
                    ${dadosFormulario.resposta02}
                    </td>
                </tr>
                <tr>
                <td>
                ${pergunta03}
                </td>
                <td>
                ${dadosFormulario.resposta03}
                </td>
            </tr>
            <tr>
                <td>
                ${pergunta04}
                </td>
                <td>
                ${dadosFormulario.resposta04}
                </td>
            </tr>
            <tr>
            <td>
            ${pergunta05}
            </td>
            <td>
            ${dadosFormulario.resposta05}
            </td>
        </tr>
        <tr>
            <td>
            ${pergunta06}
            </td>
            <td>
            ${dadosFormulario.resposta06}
            </td>
        </tr>
        <tr>
        <td>
        ${pergunta07}
        </td>
        <td>
        ${dadosFormulario.resposta07}
        </td>
    </tr>
    <tr>
        <td>
        ${pergunta08}
        </td>
        <td>
        ${dadosFormulario.resposta08}
        </td>
    </tr>
    <tr>
            <td>
            ${pergunta09}
            </td>
            <td>
            ${dadosFormulario.resposta09}
            </td>
        </tr>
        <tr>
        <td>
        ${pergunta10}
        </td>
        <td>
        ${dadosFormulario.resposta10}
        </td>
    </tr>
    <tr>
        <td>
        ${pergunta11}
        </td>
        <td>
        ${dadosFormulario.resposta11}
        </td>
    </tr>
    <tr>
            <td>
            ${pergunta12}
            </td>
            <td>
            ${dadosFormulario.resposta12}
            </td>
        </tr>
        <tr>
        <td>
        ${pergunta13}
        </td>
        <td>
        ${dadosFormulario.resposta13}
        </td>
    </tr>
    <tr>
        <td>
        ${pergunta14}
        </td>
        <td>
        ${dadosFormulario.resposta14}
        </td>
    </tr>
    <tr>
            <td>
            ${pergunta15}
            </td>
            <td>
            ${dadosFormulario.resposta15}
            </td>
        </tr>
        <tr>
        <td>
        ${pergunta16}
        </td>
        <td>
        ${dadosFormulario.resposta16}
        </td>
    </tr>
    <tr>
        <td>
        ${pergunta17}
        </td>
        <td>
        ${dadosFormulario.resposta17}
        </td>
    </tr>
    <tr>
            <td>
            ${pergunta18}
            </td>
            <td>
            ${dadosFormulario.resposta18}
            </td>
        </tr>
        <tr>
        <td>
        ${pergunta19}
        </td>
        <td>
        ${dadosFormulario.resposta19}
        </td>
    </tr>
            <tbody>

            </table>
        
        </div>
        </body>

    </html>
    `;


    const [selectedPrinter, setSelectedPrinter] = useState([]);

    const exibirPDF = async () => {
        // On iOS/android prints the given html. On web prints the HTML from the current page.
        await Print.printAsync({
            html,
            printerUrl: selectedPrinter?.url, // iOS only
        });
    };

    const downloadPDF = async () => {
        // On iOS/android prints the given html. On web prints the HTML from the current page.
        const { uri } = await Print.printToFileAsync({ html });
        console.log('File has been saved to:', uri);
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    };

    return (
        <View style={Estilos.container}>

            <Cabecalho
                texto="Formulário"
                imagemEsquerda={require('../../assets/voltar.png')}
                imagemDireita={require('../../assets/home.png')}
                botaoEsquerda={{
                    onPress: () => navigation.goBack(),
                }}
                botaoDireita={{
                    onPress: () => navigation.navigate('Home'),
                }} />

            <Linha />

            <View style={Estilos.containerCard}>
                <Text style={Estilos.textosTitulos}>Nome da usuaria</Text>
                <Text style={Estilos.textosDados}>{dadosUsuario.nome}</Text>
                <Text style={Estilos.textosTitulos}>Data de Nascimento</Text>
                <Text style={Estilos.textosDados}>{dadosUsuario.nascimento}</Text>
                <Text style={Estilos.textosTitulos}>Data da realização</Text>
                <Text style={Estilos.textosDados}>{dia}</Text>

                <Button title="" onPress={print} />
                <TouchableOpacity style={Estilos.botaoExibirForm}
                        onPress={() => { downloadPDF() }}>
                        <Text style={Estilos.textoExibirForm}>Baixar Formulário</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={Estilos.botaoExibirForm}
                        onPress={() => { exibirPDF() }}>
                        <Text style={Estilos.textoExibirForm}>Exibir Formulário</Text>
                    </TouchableOpacity>
            </View>
        </View>
    )
}

const Estilos = StyleSheet.create({
    container: {
        backgroundColor: '#FFDFDF',
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    containerCard: {
        backgroundColor: '#EDCECE',
        width: '90%',
        height: '60%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60
    },
    textosTitulos: {
        fontSize: 30,
        fontWeight: 'bold',
        margin: 10
    },
    textosDados: {
        fontSize: 25
    },
    botaoExibirForm: {
        backgroundColor: '#D69595',
        height: 40,
        width: '65%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        borderRadius: 20
    },
    textoExibirForm: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})