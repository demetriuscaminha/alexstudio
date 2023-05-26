import React from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../styles/styles';


const carouselData = [
  { id: 1, image: require('../../assets/images/01.jpg') },
  { id: 2, image: require('../../assets/images/02.jpg') },
  { id: 3, image: require('../../assets/images/03.jpg') },
  { id: 4, image: require('../../assets/images/04.jpg') },
  { id: 5, image: require('../../assets/images/05.jpg') },
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

export default function Inicio({navigation}) {
  const windowWidth = Dimensions.get('window').width;

  const actioBtn = () => {
    console.log('Botão clicado!');
  }
  
  const ServicoCabelo = () => {
    navigation.navigate("ServicoCabelo")
  }

  return (
    <View style={styles.content}>
      <FlatList
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />

      <View style={{marginTop: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color:'#707070'}}>CATEGORIA DE SERVIÇOS</Text>
      </View>

      <View style={styles.grid}>
        <View style={styles.grid2x2}>
          <TouchableOpacity style={[styles.button, {height: 80, marginHorizontal:10, marginVertical: 10}]} onPress={() => ServicoCabelo()}>
            <Ionicons name="cut" size={32} color="white" />
            <Text style={styles.buttonTouchText}>Cabelo</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.grid2x2}>
          <TouchableOpacity style={[styles.button, {height: 80, marginHorizontal:10}]} onPress={actioBtn}>
            <Ionicons name="cut" size={32} color="white" />
            <Text style={styles.buttonTouchText}>Manicure</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.grid2x2}>
          <TouchableOpacity style={[styles.button, {height: 80, marginHorizontal:10}]} onPress={actioBtn}>
            <Ionicons name="cut" size={32} color="white" />
            <Text style={styles.buttonTouchText}>Maquiagem</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.grid2x2}>
          <TouchableOpacity style={[styles.button, {height: 80, marginHorizontal:10}]} onPress={actioBtn}>
            <Ionicons name="cut" size={32} color="white" />
            <Text style={styles.buttonTouchText}>Depilação</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.badge}>
        <Text style={styles.titleBadge}>Contato</Text>
        <Text>José Benedito (85) 98989-5686 </Text>
        <Text>Avenida Francisco Sá, 5383 - Álvaro Weyne</Text>
      </View>
    </View>
  );
};