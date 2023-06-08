import { useState } from "react";
import {
  View,
  TextInput,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import styles from '../styles/styles'
import { FIREBASE_AUTH } from "../config/FirebaseConfig";
import {
  createUserWithEmailAndPassword
} from "firebase/auth";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Cadastro realizado com sucesso!!");
      navigation.replace('Principal');
    } catch (error) {
      console.log(error);
      alert("Login falhou: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          value={email}
          style={styles.inputField}
          placeholder="E-mail"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
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
            <Button title="Registrar" onPress={signUp} />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
}
