import {
  View,
  StyleSheet,
  Text,
  Button

} from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'
import SingleButton from '../components/SingleButton'


function getMessage(props) {

  if (!isNaN(guess) || guess < 1020 || guess > 1029) {
    return 'Please Enter a Number From 1020 to 1029'
  }
  if (guess < random) { return 'You have chose' + guess + 'That is not my number! Guess higher' }
  if (guess > random) { return 'You have chose' + guess + 'That is not my number! Guess lower' }
  if (guess = random) { return 'Congrats! You Won!' }
}

export default function GameScreen(props) {
  //buttoncontent

  return (
    <View>
      <Card>
        {/* <Text style={styles.title}>You have chosen 1028, That's not my number! Guess lower!</Text> */}
        <Text style={styles.title}>Congrats! You Won!</Text>
      </Card>
      {/* <View style={styles.buttons}>
          <Button
            title="I am Done"
            color='#ff4676'
          />
          <Button
            title='Guess Again'
            color='#1d91c0'
          />
        </View> */}


      <SingleButton onPress={props.onGameOver}>Thank you!</SingleButton>
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
    lineHeight:35
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