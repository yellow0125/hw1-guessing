import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image
} from 'react-native'
import React from 'react'
import TitleText from '../components/TitleText'
import SingleButton from '../components/SingleButton'
import Colors from '../constants/Colors'

export default function EndScreen(props) {

  const { userGuess, random } = props
  const url = "https://picsum.photos/id/" + random +"/100/100"
  // console.log(url)
  // console.log('________________')
  return (
    <View>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        {userGuess !== random ? (
          <Image
            // source={require('../assets/kiwi.jpg')}
            source={require('../assets/fail.png')}
            style={styles.image}
            resizeMode="cover"
          />) : (
          <Image
            source={{
              uri:url
            }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
      </View>
      <Text style={styles.title}>Here is your picture...</Text>
      <SingleButton onPress={props.onRestart}>New Game</SingleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    justifyContent: 'center',
    marginTop: -20,
    color: Colors.Title,
    fontSize: 18,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 2,
    borderColor: Colors.BgDarkGreen,
    overflow: "hidden",
    marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
});