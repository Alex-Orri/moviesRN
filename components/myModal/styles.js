import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: '#444444',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: "space-between",
        shadowColor: '#000',
        width: "92%",
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowOpacity: 0.55,
        shadowRadius: 3.84,
        elevation: 5,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        fontSize: 35,
        marginHorizontal: 15,
        color: "white",
        flexWrap: 'wrap',
        flexDirection: "column",
      },
      titleRow: { 
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: 25,
      },
      contentRow: {
        flexDirection: "row",
        width: "100%",
      },
      posterImage: {
        width: 160,
        height:260,
        borderRadius: 10
      },
      description: {
        color: "white",
        fontSize: 15,
        marginHorizontal: 10,
        flex: 1, 
        flexWrap: 'wrap'
      },
      button: {
        marginBottom: 15, 
        marginTop: 45,
        padding: 10, 
        borderRadius: 15 , 
        backgroundColor: '#00AEAE' 
      }
  });

  export default styles;