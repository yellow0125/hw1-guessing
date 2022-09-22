import {
  View,
  StyleSheet,
  Text,
  Button
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import SingleButton from '../components/SingleButton'
import Colors from '../constants/Colors'

function getMessage(target, random) {
  if (target < random) { return 'You have chosen ' + target + ', That is not my number! Guess higher!' }
  if (target > random) { return 'You have chosen ' + target + ', That is not my number! Guess lower!' }
  if (target = random) { return 'Congrats! You Won!' }
}

export default function GameScreen(props) {
  const [msg, setMsg] = useState('')
  const { userGuess, random } = props;

  useEffect(() => {
    setMsg(getMessage(userGuess, random))
  }, [msg, userGuess, random]);

  return (
    <View>
      <Card>
        <Text style={styles.title}>{msg}</Text>
      </Card>
      {msg !== "Congrats! You Won!" ? (
        <View style={styles.buttons} >
          <Button title="I am Done" color={Colors.ButtonRed} onPress={props.onGameOver} />
          <Button title='Guess Again' color={Colors.ButtonBlue} onPress={props.onBacktoGame} />
        </View>) : (
        <SingleButton onPress={props.onGameOver}>Thank you!</SingleButton>)}
    </View>
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
});