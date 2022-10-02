import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Colors from './constants/Colors';
import Footer from './components/Footer';
import Header from './components/Header';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import EndScreen from './screens/EndScreen';

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

export default function App(props) {

  const [random, setRandom] = useState(getRandom(1020, 1029))
  const [userGuess, setUserGuess] = useState(0)
  // const [isgameStart, setGameStart] = useState(false)
  const [isgameOver, setGameOver] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const makeModalVisible = () => { setModalVisible(true) }
  const makeModalInvisible = () => { setModalVisible(false) }

  const newGameHandler = () => {
    setRandom(getRandom(1020, 1029))
    setGameOver(false)
    // console.log(random)
  }
  const backToGameHandler = () => {
    makeModalInvisible()
    // setGameOver(false)
  }

  const startGameHandler = (inputNumber) => {
    makeModalVisible()
    setGameOver(false)
    setUserGuess(inputNumber)
  }

  const gameOverHandler = () => {
    setGameOver(true)
    makeModalInvisible()
  }

  let content = <StartScreen onStartGame={startGameHandler} />
  if (modalVisible) {
    content = <GameScreen modal={modalVisible} userGuess={userGuess} random={random} onGameOver={gameOverHandler} onBacktoGame={backToGameHandler} />
  }
  if (isgameOver) {
    content = <EndScreen userGuess={userGuess} random={random} onRestart={newGameHandler} />
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
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
        <Header title='Guess My Number'>
        </Header>
        {content}
        {/* {console.log(random)} */}
        <StatusBar style="auto" />
      </SafeAreaView>
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
    height: 900,
  },
  footer: {
    alignItems: 'center',
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  }
});
