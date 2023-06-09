import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import React, { useEffect } from "react";

import bg from "../../assets/images/splash.jpg";

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function WelcomeScreen({ navigation }) {
  useEffect(() => {
    async function init() {

      const user = await AsyncStorage.getItem('@user')

      if (!user) return 

      navigation.navigate('Principal')
    }

    init()
  }, [])

  return (
    <ImageBackground source={bg} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.button}>
          <Text style={styles.title}>Iniciar a Experiência!</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

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
  button: {
    width: larguraTela * 0.7,
    backgroundColor: "#FFF9EF",
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
});
