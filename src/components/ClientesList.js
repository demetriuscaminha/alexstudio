import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/styles";

const ClientesList = ({ id, nome, email, dataNasc, tel }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.servico}>{nome}</Text>
          <Text style={styles.valor}>{email}</Text>
          <Text style={styles.servico}>{dataNasc}</Text>
          <Text style={styles.valor}>{tel}</Text>
        </View>
      </View>
      </SafeAreaView>
  );
};

export default ClientesList;
