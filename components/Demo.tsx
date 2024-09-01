import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Image } from 'react-native-animatable'



const Demo = () => {
  return (
    <View style={styles.MainContainer}>
      <ScrollView>
        <View style={{flexDirection:'row', marginTop:30, justifyContent:'space-between',marginLeft:20, marginRight:30}}>
          <Image style={styles.upperLogo} source={require('../assets/previous.png')}/>
          <Image style={styles.upperLogo} source={require('../assets/bookmark.png')}/>
        </View>
        <Image style={{ width: 330, height: 200, margin: 30, borderRadius: 20 }} source={require('../assets/images.jpeg')} />
        <View>
          <Text style={{ color: 'black', fontSize: 23, marginLeft: 24 }}>@farmName</Text>
          <Text style={{ color: 'grey', fontSize: 12, marginLeft: 44 }}>@district, State</Text>
        </View>
        <Image style={{ height: 45, width: 45, marginLeft: 320, bottom: 45, borderWidth: 1, borderColor: 'black', borderRadius: 50 }} source={require('../assets/download.jpeg')} />

        <View style={{ flexDirection: 'row', bottom: 20 }}>
          <Text style={{ color: 'black', marginLeft: 30 }}>Cow ID-#12456</Text>
          <Image style={{ width: 100, height: 20, left: 35 }} source={require('../assets/star.jpg')} />
        </View>

        <View style={styles.card}>
          <Text style={{ fontWeight: '700', color: 'black', marginLeft: 30, fontSize: 18, margin: 10, }}>Basic Information</Text>

          <View style={styles.cardProp}>
            <Text style={styles.cardText}>Cattle Type:</Text>
            <Text style={styles.cardText}>murrah</Text>
          </View>

          <View style={styles.cardProp}>
            <Text style={styles.cardText}>Breed:</Text>
            <Text style={styles.cardText}>HF</Text>
          </View>

          <View style={styles.cardProp}>
            <Text style={styles.cardText}>Calving Number:</Text>
            <Text style={styles.cardText}>3</Text>
          </View>

          <View style={{ backgroundColor: '#fa5928', flexDirection: 'row', height: 26, width: 320, left: 20, marginTop: 5, marginBottom: 5, borderRadius: 20, paddingLeft: 10,paddingRight:9, paddingTop: 3,justifyContent:'space-between' }}>
            <Text style={[styles.cardText, styles.onlySingleText]}>Dairy Milk Production:</Text>
            <Text style={[styles.cardText, styles.onlySingleText]}>20L</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={{ fontWeight: '700', color: 'black', marginLeft: 30, fontSize: 18, margin: 10, }}>Pregnency Information</Text>

          <View style={styles.cardProp}>
            <Text style={styles.cardText}>Date of Past Delivery:</Text>
            <Text style={styles.cardText}>12/05/21</Text>
          </View>

          <View style={styles.cardProp}>
            <Text style={styles.cardText}>Pregnant:</Text>
            <Text style={styles.cardText}>Yes/No</Text>
          </View>

          <View style={styles.cardProp}>
            <Text style={styles.cardText}>Date of Insemination:</Text>
            <Text style={styles.cardText}>00/00/00</Text>
          </View>

          <View style={styles.cardProp}>
            <Text style={styles.cardText}>Date of Next Delivery:</Text>
          </View>
          <View style={{ backgroundColor: '#fa5928', flexDirection: 'row', height: 26, width: 150, left: 30, marginTop: 5, marginBottom: 5, borderRadius: 20, paddingLeft: 16, paddingTop: 3 }}>

            <Text style={[styles.cardText, styles.onlySingleText]}>Conceived = 5M5D</Text>
          </View>

          <View style={{marginRight:10,flexDirection:'row',left:30}}>
            <Text style={styles.cardText}>Conceived =</Text>
            <Text style={styles.cardText}> Date of insemination - today</Text>
          </View>

          <View style={[styles.cardProp, { paddingRight: 70 }]}>
            <Text style={styles.cardText}>if Date of insemination today is + 9M9D (cow)</Text>
            <Text style={styles.cardText}>then show delivered</Text>
          </View>

          <View style={[styles.cardProp, { paddingRight: 40 }]}>
            <Text style={styles.cardText}>if Date of insemination today is + 10M10D (Buffalo)</Text>
            <Text style={styles.cardText}>then show delivered</Text>
          </View>
        </View>


        <View style={styles.card}>
          <Text style={{ fontWeight: '700', color: 'black', marginLeft: 30, fontSize: 18, margin: 10, }}>Other Information</Text>

          <View style={styles.cardProp}>
            <Text style={styles.cardText}>Semen:</Text>
            <Text style={styles.cardText}>@input</Text>
          </View>

          <View style={styles.cardProp}>
            <Text style={styles.cardText}>Deworming:</Text>
            <Text style={styles.cardText}>@input</Text>
          </View>

          <View style={styles.cardProp}>
            <Text style={styles.cardText}>Vaccination:</Text>
            <Text style={styles.cardText}>@input</Text>
          </View>

          <View style={styles.cardProp}>
            <Text style={styles.cardText}>Weight:</Text>
            <Text style={styles.cardText}>@input</Text>
          </View>

          <View style={{ backgroundColor: '#fa5928', flexDirection: 'row', height: 26, width: 300, left: 30, marginTop: 20, marginBottom: 20, borderRadius: 20, paddingLeft: 30, paddingTop: 3 }}>
            <Text style={[styles.cardText, styles.onlySingleText]}>Price:</Text>
            <Text style={[styles.cardText, styles.onlySingleText]}>@input</Text>
          </View>
        </View>
        <View style={{ margin: 20, top: 10, marginBottom: 50 }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center', height: 50, paddingTop: 10, borderRadius: 10, backgroundColor: 'blue' }}>Contact the seller</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  )
}

export default Demo

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 4,
    margin: 16,
    paddingBottom: 10
  },
  cardProp: {
    flexDirection: 'row',
    left: 30,
    width: 300,
    marginVertical: 5,
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  cardText: {
    color: 'black',
  },
  onlySingleText: {
    color: 'white'
  },
  upperLogo:{
    width:35,
    height: 35,
  }

})