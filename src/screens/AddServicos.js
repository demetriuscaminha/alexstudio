import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import styles from "../styles/styles";
import { saveService } from "../config/Firestore";

export default function AddServicos({navigation}) {
    const [service, setService] = useState('');
    const [preco, setPreco] = useState('');
  
    async function save(){
  
      let resultado = await saveService({
          service,
          preco
      })
      if (resultado == 'erro') {
          Alert.alert('Erro ao criar serviço!')
      } else {
          navigation.goBack();
      }
    }
  
    return (
      <View style={styles.container}>
        <TextInput
          label="Serviço"
          value={service}
          style={styles.inputField}
          placeholder="Nome do serviço"
          onChangeText={texto => setService(texto)}
        ></TextInput>
        <TextInput
          label="valor"
          value={preco}
          style={styles.inputField}
          placeholder="Valor do serviço"
          onChangeText={texto => setPreco(texto)}
        ></TextInput>
        <Button title="Adicionar Serviço" onPress={() => save()}/>
      </View>
    );
  }
  