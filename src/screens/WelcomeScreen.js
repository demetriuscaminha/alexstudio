import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import React from "react";

import bg from "../../assets/images/splash.jpg";

export default function WelcomeScreen({ navigation }) {
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
