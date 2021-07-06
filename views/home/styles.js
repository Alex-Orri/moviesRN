import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
      flex:8,
      backgroundColor: "#333333"
    },
    category: {
      height: 270,
      marginVertical: 30
    },
    poster: {
      padding: 10,
      paddingTop: 5,
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
      height:215,
      backgroundColor: "#222222"
    },
    posterImage: {
      width: 120,
      height: 180,
      alignSelf: "center",
      borderRadius: 10
    },
    posterTitle: {
      fontSize: 20,
      color: "#FFFFFF",
      width: 120
    },
    categoryTitle: {
      color: "#FFFFFF", 
      fontSize: 25, 
      backgroundColor: "#222222"
    }
  });

  export default styles;