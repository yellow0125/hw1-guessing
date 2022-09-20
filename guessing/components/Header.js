import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function Header() {
  return (
    <View style={styles.title}>
      <LinearGradient
        // Button Linear Gradient
        colors={['#4c669f', '#3b5998', '#192f6a']}>
        <Text>Guess My Number</Text>
      </LinearGradient>

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