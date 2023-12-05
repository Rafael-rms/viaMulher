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
import imagem from "./testegraf.png"

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
@media print{


    body {
    align-items: center;
    justify-content: center;
    margin: 25px;
	line-height: 1.6;
    }

    table {
    border-collapse: collapse;
    width: 500px;
	align-items: center;
	justify-content: center;
    page-break-inside: auto;
    }

    tr{
        page-break-inside: avoid;
    }

    th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: center;
    }

	div.containerCapa {
	background-image: linear-gradient(30deg, #2A0439 55%,#3E144D 55%,#71517D 55%,#5c2273 55%, white 25%, transparent)
    
	
}
	div.containerContraCapa{

        background-image: linear-gradient(106deg,  #421b5170 11%,white 20%, #421b5100 98%,white 75%, #f8e7ff 7%, #f8e7ff 13%, transparent)
}
	div.containerContraCapaa{

        background-image: linear-gradient(18deg, #a764c1a8 88%, #b422bd26 94%, #563863 103%, #2b0839 257%, transparent)
}

	p{
	text-indent: 2em;
	}
    li{
	margin-bottom: 20px;
	}
	img{
	width: 550px;
	height:280px;
	}
    .linha {
        border-top: 1px solid #000; 
        margin-top: 32px 
}
hr {
    height: 1px; /* Altura da linha */
    width:200px;
    border-width: 0; /* Largura da borda (0 para remover a borda) */
    background-color: #ccc; /* Cor de fundo da linha */
    margin: 60px 0; /* Margem superior e inferior da linha */
}
.profissional{
    display: flex;
    flex-direction: row;
}
</style>

    <body>
<div class="containerCapa">
    <div class="containerContraCapa">
	<div class="containerContraCapaa">
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
        

        

        </div>
    </div>
</div>
</div>
        
        <div>
        </br></br></br></br>
        </br></br></br></br>


        <h2> 
        O FORMULÁRIO DE
        AVALIAÇÃO DE RISCO: UM
        MODELO PARA O BRASIL
        
        </h2>
        <p>
        O formulário de avaliação de risco que se apresenta a seguir contempla as
        características relacionadas às vítimas, aos agressores e ao contexto de violência
        doméstica e familiar.
		<p>
        O modelo adota a abordagem moderna de avaliação de risco e emprega a
        escala de gravidade de risco, combinando resultados da contabilidade dos fatores
        de risco com a avaliação estruturada realizada por profissional qualificada(o)
        e responsável pelo atendimento. Essa abordagem consubstancia-se, por um
        lado, num instrumento que define os indicadores de risco a serem levados em
        consideração e que informação deve ser recolhida. Por outro lado, a experiência
        e a sensibilidade dos(as) profissionais são também consideradas, e a mulher é
        colocada no centro da avaliação, com a sua situação e o seu contexto específicos.
        Adicionalmente, considera-se ainda como fundamental a percepção da mulher
        relativamente ao risco que corre, uma vez que é ela a especialista no seu próprio
        caso.
		</p>
		<p>
        Assim sendo, a articulação entre a percepção da mulher, o julgamento dos
        profissionais e a avaliação baseada em fatores de risco resulta numa avaliação
        mais precisa da situação de violência em que a mulher se encontra, ensejando a
        tomada de medidas que contribuam para:
		</p>
        </p>

        <ul>
        <li>
        a proteção da mulher frente ao risco imediato, com fundamentação
        para as medidas protetivas de urgência e gestão do risco mediante as
        medidas previstas na Lei Maria da Penha;
        </li>

        <li>
        a adoção de procedimentos integrados para minimizar a repetição
        da violência em curto prazo com aplicação de medidas previstas no
        artigo 11 da Lei Maria da Penha, entre outros que serão adotados para
        prevenção da violência por meio do acompanhamento na rede de
        atendimento especializado;
        </li>
        
        <li>
        a melhoria das respostas institucionais para reduzir a incidência da
        violência doméstica e familiar por meio do compartilhamento de
        informações e encaminhamentos realizados a cada caso.
        </li>
        </ul>
        <p>
        Por se tratar de um complexo problema de origem social, diversos fatores
        concorrem para que a violência ocorra e para potencializar ou minimizar o risco
        de agravamento, e nenhum instrumento ou atendimento isoladamente dará
        conta de prover uma compreensão ampla e a resposta integrada que possa ser
        necessária. Daí a importância do atendimento multidisciplinar que poderá ser
        oferecido pela rede de serviços especializados que organizará a gestão do risco
        visando a ampliar a proteção para a mulher.
		<p>
        O modelo de formulário de risco consiste em 19 perguntas que devem ser
        formuladas pelo(a) profissional diretamente à mulher durante seu atendimento.
        Sua elaboração pautou-se pelo princípio da parcimônia, buscando, com o menor
        número de perguntas possível, recolher a informação fundamental para uma
        avaliação e gestão de risco eficazes. Pautou-se, também, pelo princípio do respeito
        à vítima que não deve ser exposta a recontar muitas vezes sua história e a relembrar
        aspectos que sejam dolorosos. Outrossim, o reduzido número de perguntas
        contribui para um atendimento mais cuidadoso por parte dos profissionais que
        não sentem a tarefa como um acréscimo de tempo desnecessário.
		</p>
        De forma complementar ao formulário, encontra-se uma escala de
        classificação de risco que deverá orientar a/o profissional quanto às medidas a
        serem adotadas. A escala adotada se inspira na metodologia empregada pelas
        Forças de Segurança e o Ministério Público em Portugal, que adota escala de três
        níveis de risco: baixo, médio ou elevado, assim considerados:
        </p>

        <ul>
        <li>
        <strong>Risco baixo:</strong> “os itens assinalados não indicam, em primeira análise,
        a probabilidade da ocorrência de ofensas corporais graves ou de
        homicídio a curto prazo (...)”.
        </li>

        <li>
        <strong>Risco médio:</strong> “estão presentes fatores de risco que podem constituir
        perigo real de ofensa corporal grave/homicídio se existirem mudanças
        no contexto ou nas circunstâncias (...)”.
        </li>
        
        <li>
        <strong>Risco elevado:</strong> “refere-se à existência de fatores de risco que denotam
        a probabilidade de ocorrer a prática de ofensa corporal grave ou
        homicídio a qualquer momento”.
        </li>
        </ul>

        <p>
        Essa metodologia procura balancear as respostas positivas com a ausência
        de informação, ou seja, baseia-se numa tabela cruzada em que o apuramento do nível de risco depende de duas condições: número de respostas positivas (SIM)
        e número de itens para os quais não se dispõe de informação (NS/NA). A lógica
        aqui subjacente é a de que a inexistência de informação não deve penalizar a
        avaliação do nível de risco e é, por isso, incluída na contabilização de forma a não
        subavaliar o risco.
        </p>
	
	

        <div class="tabela"/>
        <h3>Nome da Usuária: ${ dadosUsuario.nome} </h3>
        <h3>Data de realização do Formulário: ${ dadosFormulario.diaRealizado}</h3>
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

            <img src="https://uploaddeimagens.com.br/imagens/cewqvSo" alt="Descrição img">	
	</br></br></br>

    <h2>Avaliação estruturada realizada pela(o) profissional</h2>

    <p>Nesta parte do formulário a profissional responsável pelo atendimento deverá registrar
    informações consideradas relevantes para a compreensão global da situação. O documento de
    avaliação estruturada consiste em um conjunto de perguntas que serão respondidas de forma
    descritiva e sucinta pelo(a) profissional. O registro se fará com base em informações que já
    foram prestadas pela vítima acrescentadas aquelas sobre suas condições físicas, emocionais
    e psicológicas. Ao fim, um campo aberto permite o registro de informações adicionais e que
    sejam consideradas relevantes para entendimento da gravidade da situação e medidas que
    adicionalmente deverão ser consideradas para a proteção da mulher.</p>

    </br></br></br>
        <p>Durante o atendimento, a mulher demonstra percepção de risco sobre sua situação? A percepção
        é de existência ou inexistência do risco? (Por exemplo, ela diz que o agressor pode matá-la, ou
        ela justifica o comportamento do agressor ou naturaliza o comportamento violento?) Anote a
        percepção e explique.</p>

        <div class="linha"></div>
        <div class="linha"></div>
        <div class="linha"></div>
        <div class="linha"></div>
        <div class="linha"></div>

            <p>
            Existem outras informações relevantes com relação ao contexto ou situação da vítima e que
            possam indicar risco de novas agressões? (Por exemplo, a mulher tem novo(a) companheiro(a)
            ou tomou decisões que anunciam um rompimento definitivo com o agressor – ou pretende mudar
            de casa, bairro, cidade.) Anote e explique.
            </p>

            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>

            <p>
            Como a mulher se apresenta física e emocionalmente? (Tem sinais de esgotamento emocional, está
            tomando medicação controlada, necessita de acompanhamento psicológico e/ou psiquiátrico?)
            Descreva.
            </p>

            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>


            <p>
            Existe o risco de a mulher tentar suicídio ou há informações de que tenha tentado se matar?
            </p>

            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>


            <p>
            A mulher ainda reside com o(a) agressor(a) ou ele(a) tem acesso fácil à sua residência? Explique
            a situação.
            </p>

            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>

            <p>
            Descreva outras circunstâncias que, na sua opinião, poderão representar risco de novas agressões
            e deverão ser observadas no fluxo de atendimento e ensejar a reavaliação de risco por outros
            profissionais. Descreva de forma sucinta a situação ou aspecto que chamou sua atenção.
            </p>

            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>

            <p>
            Tendo em conta a informação recolhida e a sua experiência profissional, que nível de risco atribui
            a este caso? (Baixo; Médio; Elevado). Justifique.
            </p>

            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>

            <p>
            Quais os encaminhamentos sugeridos para a mulher?
            </p>

            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>

            <p>
            A usuária concordou com os encaminhamentos? Sim ( ) Não ( ) Por quê?
            </p>

            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>

            <p>
            A usuária demonstra interesse em aderir aos encaminhamentos? Sim ( ) Não ( ) Por quê?
            </p>

            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
            <div class="linha"></div>
        
        </div>
        <div class="profissional">
        <p class=''>Nome do(a) profissional:<hr></p> <p class=''>Cargo/Função: <hr></p>
        </div>
        <div class="profissional">
        <p class=''>Data de Preenchimento:<hr></p> <p class=''>Serviço/Órgão: <hr></p>
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

                {/* <Button title="" onPress={print} /> */}
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
        height: '80%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
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