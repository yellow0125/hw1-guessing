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
export default function EndScreen(props) {
  const { userGuess, random } = props
  console.log('endofgame')
  console.log(userGuess)
  console.log(random)
  console.log('________________')
  return (
    <View>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        {userGuess !== random ? (
          <Image
            // source={{
            //   uri:
            //     "https://i.pinimg.com/originals/d3/bc/b1/d3bcb15ddfcda97897a4bbce49cd5feb.png"
            // }}
            // source={require('../assets/kiwi.jpg')}
            source={require('../assets/fail.png')}
            style={styles.image}
            resizeMode="cover"
          />) : (
          <Image
            source={{
              uri:
                " https://picsum.photos/id/1023"
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
    fontSize: 18,
    color: '#072c1d',
    marginTop: -20
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get('window').height / 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
});