import React, { useState } from "react";
import { View, ActivityIndicator,
  KeyboardAvoidingView, TouchableOpacity, Text, Dimensions, StyleSheet, ImageBackground } from "react-native";
import { TextInput } from 'react-native-paper';
import { FIREBASE_AUTH } from "../config/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import bg from "../../assets/images/splash.jpg";

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const {user: {accessToken, uid}} = await signInWithEmailAndPassword(auth, email, password);

      await AsyncStorage.setItem('@user', JSON.stringify({accessToken, uid, email}))

      // console.log(response);
      navigation.replace("Principal");
    } catch (error) {
      console.log(error);
      alert("Login falhou: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground source={bg} style={styles.backgroundImage}>
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <TextInput
          label="Email"
          mode='outlined'
          value={email}
          style={styles.inputField}
          placeholder="E-mail"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          label="Senha"
          value={password}
          style={styles.inputField}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        ></TextInput>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <TouchableOpacity
              onPress={signIn}
              style={styles.button}
            >
              <Text style={styles.title}>Efetuar Login!</Text>
            </TouchableOpacity>

            <Text>Ainda não tem cadastro?</Text>
            <TouchableOpacity
             onPress={() => navigation.navigate("Cadastro")}
              style={styles.button}
            >
              <Text style={styles.title}>Registre-se</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
             onPress={() => navigation.navigate("Calendar")}
              style={styles.button}
            >
              <Text style={styles.title}>Calendário</Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
    </View>
    </ImageBackground>
  );
};

const larguraTela = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // Alinha o conteúdo na parte inferior
    alignItems: "center", // Centraliza horizontalmente o conteúdo
    marginBottom: 50,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Para redimensionar a imagem para preencher a tela
  },
  inputField: {
    width: larguraTela *0.8,
    marginVertical: 10,
    backgroundColor: 'transparent',
    borderColor: '#FFF9EF',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius:0,
    placeholder: 'white',
  },
  button: {
    width: larguraTela * 0.7,
    backgroundColor: "#FFF9EF",
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});

