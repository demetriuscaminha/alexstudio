import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import { Firestore } from 'firebase/firestore';
import { async } from '@firebase/util';


const Schedule = (children) => {
  // console.log(children.route.params)
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const [service, setService] = useState(children.route.params.servico.service);
  const [preco, setPreco] = useState(children.route.params.servico.preco);
  const [id, setId] = useState(children.route.params.servico.id);
  const [uid, setUid] = useState('');


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  async function cadastraAgendamento(id,preco,uid) {

    let resultado = await saveAgendamento({
      // service,
      // preco
    })
    if (resultado == 'erro') {
      Alert.alert('Erro ao criar serviço!')
    } else {
      navigation.goBack();
    }
  };
  useEffect(() => {
    async function init() {
      const user = await AsyncStorage.getItem("@user");
      setUid(JSON.parse(user))
    }

    init();
  }, []);
  // const [token, setToken] = useState('')

  return (
    <View style={{ flex: 1 }}>
      <Text>{uid}</Text>
      <Text>{id}</Text>
      <Text>{service}</Text>
      <Text>{preco}</Text>
      <Text>selected: {date.toLocaleString()}</Text>
      <View style={{ height: 20 }}></View>
      <Button onPress={showDatepicker} title="Selecione uma Data" />
      <View style={{ height: 20 }}></View>
      <Button onPress={showTimepicker} title="Selecione um horário" />
      <Button onPress={cadastraAgendamento(id,preco)} title="Realizar Agendamento" />
      <View style={{ height: 20 }}></View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default Schedule;