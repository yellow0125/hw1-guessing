import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


export default function Header() {
  return (
    <View style={styles.title}>
        <Text>Guess My Number</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});