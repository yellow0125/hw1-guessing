import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

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
    backgroundColor:'#f7287b',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 50,
    width:'50%',
    marginTop:35
  },
  buttonText: {
    alignSelf: "center",
    justifyContent: 'center',
    color: "white",
    fontSize: 18,
    fontWeight:'bold'
  }
});