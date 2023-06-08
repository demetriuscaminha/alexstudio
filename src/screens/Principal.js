import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getAuth, signOut } from 'firebase/auth';
import Inicio from './Inicio';
import Reservas from './Reservas';
import Clientes from './Clientes';

function Config({navigation}) {

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigation.navigate('Login');
    } catch (error) {
      console.log('Erro ao fazer logout:', error);
      // Lógica de tratamento de erro, se necessário
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Simbora!" onPress={handleLogout} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
        <Tab.Navigator
            initialRouteName="Inicio"
            screenOptions={{
            tabBarActiveTintColor: '#7A1E48',
            }}
        >
        <Tab.Screen
        name="Inicio"
        component={Inicio}
        options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen
            name="Reservas"
            component={Reservas}
            options={{
            tabBarLabel: 'Reservas',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="calendar-month" color={color} size={size} />
            ),
            }}
        />
        <Tab.Screen
        name="Clientes"
        component={Clientes}
        options={{
            tabBarLabel: 'Clientes',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle-outline" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen
        name="Logout"
        component={Config}
        options={{
            tabBarLabel: 'Configurações',
            tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
            ),
        }}
        />
        </Tab.Navigator>
  );
}