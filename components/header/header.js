import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { useFonts, Roboto_100Thin } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

const Header = () => {

    let [fontsLoaded] = useFonts({
        Roboto_100Thin,
      });
      
    return(
        <View style={styles.header}>
            {fontsLoaded ?
            <Text style={[{fontFamily: 'Roboto_100Thin'}, styles.headerText]}>The Movies Collection</Text>:
            <AppLoading/>

}
        </View>
    )
}

export default Header;