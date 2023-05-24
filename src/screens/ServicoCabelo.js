import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import ServicoListCabelo from "../components/ServicoListCabelo";
import { Text } from "react-native-elements";

const DATA = [
  { id: "1", servico: "Corte Feminino", valor: "R$ 70,00", botao: "Agendar" },
  { id: "2", servico: "Corte Masculino", valor: "R$ 40,00", botao: "Agendar" },
  { id: "3", servico: "Tintura", valor: "R$ 120,00", botao: "Agendar" },
  { id: "4", servico: "Botox", valor: "R$ 70,00", botao: "Agendar" },
  { id: "5", servico: "Hidratação", valor: "R$ 50,00", botao: "Agendar" },
];

const ServicoCabelo = () => {

  const renderItem = ({ item }) => (
    <ServicoListCabelo
      id={item.id}
      servico={item.servico}
      valor={item.valor}
      botao={item.botao}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 15}}>Selecione um serviço</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});

export default ServicoCabelo;
