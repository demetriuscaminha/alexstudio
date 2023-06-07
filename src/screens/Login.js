import React, { useState } from 'react';
import { Input, Text } from 'react-native-elements'
import { TouchableOpacity, View } from 'react-native'
import styles from '../styles/styles';
import { PaperProvider, TextInput } from 'react-native-paper';
import { EntradaTexto } from '../components/EntradaTexto';

export default function Login({ navigation }) {

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
        <EntradaTexto
          label="E-mail"
          value={email}
          onChangeText={texto => setEmail(texto)}
        />
        <EntradaTexto
          label="Senha"
          value={password}
          onChangeText={texto => setPassword(texto)}
          secureTextEntry
        />
        <TouchableOpacity onPress={() => mainPage()} style={[styles.buttonTouch, { marginBottom: 15 }]}>
          <Text style={styles.buttonTouchText}>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={esqueceu} style={styles.buttonTouch}>
          <Text style={styles.buttonTouchText}>ESQUECI MINHA SENHA</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cadastrar} style={{ alignItems: 'center', marginTop: 15 }}>
          <Text>INSCREVA-SE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
