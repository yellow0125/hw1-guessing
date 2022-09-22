import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Alert,
  Keyboard,
} from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card';
import SingleButton from '../components/SingleButton'


export default function StartScreen(props) {

  
  const [input, setInput] = useState('')
  const [inputNumber, setInputNumber] = useState();

  const numberInputHandler = newInput => {
    setInput(newInput);
  };

  const resetInputHandler = () => {
    setInput("");
  };

  const confirmInputHandler = () => {
    const guessNumber = parseInt(input);
    if (isNaN(guessNumber) || guessNumber < 1020 || guessNumber > 1029) {
      Alert.alert("Invalid number!", "Number has to be between 1020 and 1029", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler }
      ]);
      return;
    }
    setInputNumber(parseInt(input))
    setInput("");
    Keyboard.dismiss();
    // props.onStartGame(inputNumber)
  }


  return (
    <>
      <View>
        <Card>
          <Text style={styles.title}>Enter a Number</Text>
          <TextInput
            style={styles.input}
            blurOnSubmit
            autoCaptalize="none"
            keyboardType="phone-pad"
            value={input}
            onChangeText={numberInputHandler}

          />
          <View style={styles.buttons}>
            <Button
              title='reset'
              color='#ff4676'
              onPress={resetInputHandler}
            />
            <Button
              title='confirm'
              color='#1d91c0'
              // onPress={confirmInputHandler}
              onPress={()=>{confirmInputHandler;props.onStartGame(inputNumber)}}
            />
          </View>
        </Card>
      </View>
      <SingleButton onPress={props.onRandomNum}>Generate a Number</SingleButton>
    </>
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





