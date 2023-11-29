import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Anuncio from '../telas/anuncio/Anuncio';
import Login from '../telas/cadastro/Login';
import Cadastro from '../telas/cadastro/Cadastro';
import RecSenha from '../telas/cadastro/RecSenha';
import Home from '../telas/home/Home'
import Pergunta01 from '../telas/formulario/perguntas/Pergunta01';
import Denuncias from '../telas/denuncias/Denuncias'
import Sobre from '../telas/sobre/Sobre';
import Contatos from '../telas/contatos/Contatos';
import Informacoes from '../telas/informacoes/Informacoes';
import CardContatos from '../telas/contatos/componentes/CardContatos';
import Perfil from '../telas/perfil/Perfil';
import EditarPerfil from '../telas/perfil/EditarPerfil'
import CardDeletarPerfil from '../telas/perfil/CardDeletarPerfil';
import Formulario from '../telas/formulario/Formulario';
import Configuracoes from '../telas/configuracoes/Configuracoes';
import Pergunta02 from '../telas/formulario/perguntas/Pergunta02';
import Pergunta03 from '../telas/formulario/perguntas/Pergunta03';
import Pergunta04 from '../telas/formulario/perguntas/Pergunta04';
import Pergunta05 from '../telas/formulario/perguntas/Pergunta05';
import Pergunta06 from '../telas/formulario/perguntas/Pergunta06';
import Pergunta07 from '../telas/formulario/perguntas/Pergunta07';
import Pergunta08 from '../telas/formulario/perguntas/Pergunta08';
import Pergunta09 from '../telas/formulario/perguntas/Pergunta09';
import Pergunta10 from '../telas/formulario/perguntas/Pergunta10';
import Pergunta11 from '../telas/formulario/perguntas/Pergunta11';
import Pergunta12 from '../telas/formulario/perguntas/Pergunta12';
import Pergunta13 from '../telas/formulario/perguntas/Pergunta13';
import Pergunta14 from '../telas/formulario/perguntas/Pergunta14';
import Pergunta15 from '../telas/formulario/perguntas/Pergunta15';
import Pergunta16 from '../telas/formulario/perguntas/Pergunta16';
import Pergunta17 from '../telas/formulario/perguntas/Pergunta17';
import Pergunta18 from '../telas/formulario/perguntas/Pergunta18';
import Pergunta19 from '../telas/formulario/perguntas/Pergunta19';
import FinalizarForm from '../telas/formulario/FinalizarForm';




const Stack = createNativeStackNavigator();


//Componentes de rotas de navegação de telas do App
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Anuncio'>

      <Stack.Screen
          name="Anuncio" component={Anuncio}
          //options={{title:"Login",}}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Login" component={Login}
          //options={{title:"Login",}}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Cadastro" component={Cadastro}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="RecSenha" component={RecSenha}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Home" component={Home}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Denuncias" component={Denuncias}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Sobre" component={Sobre}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Contatos" component={Contatos}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Informacoes" component={Informacoes}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="CardContatos" component={CardContatos}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Perfil" component={Perfil}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="EditarPerfil" component={EditarPerfil}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="CardDeletarPerfil" component={CardDeletarPerfil}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Formulario" component={Formulario}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Configuracoes" component={Configuracoes}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta1" component={Pergunta01}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta02" component={Pergunta02}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta03" component={Pergunta03}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta04" component={Pergunta04}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta05" component={Pergunta05}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta06" component={Pergunta06}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta07" component={Pergunta07}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta08" component={Pergunta08}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta09" component={Pergunta09}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta10" component={Pergunta10}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta11" component={Pergunta11}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta12" component={Pergunta12}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta13" component={Pergunta13}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta14" component={Pergunta14}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta15" component={Pergunta15}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta16" component={Pergunta16}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta17" component={Pergunta17}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta18" component={Pergunta18}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pergunta19" component={Pergunta19}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="FinalizarForm" component={FinalizarForm}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

