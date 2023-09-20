import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../telas/Login';
import Cadastro from '../telas/Cadastro';
import RecSenha from  '../telas/RecSenha';
import Home from '../telaHome/Home'
import Pergunta01 from '../formulario/Pergunta01';
import Denuncias from '../denuncias/Denuncias'
import Sobre from '../sobre/Sobre';
import Contatos from '../contatos/Contatos';
import Informacoes from '../informacoes/Informacoes';
import CardContatos from '../contatos/componentes/CardContatos';
import Perfil from '../perfil/Perfil';

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

    </Stack.Navigator>
    </NavigationContainer>

  );
}

