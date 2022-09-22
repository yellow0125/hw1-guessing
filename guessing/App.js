import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState} from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import EndScreen from './screens/EndScreen';

function getRandom(min, max) {
  return Math.floor(Math.random() * max + min)
}



export default function App(props) {

  const [random, setRandom] = useState(getRandom(1020, 1029))

  const [userGuess, setUserGuess] = useState('')
  const [msg, setMsg] = useState('')
  const [count, setCount] = useState(0)

  const newGameHandler = () => {
    setRandom(getRandom(1020, 1029))
    setUserGuess(null)
    setCount = 0
  }

  const startGameHandler = (inputNumber) => {
    setUserGuess(inputNumber)
    setCount = 0
  }

  const gameOverHandler = (numofRounds) => {
    setCount = (numofRounds)
    setMsg('Here is your picture')
  }

  let content = <StartScreen onStartGame={startGameHandler} />
  if (userGuess && count <= 0) {
    content = <GameScreen userGuess={userGuess} onGameOver={gameOverHandler} onStartGame={startGameHandler}/>
  } else if (count > 0) {
    content = <EndScreen userGuess={userGuess} onRestart={newGameHandler} />
  }

  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          colors={['#ffffe5', '#006837', '#238443', '#41ab5d', '#78c679', '#addd8e', '#d9f0a3', '#f7fcb9', '#ffffe5',]}
          style={styles.background}
        />
        <Header title='Guess My Number'>
        </Header>
        {/* {content} */}
        <GameScreen/>
        {/* <EndScreen/> */}
        {/* <StartScreen></StartScreen> */}
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
