import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function footer() {
  return (
    <View style={styles.footer}>
        <Text style={styles.text}>www.equipo.com</Text>
        <Text style={styles.text}>123456789</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
    
      text: {
      color:'red',
      borderColor:'black',
      borderWidth:1,
      fontSize:22,
      margin:10,
      padding:4
  
    }, footer: {
        borderColor: 'black',
        borderWidth: 2,
        height:100,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    
      }
})