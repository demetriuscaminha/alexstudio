import React from "react";
import { Button, Text } from "react-native-elements";
import styles from "../styles/styles";
import { View } from "react-native";

export default function Home({ navigation }) {
  const login = () => {
    navigation.navigate("Login");
  };
  const cadastrar = () => {
    navigation.navigate("Cadastro");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Logo</Text>
      <Button
        title="LOGIN"
        buttonStyle={styles.button}
        onPress={() => login()}
      />
      <Button
        title="CADASTRAR"
        buttonStyle={styles.button}
        onPress={() => cadastrar()}
      />
    </View>
  );
}
