import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'


function getMessage(guess, random) {
  if (!isNaN(guess) || guess < 1020 || guess > 1029) {
    return 'Please Enter a Number From 1020 to 1029'
  }
  if (guess < random) { return 'You have chose' + guess + 'That is not my number! Guess higher' }
  if (guess > random) { return 'You have chose' + guess + 'That is not my number! Guess lower' }
  if (guess = random) { return 'Congrats! You Won!' }
}

export default function GameScreen() {

  return (
    <View>
      <Card></Card>
      <Text>GameScreen</Text>
    </View>
  )
}