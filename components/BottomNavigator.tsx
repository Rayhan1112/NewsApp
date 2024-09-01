import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import Articles from './Articles';
import Search from './Search';

const Tab = createBottomTabNavigator();

const { width, height } = Dimensions.get('window');

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'black',
          position: 'absolute',
          bottom: height * 0.05,
          left: width * 0.25,
          right: width * 0.1,
          width: width * 0.5,
          borderRadius: 15,
          height: height * 0.06,
          overflow: 'hidden',
          ...styles.shadow,
          borderWidth: 3,
          paddingTop:1,
          borderColor: 'black',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: 'white',
          tabBarActiveBackgroundColor: 'white',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/house.png')}
                resizeMode="contain"
                style={{
                  width: width * 0.06,
                  height: height * 0.03,
                }}
              />
            </View>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Article"
        component={Articles}
        options={{
          headerShown: false,
          tabBarActiveTintColor: 'white',
          tabBarActiveBackgroundColor: 'white',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/article.png')}
                resizeMode="contain"
                style={{
                  width: width * 0.06,
                  height: height * 0.03,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: 'white',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require('../assets/search.png')}
                resizeMode="contain"
                style={{
                  width: width * 0.06,
                  height: height * 0.03,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },
});