import React, { useState } from 'react';
import { Button, Input, Text } from 'react-native-elements'
import { TouchableOpacity, View } from 'react-native'
import styles from '../styles/styles'

export default function Cadastro({ navigation }) {

  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [apelido, setApelido] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mainPage = () => {
    navigation.navigate("Principal")
  }
  
  return (
    <View style={styles.container}>
      <Text>Logo</Text>
      <Input
        placeholder="Nome Completo"
        onChangeText={value => setNome(value)}
        />
      <Input
        placeholder="CPF"
        onChangeText={value => setCPF(value)}
      />
      <Input
        placeholder="Apelido"
        onChangeText={value => setApelido(value)}
      />
      <Input
        placeholder="Telefone"
        onChangeText={value => setTelefone(value)}
      />
      <Input
        placeholder="Data de Nascimento"
        onChangeText={value => setDataNasc(value)}
      />
      <Input
        placeholder="E-mail"
        onChangeText={value => setEmail(value)}
      />
      <Input
        placeholder="Senha"
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={() => mainPage()} style={styles.buttonTouch}>
        <Text style={styles.buttonTouchText}>Salvar Cadastro</Text>
      </TouchableOpacity>
    </View>
  )
}
