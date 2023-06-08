import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Cadastro from './src/screens/Cadastro';
import EsqueceuSenha from './src/screens/EsqueceuSenha';
import Principal from './src/screens/Principal';
import Reservas from './src/screens/Reservas';
import AdicionarReserva from './src/screens/AdicionarReserva';
import ServicoCabelo from './src/screens/ServicoCabelo';
import Clientes from './src/screens/Clientes';
import AddServicos from './src/screens/AddServicos'; 
import WelcomeScreen from './src/screens/WelcomeScreen';
import CalendarScreen from './src/screens/CalendarScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName={WelcomeScreen}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Principal" component={Principal} options={{headerShown: false}}/>
      <Stack.Screen name="Reservas" component={Reservas} options={{ title: 'My home' }}/>
      <Stack.Screen name="AdicionarReserva" component={AdicionarReserva}/>
      <Stack.Screen name="ServicoCabelo" component={ServicoCabelo}/>
      <Stack.Screen name="Clientes" component={Clientes}/>
      <Stack.Screen name="AddServicos" component={AddServicos}/>
      <Stack.Screen name="Calendar" component={CalendarScreen}/>
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