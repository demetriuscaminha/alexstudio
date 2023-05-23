import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const mainColor = '#7A1E48';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      width: windowWidth,
      padding: 20,
    },
    defaultColor: {
      backgroundColor: mainColor,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10
    },
    column: {
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    },
    halfBox: {
      width: windowWidth *0.5,
      padding: 20
    },
    inputField: {
      width: windowWidth *0.8,
    },
    button: {
        width: windowWidth,
        marginTop: 10
    },
    addButton: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginVertical: 15,
      marginHorizontal: 20
      
    },
});

export default styles