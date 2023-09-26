import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../telas/cadastro/Login';
import Cadastro from '../telas/cadastro/Cadastro';
import RecSenha from  '../telas/cadastro/RecSenha';
import Home from '../telas/home/Home'
import Pergunta01 from '../telas/formulario/Pergunta01';
import Denuncias from '../telas/denuncias/Denuncias'
import Sobre from '../telas/sobre/Sobre';
import Contatos from '../telas/contatos/Contatos';
import Informacoes from '../telas/informacoes/Informacoes';
import CardContatos from '../telas/contatos/componentes/CardContatos';
import Perfil from '../telas/perfil/Perfil';
import Formulario from '../telas/formulario/Formulario';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen 
      name ="Login" component={Login}
      //options={{title:"Login",}}
      options={{headerShown:false}} />

      <Stack.Screen 
      name ="Cadastro" component={Cadastro}
      options={{headerShown:false}} />

      <Stack.Screen 
      name ="RecSenha" component={RecSenha}
      options={{headerShown:false}}/>

      <Stack.Screen 
      name ="Home" component={Home}
      options={{headerShown:false}}/>

      <Stack.Screen 
      name ="Pergunta1" component={Pergunta01}
      options={{headerShown:false}}/>

      <Stack.Screen 
      name ="Denuncias" component={Denuncias}
      options={{headerShown:false}}/>

      <Stack.Screen 
      name ="Sobre" component={Sobre}
      options={{headerShown:false}}/>

      <Stack.Screen 
      name ="Contatos" component={Contatos}
      options={{headerShown:false}}/>

      <Stack.Screen 
      name ="Informacoes" component={Informacoes}
      options={{headerShown:false}}/>

      <Stack.Screen 
      name ="CardContatos" component={CardContatos}
      options={{headerShown:false}}/>

      <Stack.Screen 
      name ="Perfil" component={Perfil}
      options={{headerShown:false}}/>

      <Stack.Screen 
      name ="Formulario" component={Formulario}
      options={{headerShown:false}}/>

    </Stack.Navigator>
    </NavigationContainer>

  );
}

