import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Modal,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import SingleButton from '../components/SingleButton'
import Colors from '../constants/Colors'
import Buttons from '../components/Buttons'
import { LinearGradient } from 'expo-linear-gradient'

function getMessage(target, random) {
  if (target < random) { return 'You have chosen ' + target + ', That is not my number! Guess higher!' }
  if (target > random) { return 'You have chosen ' + target + ', That is not my number! Guess lower!' }
  if (target = random) { return 'Congrats! You Won!' }
}

export default function GameScreen(props) {
  const [msg, setMsg] = useState('')
  const { userGuess, random, modal } = props;

  useEffect(() => {
    setMsg(getMessage(userGuess, random))
  }, [msg, userGuess, random]);

  return (
    <Modal visible={modal}>
      <LinearGradient
        colors={[
          Colors.BgDarkGreen,
          Colors.BgDarkGreen,
          Colors.BgGreen,
          Colors.BgLightGreen,
          Colors.BgDarkYellow,
          Colors.BgYellow,
          Colors.BgLightYellow,
          Colors.BgLighterYellow,
          Colors.BgWhite,]}
        style={styles.background}
      />
      <View style={styles.container}>
        <Card>
          <Text style={styles.title}>{msg}</Text>
          {msg == "Congrats! You Won!" ? (
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/won.png')}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          ) : ('')}
        </Card>
        {msg !== "Congrats! You Won!" ? (
          <Buttons button1='I am Done' button2='Guess Again' onPress1={props.onGameOver} onPress2={props.onBacktoGame}></Buttons>
        ) : (
          <SingleButton onPress={props.onGameOver}>Thank you!</SingleButton>
        )}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    justifyContent: 'center',
    margin: 10,
    padding: 30,
    lineHeight: 35,
    color: Colors.Title,
    fontSize: 21,
  },
  buttons: {
    alignSelf: "center",
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 25,
    width: 280,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    overflow: "hidden",
    marginVertical: Dimensions.get('window').height / 5
  },
  image: {
    width: "100%",
    height: "100%"
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
  container:{
    marginTop:200

  },

});