import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import styles from '../styles/styles'

export default function Reservas({navigation}) {
  
  const adicionarReserva = () => {
    navigation.navigate("AdicionarReserva")
  }

  return (
    <View tyle={styles.content}>
        <View>
            <TouchableOpacity onPress={adicionarReserva} style={styles.addButton}>
                <Text>+ Adicionar Reserva</Text>
            </TouchableOpacity>
        </View>

        <View>
            
        </View>
    </View>
  )
};