import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/Colors";


export default function Buttons(props) {
  return (
    <View style={styles.buttons}>
      <Button
        title={props.button1}
        color={Colors.ButtonRed}
        onPress={props.onPress1}
      />
      <Button
        title={props.button2}
        color={Colors.ButtonBlue}
        onPress={props.onPress2}
      // onPress={()=>{confirmInputHandler;props.onStartGame(inputNumber)}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    alignSelf: "center",
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 25,
    width: 280,
  },
});