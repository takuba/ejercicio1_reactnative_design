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
        color: '#36395A',
        borderColor: 'black',
        borderWidth: 0,
        fontSize: 22,
        margin: 10,
        padding: 10,
        borderRadius: 4,
        backgroundColor:"#FCFCFD",
        //boxShadow: 'rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset'
  
    }, footer: {
        borderColor: 'black',
        borderWidth: 2,
        height:100,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    
      }
})