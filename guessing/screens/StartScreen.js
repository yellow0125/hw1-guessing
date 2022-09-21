import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Alert,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card';

export default function StartScreen() {

  const [input, setInput] = useState('')
  const [confirm, setConfirm] = useState(false);

  const numberInputHandler = newInput => {
    setInput(newInput);
  };

  const resetInputHandler = () => {
    setInput("");
    setConfirm(false);
  };

  const confirmInputHandler = () => {
    const guessNumber = parseInt(input);
    if (isNaN(guessNumber) || guessNumber < 1020 || guessNumber > 1029) {
      Alert.alert("Invalid number!", "Number has to be between 1020 and 1029", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler }
      ]);
      return;
    }
    setConfirm(true);
    setInput("");
    Keyboard.dismiss();
  };


  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
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
            onPress={confirmInputHandler}
          />
        </View>
      </Card>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  title: {
    margin: 10,
    alignSelf: "center",
    justifyContent: 'center',
    fontSize: 22,
    color: '#072c1d',
    fontWeight:'bold'
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





