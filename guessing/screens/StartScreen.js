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
import Colors from '../constants/Colors';

export default function StartScreen(props) {

  const [input, setInput] = useState('')

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
    props.onStartGame(parseInt(input))
    setInput("")
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
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
            maxLength={4}
          />
          <View style={styles.buttons}>
            <Button
              title='reset'
              color={Colors.ButtonRed}
              onPress={resetInputHandler}
            />
            <Button
              title='confirm'
              color={Colors.ButtonBlue}
              onPress={confirmInputHandler}
            // onPress={()=>{confirmInputHandler;props.onStartGame(inputNumber)}}
            />
          </View>
        </Card>
      </View>
      {/* <SingleButton onPress={props.onRandomNum}>Generate a Number</SingleButton> */}
    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    justifyContent: 'center',
    margin: 10,
    color: Colors.Title,
    fontSize: 22,
    fontWeight: 'bold',
  },
  input: {
    alignSelf: "center",
    width: 80,
    height: 50,
    marginTop: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Colors.Title,
  },
  buttons: {
    alignSelf: "center",
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 25,
    width: 280,
  },
});





