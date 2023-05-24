import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import RNPickerSelect from 'react-native-picker-select';

const Agendamento = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <View style={styles.container}>
      <Calendar onDayPress={handleDateSelect} />

      <RNPickerSelect
        placeholder={{ label: 'Selecione um horário', value: null }}
        onValueChange={handleTimeSelect}
        items={[
          { label: '09:00', value: '09:00' },
          { label: '10:00', value: '10:00' },
          { label: '11:00', value: '11:00' },
          // Adicione mais opções de horários conforme necessário
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
});

export default Agendamento;
