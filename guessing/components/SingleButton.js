import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

export default function Button(props) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    justifyContent: 'center',
    marginTop:35,
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor:Colors.MainButton,
    borderRadius: 50,
    width:'50%',
    
  },
  buttonText: {
    alignSelf: "center",
    justifyContent: 'center',
    color: Colors.White,
    fontSize: 18,
    fontWeight:'bold'
  }
});