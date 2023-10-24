import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Perfil() {
  return (
    <View style={styles.jugador}>
    <Image source={require('../../assets/chaval.png')}  style={{ flex:1 }}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
    jugador: {
        borderColor: 'black',
        borderWidth: 2,
        flex: 1
      },
})