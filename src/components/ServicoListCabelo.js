import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/styles";

const ServicoListCabelo = ({ id, servico, valor, botao }) => {
  const navigation = useNavigation();

  const handleAgendar = () => {
    navigation.navigate("Agendamento");
  };

  return (
    <SafeAreaView>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.servico}>{servico}</Text>
          <Text style={styles.valor}>{valor}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.botaoContainer} onPress={handleAgendar}>
            <Text style={styles.botaoText}>Agendar</Text>
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
  );
};

export default ServicoListCabelo;
