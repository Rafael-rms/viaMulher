import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/telas/Login';
import Cadastro from './src/telas/Cadastro';
import RecSenha from  './src/telas/RecSenha';
import Home from './src/telaHome/Home'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    // <Stack.Navigator initialRouteName='Login'>
    //   <Stack.Screen 
    //   name ="Login" component={Login}
    //   //options={{title:"Login",}}
    //   options={{headerShown:false}} />

    //   <Stack.Screen 
    //   name ="Cadastro" component={Cadastro}
    //   options={{headerShown:false}} />

    //   <Stack.Screen 
    //   name ="RecSenha" component={RecSenha}
    //   options={{headerShown:false}}/>

    // </Stack.Navigator>
    // </NavigationContainer>
    <Home/>
  );
}

