import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Inicio from './Inicio';
import Reservas from './Reservas';

function Clientes() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Clientes!</Text>
    </View>
  );
}

function Config() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Configurações!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
        <Tab.Navigator
            initialRouteName="Inicio"
            screenOptions={{
            tabBarActiveTintColor: '#e91e63',
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
        name="Configurações"
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