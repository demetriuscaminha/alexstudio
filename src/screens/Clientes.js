import React from "react";
import { View, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import ClientesList from "../components/ClientesList";
import { Text } from "react-native-elements";

const DATA = [
  { id: "1", nome: "Daniel Lima", email: "daniellima@hotmail.com", dataNasc: '15/06/1986', tel: '85 9876-8685'  },
  { id: "2", nome: "Demetrius Caminha", email: "demetrius@caminha@gmail.com", dataNasc: '15/06/1986', tel: '85 9876-8685'  },
  { id: "3", nome: "Rafaella Abreu", email: "rafaellaabreu@live.com", dataNasc: '15/06/1986', tel: '85 9876-8685'  },
  { id: "4", nome: "Pietro da Silva", email: "pietrosilva@gmail.com", dataNasc: '15/06/1986', tel: '85 9876-8685'  },
  { id: "5", nome: "Henrique Gomes", email: "henriquegomes@gmail.com", dataNasc: '15/06/1986', tel: '85 9876-8685'  },
];

const Clientes = () => {

  const renderItem = ({ item }) => (
    <ClientesList
      id={item.id}
      nome={item.nome}
      email={item.email}
      dataNasc={item.dataNasc}
      tel={item.tel}
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

export default Clientes;
