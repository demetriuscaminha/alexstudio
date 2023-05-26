import React, { useState } from 'react';
import { Input, Text } from 'react-native-elements'
import { TouchableOpacity, View } from 'react-native'
import styles from '../styles/styles';

export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
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
          leftIcon={{ type: 'font-awesome', name: 'lock', size: 19 }}
          rightIcon={{ type: 'font-awesome', name: 'eye', size: 19 }}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={() => mainPage()} style={[styles.buttonTouch, { marginBottom: 15 }]}>
          <Text style={styles.buttonTouchText}>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={esqueceu}  style={styles.buttonTouch}>
          <Text style={styles.buttonTouchText}>ESQUECI MINHA SENHA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cadastrar} style={{alignItems: 'center', marginTop: 15}}>
          <Text>INSCREVA-SE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
