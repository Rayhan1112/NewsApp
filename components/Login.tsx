import { StyleSheet, Image, View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';


const Login = ( {navigation}: {navigation: any} ) => {

  AsyncStorage.getItem('Status').then((value) => {
    if (value === 'True') {
      navigation.navigate("HomeTabs");
    }
  });

  const flipPage = () => {
    // Set a flip animation before toggling the form
    setIsLogin((prev) => !prev);
  };


  const [email, setName] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
  const [isLogin, setIsLogin] = useState(true);


  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, pass);
      navigation.navigate("HomeTabs")
      AsyncStorage.setItem('Status', 'True');
    } catch (error) {
      setMessage(error.message)
    }
  };

  const handleSignup = async () => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, pass);
      navigation.navigate("HomeTabs")
      AsyncStorage.setItem('Status', 'True');
    } catch (error) {
      setMessage(error.message)
    }
  };



  return (

    <View style={styles.MainContainer}>
      <StatusBar backgroundColor={'white'} />
      <View>
        <Image style={styles.backImage} source={require('../assets/back.jpg')} />
        <Text style={styles.text}>Taza</Text>
        <Text style={styles.text1}>News</Text>
      </View>

      <Animatable.View
        animation="flipInY"
        duration={800}
        style={styles.MainContainer}
        key={isLogin ? 'login' : 'signup'}
      >
        <Text style={{ color: 'black', left: 60, fontWeight: '700', marginTop: 20, fontSize: 25 }}>{isLogin ? 'Login' : 'Signup'}</Text>
        <View style={{ backgroundColor: 'black', top: 2, left: 60, width: 63, marginBottom: 10, height: 2 }} />


        <View style={styles.Form}>
          <TextInput inputMode='email' style={styles.input} placeholder='Email' placeholderTextColor={'grey'} onChangeText={(text) => setName(text)} />
          <TextInput secureTextEntry={true} style={styles.input} placeholder='Password' placeholderTextColor={'grey'} onChangeText={(text) => setPass(text)} />
          <Text style={{ color: 'red', textAlign: 'center', right: 35, top: 10 }}>{message}</Text>

          <TouchableOpacity style={styles.button} onPress={() => isLogin ? handleLogin() : handleSignup()}>
            <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Signup'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} >
            <Text style={styles.buttonText1}>Forget Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={flipPage} style={[styles.button1, { top: 100, width: 300, marginLeft: -9 }]} >
            <Text style={styles.buttonText1}>{isLogin ? "Don't have an account? Sign up here" : "Already have an account? Log in here"}</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  backImage: {
    marginTop: 40,
    width: 390,
    height: 200
  },
  text: {
    position: 'absolute',
    color: 'black',
    fontSize: 25,
    fontWeight: '900',
    left: 120,
    padding: 4,
    top: 120
  },
  text1: {
    position: 'absolute',
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
    left: 180,
    backgroundColor: '#3181b0',
    borderRadius: 2,
    padding: 5,
    top: 120
  },
  Form: {
    marginLeft: 70,
    marginTop: 10
  },
  input: {
    width: 280,
    marginLeft: -16,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    color: 'black',
    backgroundColor: '#f7f5f5'
  },
  button: {
    backgroundColor: '#3181b0',
    width: 150,
    height: 33,
    justifyContent: 'center',
    marginLeft: 50,
    borderRadius: 5,
    marginTop: 30
  },
  buttonText: {
    fontWeight: '900',
    fontSize: 17,
    textAlign: 'center',
    color: 'white'
  },
  button1: {
    width: 250,
    paddingLeft: 17,
    height: 33,
    justifyContent: 'center',
    marginLeft: 50,
    borderRadius: 5,
    marginTop: 15
  },
  buttonText1: {
    fontWeight: '400',
    fontSize: 15,
    color: '#3181b0'
  }
})


function express() {
  throw new Error('Function not implemented.')
}
// bank, fee struct, result sem, bonefide