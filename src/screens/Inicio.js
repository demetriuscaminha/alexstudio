import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  FlatList,
  RefreshControl,
} from "react-native";
import styles from "../styles/styles";
import { listService } from "../config/Firestore";
import { Button } from "react-native-elements";

import AsyncStorage from "@react-native-async-storage/async-storage";

const carouselData = [
  { id: 1, image: require("../../assets/images/01.jpg") },
  { id: 2, image: require("../../assets/images/02.jpg") },
  { id: 3, image: require("../../assets/images/03.jpg") },
  { id: 4, image: require("../../assets/images/04.jpg") },
  { id: 5, image: require("../../assets/images/05.jpg") },
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        <View style={styles.carouselItem}>
          <Image source={item.image} style={styles.carouselImage} />
        </View>
      </View>
    </View>
  );
};

export default function Inicio({ navigation }) {
  const [service, setService] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  async function listarDadosServices() {
    setRefreshing(true);
    const servicesFirestore = await listService();
    setService(servicesFirestore);

    navigation.navigate('Calendar', { service: servicesFirestore.service });
    console.log({ servicesFirestore });
    setRefreshing(false);
  }

  useEffect(() => {
    listarDadosServices();
  }, []);

  useEffect(() => {
    async function init() {
      const user = await AsyncStorage.getItem("@user");

      const parsedUser = JSON.parse(user);
      console.log("User ID:", parsedUser.uid);
    }

    init();
  }, []);

  return (
    <ScrollView
      style={{ width: "100%" }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={listarDadosServices}
        />
      }
    >
      <View style={styles.content}>
        <FlatList
          data={carouselData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#707070" }}>
            NOSSOS SERVIÇOS
          </Text>
        </View>

        {service.map((service) => {
          return (
            <View
              key={service.id}
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.servico}>{service.service}</Text>
              <Text style={styles.valor}>R$ {service.preco}</Text>
              <Button
                title="Fazer Reserva"
                onPress={() => navigation.navigate("Calendar", { service })}
                >
                Reserva
              </Button>
            </View>
          );
        })}

        <View style={styles.badge}>
          <Text style={styles.titleBadge}>Contato</Text>
          <Text style={{ fontSize: 12 }}>José Benedito (85) 98989-5686</Text>
          <Text style={{ fontSize: 12 }}>
            Avenida Francisco Sá, 5383 - Álvaro Weyne
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
