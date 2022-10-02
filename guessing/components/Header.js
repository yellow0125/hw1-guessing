import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';

export default function Header(props) {
  return (
    <View>
        <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title:{
    alignSelf: "center",
    justifyContent: 'center',
    // marginTop: 22,
    marginBottom:50,
    paddingTop: 22,
    paddingLeft:110 ,
    paddingRight:110 ,
    backgroundColor:Colors.BgDarkGreen,
    borderRadius: 10,
    borderWidth: 1,
    borderColor:Colors.BgDarkGreen,
    width: '100%',
    height: 90,
    color:Colors.White,
    fontSize:25,
    fontWeight:'bold'
  },
});