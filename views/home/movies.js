import React, {useState, useEffect} from "react"
import { View, Text, ScrollView, ActivityIndicator, Image, TouchableOpacity } from "react-native"
import Header from "../../components/header/header"
import styles from "./styles"
import MyModal from "../../components/myModal/myModal"

const Movies = () => {

    const API_KEY = "3cdf0542b1cd2c9ad7a86ca1c2f3da27";
    const [popMovs, setPopMovs] = useState()
    const [ratdMovs, setRatdMovs] = useState()
    const [upcomingMovs, setUpcomingMovs] = useState()

    const [modalInfo, setModalInfo] = useState()
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(json => {
            setPopMovs(json.results)
        })
        .catch(err => console.log(err))

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(json => {
            setRatdMovs(json.results)
        })
        .catch(err => console.log(err))

        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(json => {
            setUpcomingMovs(json.results)
        })
        .catch(err => console.log(err))
    }, [])

    function displayCatg(catg){
        return catg.map((item, index) => {
            return (
                <TouchableOpacity key={index} style={styles.poster} onPress={() => {setModalInfo(item); setModalVisible(!modalVisible)}}>
                    <Image 
                        style={styles.posterImage}
                        source={{
                            uri:
                              ('https://image.tmdb.org/t/p/w500' + item.poster_path),
                          }}
                    />
                    <Text numberOfLines={1} style={styles.posterTitle}>{item.original_title}</Text>
                </TouchableOpacity>
            )
        })
    }

    return (
        <View style={{flex: 1}}>
            {modalVisible ? <MyModal visible={modalVisible} setVisible={setModalVisible} info={modalInfo}/> : null}
            <Header/>
            <View style={styles.body}>
                <ScrollView style={{flex:1}}>
                    <View style={styles.category}>
                        <Text style={styles.categoryTitle}>Popular Movies:</Text>
                        <ScrollView horizontal={true}>
                            {popMovs ? displayCatg(popMovs) : <ActivityIndicator style={{marginLeft: 20}}/>}
                        </ScrollView>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryTitle}>Top Rated Movies:</Text>
                        <ScrollView horizontal={true}>
                            {ratdMovs ? displayCatg(ratdMovs) : <ActivityIndicator style={{marginLeft: 20}}/>}
                        </ScrollView>
                    </View>
                    <View style={styles.category}>
                        <Text style={styles.categoryTitle}>Upcoming Movies:</Text>
                        <ScrollView horizontal={true}>
                            {upcomingMovs ? displayCatg(upcomingMovs) : <ActivityIndicator style={{marginLeft: 20}}/>}
                        </ScrollView>
                    </View>
                </ScrollView>
                
            </View>
        </View>
    )
}

export default Movies;