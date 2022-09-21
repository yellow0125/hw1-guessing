import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from './components/Footer';
import Header from './components/Header';
import { useState } from 'react';
import EndScreen from './screens/EndScreen';

function getRandom(min, max) {
  return Math.floor(Math.random() * max + min)
}

function getMessage(guess, random) {
  if (!isNaN(guess) || guess < 1020 || guess > 1029) {
    return 'Please Enter a Number From 1020 to 1029'
  }
  if (guess < random) { return 'You have chose' + guess + 'That is not my number! Guess higher' }
  if (guess > random) { return 'You have chose' + guess + 'That is not my number! Guess lower' }
  if (guess = random) { return 'Congrats! You Won!' }
}

export default function App() {

  const [random, setRandom] = useState(getRandom(1020, 1029))
  const [count, setCount] = useState(0)
  const [msg, setMsg] = useState('')

  const newGameHandler = () => {
    setRandom(getRandom(1020, 1029))
    setCount(0)
    setMsg('')
  }

  const startGameHandler = () => {

  }

  const gameOverHandler = () => {
    setMsg('Here is your picture')
  }


  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          colors={['#C1CBD7', '#B5C4B1', '#C1CBD7']}
          style={styles.background}
        />
        <Header title='Guess My Number'>
        </Header>
        <StartScreen></StartScreen>
        <StatusBar style="auto" />
      </View>
      <View style={styles.footer} >
        <Footer ></Footer>
      </View>
    </>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
  footer: {
    alignItems: 'center',
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  }
});
