import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/telas/Login';
import Cadastro from './src/telas/Cadastro';
import RecSenha from  './src/telas/RecSenha';
import Home from './src/telaHome/Home'
import Pergunta01 from './src/formulario/Pergunta01';
import Denuncias from './src/denuncias/Denuncias'
import Sobre from './src/sobre/Sobre';
import Contatos from './src/contatos/Contatos';

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
      name ="Home" component={Home}/>

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

    </Stack.Navigator>
    </NavigationContainer>

  );
}

