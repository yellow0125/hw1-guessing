import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { color } from 'react-native-elements/dist/helpers';


export default function Header(props) {
  return (
    <View>
        <Text style={styles.title}>{props.title}</Text>
    </View>
  )

}

const styles = StyleSheet.create({
  title:{
    borderStyle:'solid',
    borderColor:'#656565',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 100,
    marginBottom:50,
    alignSelf: "center",
    justifyContent: 'center',
    fontSize:25,
    color:'#4f5555'
  },
});