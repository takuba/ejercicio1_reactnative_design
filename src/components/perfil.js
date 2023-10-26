import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react';

export default function Perfil({clickjugador}) {
  useEffect(() => {
    console.log(clickjugador);
  }, []);

  return (
    <View style={styles.jugador}>
    <Image source={{uri:clickjugador}}  style={{ flex:1 }}></Image>
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