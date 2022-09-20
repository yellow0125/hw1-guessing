import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient  
        colors={['red','blue']}
        style={styles.background}/>
        <Header></Header>
        <Footer />
        <StatusBar style="auto" />
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background:{
    flex: 1,
  }
});
