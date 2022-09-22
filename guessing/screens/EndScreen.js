import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image
} from 'react-native'
import React from 'react'
import TitleText from '../components/TitleText'
import Button from '../components/Button'
export default function EndScreend(props) {
  return (
    <View>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // source={{
          //   uri:
          //     "https://i.pinimg.com/originals/d3/bc/b1/d3bcb15ddfcda97897a4bbce49cd5feb.png"
          // }}
          // source={require('../assets/kiwi.jpg')}
          source={require('../assets/fail.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.title}>Here is your picture...</Text>

      <Button onPress={props.onRestart}>New Game</Button>

    </View>
  )
}

const styles = StyleSheet.create({
  title: {

    alignSelf: "center",
    justifyContent: 'center',
    fontSize: 18,
    color: '#072c1d',
    marginBottom: 35,
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