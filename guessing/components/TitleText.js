import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';

export default function TitleText(props) {
  return (
    <Text style={styles.title}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    alignSelf: "center",
    justifyContent: 'center',
    marginTop: -35,
    color: Colors.BgWhite,
    fontSize: 22,
    fontWeight: 'bold',
  }
});