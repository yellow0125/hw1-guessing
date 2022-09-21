import { View, StyleSheet } from 'react-native'
import React from 'react'

export default function Card(props) {

  return (
    <View style={styles.square}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
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

});