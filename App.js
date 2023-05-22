import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import EsqueceuSenha from './src/screens/EsqueceuSenha';
import Principal from './src/screens/Principal';
import Reservas from './src/screens/Reservas';
import AdicionarReserva from './src/screens/AdicionarReserva';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Principal" component={Principal} options={{headerShown: false}}/>
      <Stack.Screen name="Reservas" component={Reservas} />
      <Stack.Screen name="AdicionarReserva" component={AdicionarReserva}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}