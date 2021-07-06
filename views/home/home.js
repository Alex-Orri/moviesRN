import React, {useEffect, useState} from "react";
import { View, Text, ScrollView, ActivityIndicator, Image } from "react-native";
import Header from "../../components/header/header"
import styles from "./styles"

const Home = () => {

    const API_KEY = "3cdf0542b1cd2c9ad7a86ca1c2f3da27";
    const [popShows, setPopShows] = useState()
    const [ratdShows, setRatdShows] = useState()
    const [latestShows, setLatestShows] = useState()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(json => {
            setPopShows(json.results)
        })
        .catch(err => console.log(err))

        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(json => {
            setRatdShows(json.results)
        })
        .catch(err => console.log(err))

        fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(json => {
            setLatestShows(json.results)
        })
        .catch(err => console.log(err))
    }, [])


    function displayCatg(catg){
        return catg.map((item, index) => {
            return (
                <View key={index} style={styles.poster}>
                    <Image 
                        style={styles.posterImage}
                        source={{
                            uri:
                              ('https://image.tmdb.org/t/p/w500' + item.poster_path),
                          }}
                    />
                    <Text numberOfLines={1} style={styles.posterTitle}>{item.name}</Text>
                </View>
            )
        })
    }


    return(
        <View style={{flex: 1}}>
            <Header/>
            <View style={styles.body}>
                <ScrollView style={{flex:1}}>
                    <View style={styles.category}>
                        <Text style={styles.categoryTitle}>Popular Shows:</Text>
                        <ScrollView horizontal={true}>
                            {popShows ? displayCatg(popShows) : <ActivityIndicator style={{marginLeft: 20}}/>}
                        </ScrollView>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryTitle}>Top Rated Shows:</Text>
                        <ScrollView horizontal={true}>
                            {ratdShows ? displayCatg(ratdShows) : <ActivityIndicator style={{marginLeft: 20}}/>}
                        </ScrollView>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryTitle}>Shows Airing Today:</Text>
                        <ScrollView horizontal={true}>
                            {latestShows ? displayCatg(latestShows) : <ActivityIndicator style={{marginLeft: 20}}/>}
                        </ScrollView>
                    </View>
                </ScrollView>
                
            </View>
        </View>
    )
}

export default Home;