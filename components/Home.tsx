import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomNavigator from './BottomNavigator'
import { NavigationContainer } from '@react-navigation/native'

const Home = () => {
    return (
      
            <NavigationContainer   independent={true}>
                <BottomNavigator />
            </NavigationContainer>
 
    )
}

export default Home

const styles = StyleSheet.create({})