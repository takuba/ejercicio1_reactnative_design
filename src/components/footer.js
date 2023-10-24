import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function footer() {
  const web = "www.equipo.com";
  const footerNumero = 123456789;

  return (
    <View style={styles.footer}>
        <Text style={styles.text}>{web}</Text>
        <Text style={styles.text}>{footerNumero}</Text> 
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