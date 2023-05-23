import React from 'react';
import { View, Image, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons';


const carouselData = [
  { id: 1, image: require('../../assets/images/01.jpg') },
  { id: 2, image: require('../../assets/images/02.jpg') },
  { id: 3, image: require('../../assets/images/03.jpg') },
  { id: 4, image: require('../../assets/images/04.jpg') },
  { id: 5, image: require('../../assets/images/05.jpg') },
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.grid}>
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.image} />
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

      <View>
          <Text>CATEGORIA DE SERVIÇOS</Text>
      </View>

      <View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => ServicoCabelo()}>
            <Ionicons name="cut" size={32} color="white" />
            <Text style={styles.buttonText}>Cabelo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={actioBtn}>
            <Ionicons name="cut" size={32} color="white" />
            <Text style={styles.buttonText}>Manicure</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={actioBtn}>
            <Ionicons name="cut" size={32} color="white" />
            <Text style={styles.buttonText}>Maquiagem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={actioBtn}>
            <Ionicons name="cut" size={32} color="white" />
            <Text style={styles.buttonText}>Depilação</Text>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20
    },
    content: {
      padding: 20
    },
    carouselItem: {
      width: Dimensions.get('window').width * 0.8,
      height: 200,
      marginHorizontal: 10,
    },
    image: {
      flex: 1,
      resizeMode: 'cover',
      height: 200,
      width: 320,
      borderRadius: 10,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 20,
        width: Dimensions.get('window').width,
    },
    button: {
      width: Dimensions.get('window').width * 0.4,
      backgroundColor: '#7A1E48',
      marginRight: 20,
      flexDirection: 'column',
      alignItems: 'center',
      padding: 10,
    },
    buttonText: {
      color: 'white'
    },
    badge: {
      backgroundColor: '#EEE7EA',
      borderColor: '#7A1E48',
      borderStyle: 'solid',
      borderWidth: 1,
      padding: 20
    },
    titleBadge: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5
    }
});
