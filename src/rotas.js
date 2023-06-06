import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createStackNavigator();

import Home from './screens/Home';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import EsqueceuSenha from './screens/EsqueceuSenha';
import Principal from './screens/Principal';
import Reservas from './screens/Reservas';
import AdicionarReserva from './screens/AdicionarReserva';
import ServicoCabelo from './screens/ServicoCabelo';
import Clientes from './screens/Clientes';
import Agendamento from './screens/Agendamento';

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} />
                <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Tab.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
                <Tab.Screen name="Cadastro" component={Cadastro} />
                <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
                <Tab.Screen name="Reservas" component={Reservas} />
                <Tab.Screen name="AdicionarReserva" component={AdicionarReserva} />
                <Tab.Screen name="ServicoCabelo" component={ServicoCabelo} />
                <Tab.Screen name="Clientes" component={Clientes} />
                <Tab.Screen name="Agendamento" component={Agendamento} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}