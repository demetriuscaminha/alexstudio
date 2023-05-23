import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ServicoListCabelo = ({ id, servico, valor, botao }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.servico}>{id}</Text>
      <Text style={styles.servico}>{servico}</Text>
      <Text style={styles.valor}>{valor}</Text>
      <TouchableOpacity style={styles.botaoContainer}>
        <Text style={styles.botaoText}>{botao}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  servico: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  valor: {
    fontSize: 14,
    color: '#888',
  },
  botaoContainer: {
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 5,
  },
  botaoText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ServicoListCabelo;
