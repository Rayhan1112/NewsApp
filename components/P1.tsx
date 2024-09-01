import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'


const Card=({imgPath,Price,Views, AnimalType,Breed}) =>{
    return(
        <View style={styles.card}>
            {/* Make View of Card */}
            <Image style={styles.cardImage}source={imgPath} alt='Image'/>

            <View style={styles.cardTextContainer}>
                <Text style={styles.SellerName}>Seller Name</Text>
                <Text style={styles.cardText}>Animal Type: {AnimalType}</Text>
                <Text style={styles.cardText}>Pregnant - Yes/No</Text>
                <Text style={styles.cardText}>Breed : {Breed}</Text>
                <Text style={styles.cardText}>Age : 00 Year</Text>
            </View>

            <View style={styles.cardBtnContainer}>
                <TouchableOpacity >
                    <Text style={styles.cardButton}>{Price}</Text>
                </TouchableOpacity>
                <Text style={styles.viewText}>views {Views}</Text>


            </View>


        </View>
    );
}


const P1 = () => {
    const [pressedButton, setPressedButton] = useState(null);
    const handlePress = (buttonIndex) => {
        setPressedButton(buttonIndex);
    };
    return (
        <View style={{backgroundColor:'white', flex:1}}>
            {/* Action bar */}
            <View style={styles.UpperContainer}>
                <Image style={styles.UpperLogo} source={require('../assets/previous.png')} />
                <Text style={styles.UpperText}>See Cattles</Text>
                <Image style={styles.UpperLogo} source={require('../assets/notification.png')} />
            </View>

            {/* @ Buttons */}
            <Text style={styles.CattleText}>Cattles Near You</Text>
            <View style={styles.ButtonsGroup}>
                {['@District', '@State', '@neighboring state 2', '@neighboring state 2'].map((buttonLabel, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.button,
                            pressedButton === index && styles.buttonPressed,
                        ]}
                        onPress={() => handlePress(index)}>
                        <Text
                            style={[
                                styles.buttonText,
                                pressedButton === index && styles.textPressed, // Apply text pressed style if the button is pressed
                            ]}>
                            {buttonLabel}
                        </Text>
                    </TouchableOpacity>
                ))}

            </View>

            <View >    
            <Card imgPath={require('../assets/picture1.jpg')} Price={"40,000"} Views={48} AnimalType={"Cow"} Breed={"HF Cross"}/>
            <Card imgPath={require('../assets/picture2.jpg')} Price={"40,000"} Views={30} AnimalType={"Cow"} Breed={"Khillari"}/>
            <Card imgPath={require('../assets/picture3.jpg')} Price={"80,000"} Views={55} AnimalType={"Buffalo"} Breed={"Murah"}/>
            </View>

        </View>
    )
}

export default P1

const styles = StyleSheet.create({

    // Action bar styling
    UpperContainer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    UpperLogo: {
        width: 30,
        height: 30,
    },
    UpperText: {
        fontSize: 26,
        color: 'black',
        fontWeight: '800'
    },


    // @ Button Styles
    CattleText: {
        color: 'black',
        fontSize: 21,
        marginLeft: 20,
        marginTop: 20,
        fontWeight: '700'
    },
    ButtonsGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
    },
    button: {
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 9,
        marginHorizontal: 5,
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        marginBottom: 10
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
    // When button click
    buttonPressed: {
        backgroundColor: '#497af5',
    },
    textPressed: {
        color: 'white', 
    },

    // Styling Cards which is reused 
    card:{
       marginHorizontal:20,
       marginVertical:14,
       flexDirection:'row',
       paddingVertical:10,
       paddingHorizontal:1,
       backgroundColor:'white',
       borderRadius:20,
       shadowColor: '#000',
       shadowRadius: 10,
       shadowOffset: { width: 10, height: 15 },
       elevation:1
  },
    cardImage:{
        height:130,
        width:120,
        borderRadius:15,
        marginLeft:10
    },
    cardTextContainer:{
        marginLeft:10
    },
    SellerName:{
        color:'black',
        fontWeight:'800',
        marginBottom:10,
        marginTop:10
    },
    cardText:{
        color:'#7c7d7c',
        fontWeight:'400'
    },
    cardBtnContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        marginLeft:20
        
    },
    cardButton:{
        backgroundColor:'#497af5',
        textAlign:'center',
        fontWeight:'500',
        borderRadius:20,
        color:'white',
        marginTop:10
    },
    viewText:{
        color:'#8a8a8a',
        marginBottom:8
    }

});