import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function TitleText(props) {
  return (

    <Text style={styles.title}>{props.children}</Text>

  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: -35,
    alignSelf: "center",
    justifyContent: 'center',
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  }
});