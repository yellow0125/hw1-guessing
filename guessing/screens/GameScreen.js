import {
  View,
  StyleSheet,
  Text,
  Button

} from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import SingleButton from '../components/SingleButton'


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
    console.log(msg)
    console.log(userGuess)
    console.log(random)

  }, [msg, userGuess, random]);

  return (
    <View>
      <Card>
        <Text style={styles.title}>{msg}</Text>
      </Card>
      {msg !== "Congrats! You Won!" ? (
        <View style={styles.buttons} >
          <Button title="I am Done" color='#ff4676' onPress={props.onGameOver} />
          <Button title='Guess Again' color='#1d91c0' onPress={props.onBacktoGame} />
        </View>) : (
        <SingleButton onPress={props.onGameOver}>Thank you!</SingleButton>)}
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    margin: 10,
    padding: 30,
    alignSelf: "center",
    justifyContent: 'center',
    fontSize: 21,
    color: '#072c1d',
    lineHeight: 35
  },
  input: {
    alignSelf: "center",
    width: 80,
    height: 50,
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: '#072c1d',
    padding: 10,
  },
  buttons: {
    alignSelf: "center",
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 25,
    width: 280,
    justifyContent: 'space-around',
  },
});