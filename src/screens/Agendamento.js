import React from "react";
import { Button, Text } from "react-native-elements";
import { ScrollView, SafeAreaView, View, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

export default function Agendamento() {
  return (
    <SafeAreaView style={{ padding: 20, backgroundColor: "white" }}>
      <Text style={styles.titleCategory}>Reserve uma data</Text>
      <ScrollView style={styles.scrollView} horizontal>
        <View style={styles.dataBox}>
          <Text>Jun</Text>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>1</Text>
        </View>
        <View style={styles.dataBox}>
          <Text>Jun</Text>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>2</Text>
        </View>
        <View style={styles.dataBox}>
          <Text>Jun</Text>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>3</Text>
        </View>
        <View style={styles.dataBox}>
          <Text>Jun</Text>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>4</Text>
        </View>
        <View style={styles.dataBox}>
          <Text>Jun</Text>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>5</Text>
        </View>
        <View style={styles.dataBox}>
          <Text>Jun</Text>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>6</Text>
        </View>
      </ScrollView>

      <View>
        <Text style={styles.titleCategory}>Reserve um horário</Text>
        <View style={styles.timeContainer}>
          <View>
            <Text style={{ color: "#707070" }}>07:00 - 08:00</Text>
          </View>
          <View style={styles.freeArea}>
            <Text style={{ color: "#707070" }}>Livre</Text>
            <Text style={styles.radio}></Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <View>
            <Text style={{ color: "#707070" }}>08:00 - 09:00</Text>
          </View>
          <View style={styles.freeArea}>
            <Text style={{ color: "#707070" }}>Livre</Text>
            <Text style={styles.radio}></Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <View>
            <Text style={{ color: "#707070" }}>10:00 - 11:00</Text>
          </View>
          <View style={styles.freeArea}>
            <Text style={{ color: "#707070" }}>Livre</Text>
            <Text style={styles.radio}></Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <View>
            <Text style={{ color: "#707070" }}>11:00 - 12:00</Text>
          </View>
          <View style={styles.freeArea}>
            <Text style={{ color: "#707070" }}>Livre</Text>
            <Text style={styles.radio}></Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <View>
            <Text style={{ color: "#707070" }}>13:00 - 14:00</Text>
          </View>
          <View style={styles.freeArea}>
            <Text style={{ color: "#707070" }}>Livre</Text>
            <Text style={styles.radio}></Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <View>
            <Text style={{ color: "#707070" }}>14:00 - 15:00</Text>
          </View>
          <View style={styles.freeArea}>
            <Text style={{ color: "#707070" }}>Livre</Text>
            <Text style={styles.radio}></Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <View>
            <Text style={{ color: "#707070" }}>15:00 - 16:00</Text>
          </View>
          <View style={styles.freeArea}>
            <Text style={{ color: "#707070" }}>Livre</Text>
            <Text style={styles.radio}></Text>
          </View>
        </View>
        <View style={styles.timeContainer}>
          <View>
            <Text style={{ color: "#707070" }}>16:00 - 17:00</Text>
          </View>
          <View style={styles.freeArea}>
            <Text style={{ color: "#707070" }}>Livre</Text>
            <Text style={styles.radio}></Text>
          </View>
        </View>
      </View>

      <View>
        <View style={{marginTop: 30}}>
          <TouchableOpacity style={styles.buttonTouch}>
            <Text style={styles.buttonTouchText}>Confirmar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
