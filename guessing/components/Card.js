import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'

export default function Card() {
  return (
    <View
      style={styles.square}
    >
      <Text style={styles.title}>Enter a Number</Text>
      <TextInput
        style={styles.input}
  
        ></TextInput>
      <View style={styles.buttons}>
        <Button
          title='reset'
          color='#965454'
          />

        <Button
          title='confirm'
          color='#2a5caa' />

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    margin: 10,
    alignSelf: "center",
    justifyContent: 'center',
    fontSize: 20,
    color: '#faead3'
  },
  square: {
    alignSelf: "center",
    backgroundColor: "#8696a7",
    borderRadius: 10,
    height: 200,
    width: 300,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.15,
    elevation: 10,

  },
  input: {
    alignSelf: "center",
    width: 80,
    height: 50,
    marginTop: 15,
    borderBottomWidth: 1,
    borderColor: '#faead3',
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