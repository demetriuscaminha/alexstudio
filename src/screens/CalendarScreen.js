import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import { Agenda } from 'react-native-calendars';
import { Card, Avatar } from 'react-native-paper';


const Schedule = () => {
  
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

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

  const [token, setToken] = useState('')

  return (
    <View style={{ flex: 1 }}>
      <View style={{height: 20}}></View>
      <Button onPress={showDatepicker} title="Selecione uma Data" />
      <View style={{height: 20}}></View>
      <Button onPress={showTimepicker} title="Selecione um horário" />
      <View style={{height: 20}}></View>
      <Text>selected: {date.toLocaleString()}</Text>
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