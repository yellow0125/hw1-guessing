import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import Colors from '../constants/Colors';

export default function Footer() {
  return (
    <View>
      <Text style={{ color: Colors.Grey }}>&copy;  2022 FridayNight Brands, Inc.</Text>
      <Icon
        name='dragon'
        type='font-awesome-5'
        color={Colors.Grey}
      />
    </View>
  )
}


