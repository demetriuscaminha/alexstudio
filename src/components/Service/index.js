import { View, Text } from 'react-native';

export default function Service({ service, preco }) {

  return (
    <View>
      <Text>{service}</Text>
      <Text>R$ {preco}</Text>
    </View>
  );
}