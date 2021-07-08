import React, { useState } from "react"
import { Alert, Modal, Text, TouchableHighlight, View, Image, ScrollView } from 'react-native';
import styles from "./styles"
import ProgressCircle from 'react-native-progress-circle'

const MyModal = (props) => {

return(
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.titleRow}>
              <View>
              <Text style={styles.modalText}>{props.info.name ? props.info.name : props.info.original_title}</Text>
              </View>
              <ProgressCircle
                  style={{marginVertical: 10}}
                  percent={(props.info.vote_average * 10)}
                  radius={30}
                  borderWidth={8}
                  color="#00AEAE"
                  shadowColor="#ffffff"
                  bgColor="#333333"
              >
                  <Text style={{ fontSize: 18, color: "#ffffff" }}>{props.info.vote_average}</Text>
              </ProgressCircle>
            </View>
            <View style={styles.contentRow}>
              <Image 
                  style={styles.posterImage}
                  source={{
                      uri:
                        ('https://image.tmdb.org/t/p/w500' + props.info.poster_path),
                    }}
              />
              <ScrollView style={{height: 260}}>
                <Text style={styles.description}>
                      {props.info.overview}
                </Text>
              </ScrollView>
            </View>
            <TouchableHighlight
              style={styles.button}
              onPress={() => {
                props.setVisible(!props.visible);
              }}>
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
)
}

export default MyModal;