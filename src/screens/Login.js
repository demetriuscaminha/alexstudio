import React from 'react'
import { Button, Input, Text } from 'react-native-elements'
import { TouchableOpacity, View } from 'react-native'
import styles from '../styles/styles'

export default function Login({navigation}) {

  const cadastrar = () => {
    navigation.navigate("Cadastro")
  }
  const esqueceu = () => {
    navigation.navigate("EsqueceuSenha")
  }
  const mainPage = () => {
    navigation.navigate("Principal")
  }

  return (
    <View style={styles.container}>
      <Text>Logo</Text>
      <Text>
        Entre com Login e Senha ou{' '}
        <TouchableOpacity onPress={cadastrar}>
          <Text>Registre-se</Text>
        </TouchableOpacity>{' '}
        .
      </Text>
      <View>
        <Input
          placeholder="E-mail"
          onChangeText={value => {setEmail(value)}}
          keyboardType='email-address'
          rightIcon={{ type: 'font-awesome', name: 'envelope'}}
        />
        <Input
          placeholder="Sua Senha"
          rightIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={esqueceu}>
          <Text>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <Button
          title="ACESSAR"
          buttonStyle={styles.button}
          onPress={() => mainPage()}
        />
      </View>
    </View>
  )
}
