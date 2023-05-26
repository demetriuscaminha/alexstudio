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
      backgroundColor: '#fff',
      padding: 20,
    },
    defaultColor: {
      backgroundColor: mainColor,
    },
    row: {
      width: windowWidth,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10
    },
    carouselItem: {
      width: Dimensions.get('window').width * 0.8,
      height: 200,
      marginHorizontal: 10,
    },
    carouselImage: {
      flex: 1,
      resizeMode: 'cover',
      height: 200,
      width: 320,
      borderRadius: 10,
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
    card: {
      flex: 1,
      flexDirection: 'row',
      padding: 20,
      justifyContent: 'space-between',
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 20,
    },
    grid2x2: {
      width: '50%',
    },
    button: {
        marginTop: 10,
        backgroundColor: '#7A1E48',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:6
    },
    addButtonView: {
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginVertical: 10,
      marginHorizontal: 20,
    },
    addButton: {
      backgroundColor: mainColor,
      width: windowWidth * 0.4,
      height: 42,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4
    },
    buttonTouch:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7A1E48',
      width: windowWidth *0.9,
      height: 55,
      borderRadius: 10,
    },
    buttonTouchText: {
      color: 'white',
      fontWeight: "bold",
    },
    textAddButton: {
      color: 'white',
    },
    titleCategory: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#707070',
      marginVertical: 20,
    },
    dataBox:{
      height: 75,
      width: 65,
      borderColor: '#C7CBCF',
      borderWidth: 1,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 15
    },
    scrollView: {
      height: 80,
      marginTop: 10,
      backgroundColor: 'white',
    },
    timeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 0,
      borderColor: '#C7CBCF',
      borderBottomWidth: 1,
      paddingVertical: 10,
    },
    freeArea: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    radio: {
      height: 15,
      width: 15,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#7D8392',
      marginLeft: 10,
    },
    itemContainer: {
      backgroundColor: "#fff",
      marginVertical: 10,
      marginHorizontal: 0,
      paddingBottom: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      borderColor: '#C7CBCF',
      borderBottomWidth: 1,
    },
    servico: {
      fontSize: 16,
      fontWeight: "bold",
    },
    valor: {
      fontSize: 14,
      color: "#7A1E48",
    },
    botaoContainer: {
      marginTop: 10,
      backgroundColor: "#7A1E48",
      paddingHorizontal: 20,
      paddingVertical: 8,
      borderRadius: 5,
    },
    botaoText: {
      color: "#fff",
      fontWeight: "bold",
      textAlign: "center",
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

export default styles