import { View, Text, StyleSheet  } from 'react-native'
import React from 'react'

export default function TitleText(props) {
  return (

        <Text style={styles.title}>{props.children}</Text>
 
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    color: "black",
    fontSize: 24
  }
});