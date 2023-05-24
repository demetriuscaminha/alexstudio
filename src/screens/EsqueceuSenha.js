import React from 'react'
import { Button, Input, Text } from 'react-native-elements'
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native'
import styles from '../styles/styles';

export default function EsqueceuSenha({navigation}) {
  
  const mainPage = () => {
    navigation.navigate("Principal")
  }

  return (
    <View style={styles.container}>
      <Text>Logo</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#707070'}}>Esqueceu sua senha?</Text>
      <Text style={{color: '#707070', marginTop:10}}>digite seu e-mail abaixo para redefinir sua senha</Text>
      <View style={styles.content}>
        <Input
          placeholder="Sua Senha"
          rightIcon={{ type: 'font-awesome', name: 'lock', size: 18 }}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />

        <TouchableOpacity onPress={() => mainPage()} style={styles.buttonTouch}>
          <Text style={styles.buttonTouchText}>ENVIAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
