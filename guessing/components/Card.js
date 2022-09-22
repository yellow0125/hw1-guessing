import { View, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';

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
    height: 200,
    width: 300,
    borderRadius: 10,
    backgroundColor: Colors.CardBg,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    shadowOpacity: 0.15,
    elevation: 10,
    shadowColor: Colors.ShadowBg,
  },

});