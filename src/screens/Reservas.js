import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import styles from "../styles/styles";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Reservas({ navigation }) {
  const adicionarReserva = () => {
    navigation.navigate("Agendamento");
  };

  return (
    <View tyle={styles.content}>
      <View style={styles.addButtonView}>
        <TouchableOpacity onPress={adicionarReserva} style={styles.addButton}>
          <Text style={styles.textAddButton}>+ Adicionar Reserva</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <View style={styles.halfBox}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Corte Feminino</Text>
          <View style={styles.row}>
            <Ionicons name="calendar-outline" size={24} color='#7A1E48' />
            <Text>22.02.2023</Text>
          </View> 
          <View style={styles.row}>
            <Ionicons name="alarm-outline" size={24} color='#7A1E48' />
            <Text>10:30</Text>
          </View>
          <View style={styles.row}>
            <Ionicons
              name="md-information-circle-outline"
              size={24}
              color='#7A1E48'
            />
            <Text>R$ 70,00</Text>
          </View>
        </View>

        <View>
          <Button
            title="Cancelar Reserva"
            buttonStyle={{width: 150, backgroundColor: '#7A1E48', borderRadius: 6}}
            onPress={() => mainPage()}
          />
          <Button
            title="Editar Reserva"
            buttonStyle={{width: 150, backgroundColor: '#7A1E48', borderRadius: 6, marginTop: 10,}}
            onPress={() => mainPage()}
          />
        </View>
      </View>
    </View>
  );
}
