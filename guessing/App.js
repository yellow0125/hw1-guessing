import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from './components/Footer';
import Header from './components/Header';

export default function App() {

  return (
    <>
      <View style={styles.container}>
        <LinearGradient
          colors={['#C1CBD7', '#B5C4B1', '#C1CBD7']}
          style={styles.background}
        />
        <Header title ='Guess My Number'>
        </Header>
        <StartScreen></StartScreen>
        <StatusBar style="auto" />
      </View>
      <View style={styles.footer}>
        <Footer></Footer>
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
  footer:{
    alignItems: 'center',
  }
});
