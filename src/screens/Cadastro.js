import React from 'react'
import { Button, Input, Text } from 'react-native-elements'
import { View } from 'react-native'
import styles from '../styles/styles'

export default function Cadastro() {

  const mainPage = () => {
    navigation.navigate("Principal")
  }
  
  return (
    <View style={styles.container}>
      <Text>Logo</Text>
      <Input
        placeholder="Nome Completo"
        onChangeText={value => setCNaome(value)}
        secureTextEntry={true}
      />
      <Input
        placeholder="CPF"
        onChangeText={value => setCPF(value)}
        secureTextEntry={true}
      />
      <Input
        placeholder="Apelido"
        onChangeText={value => setApelido(value)}
        secureTextEntry={true}
      />
      <Input
        placeholder="Telefone"
        onChangeText={value => setTelefone(value)}
        secureTextEntry={true}
      />
      <Input
        placeholder="Data de Nascimento"
        onChangeText={value => setDataNasc(value)}
        secureTextEntry={true}
      />
      <Input
        placeholder="E-mail"
        onChangeText={value => setEmail(value)}
        secureTextEntry={true}
      />
      <Input
        placeholder="Senha"
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
      />
      <Button
        title="Salvar"
        buttonStyle={styles.button}
        onPress={() => mainPage()}
      />
    </View>
  )
}
