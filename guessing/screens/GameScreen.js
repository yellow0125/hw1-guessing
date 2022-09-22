import {
  View,
  StyleSheet,
  Text,
  Button,
} from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'


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
          <Text style={styles.title}>You have chosen blbsssslassssssbla</Text>
        </Card>
        <View style={styles.buttons}>
            <Button
              title="I'm done"
              color='#ff4676'
              onPress={()=>props.onGameOver}
              
            />
            <Button
              title='Let me guess again'
              color='#1d91c0'
    
            />
          </View>
          
          <Button
              title='Thank you!'
              color='#1d91c0'
              onPress={()=>props.onGameOver}
            />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    margin: 10,
    alignSelf: "center",
    justifyContent: 'center',
    fontSize: 22,
    color: '#072c1d',
    fontWeight: 'bold',
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