import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Home from "./views/home/home"
import Movies from "./views/home/movies"
import styles from "./styles"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
       activeTintColor: '#00AEAE',
       inactiveTintColor: '#ffffff',
           style: {
                 backgroundColor: '#222222',
                 paddingBottom: 3
           }
    }}>
        <Tab.Screen name="Movies" component={Movies} options={{tabBarIcon: ({color, size}) => (<Ionicons name="film-outline" size={size} color={color}/>)}}/>
        <Tab.Screen name="TV-Shows" component={Home} options={{tabBarIcon: ({color, size}) => (<Ionicons name="tv-outline" size={size} color={color}/>)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

