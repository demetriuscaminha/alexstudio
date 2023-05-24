import React from 'react'
import { Button, Input, Text } from 'react-native-elements'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import styles from '../styles/styles';

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
      <View style={styles.content}>
        <Input
          placeholder="E-mail"
          onChangeText={value => {setEmail(value)}}
          keyboardType='email-address'
          rightIcon={{type: 'font-awesome', name: 'envelope', size: 14}}
          inputStyle={styles.inputField}
        />
        <Input
          placeholder="Sua Senha"
          rightIcon={{ type: 'font-awesome', name: 'lock', size: 18 }}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={esqueceu} style={{marginBottom:20,}}>
          <Text>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => mainPage()} style={styles.buttonTouch}>
          <Text style={styles.buttonTouchText}>ACESSAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
