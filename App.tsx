import { Dimensions, Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/Home';
import HomeScreen from './components/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Articles from './components/Articles';
import Search from './components/Search';
import Demo from './components/Demo';
import P1 from './components/P1';
const { width, height } = Dimensions.get('window');


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
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
              source={require('./assets/house.png')}
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
              source={require('./assets/article.png')}
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
              source={require('./assets/search.png')}
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
}
const App = () => {
  return (
    <View style={styles.MainContainer}>
      <StatusBar backgroundColor={'grey'} />
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerShown:false}}
        initialRouteName='Test'>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
          <Stack.Screen name="Test" component={P1} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>

  )
}

export default App

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1
  }, 
})