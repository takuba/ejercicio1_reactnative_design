import { StyleSheet, Text, View,Image,Platform  } from 'react-native'
import React, { useEffect, useState } from 'react';

export default function Perfil({clickjugador,desplegarCampeonesAndroid}) {
  useEffect(() => {
    console.log(desplegarCampeonesAndroid);
  }, [desplegarCampeonesAndroid]);

  if (desplegarCampeonesAndroid == false) {
    return (
      <View style={styles.jugador}>
      {/* //<Image source={{uri:clickjugador}}  style={{ flex:1 }}></Image> */}
      </View>
    )
  }else {
    return (
      <View style={styles.jugador}>
      <Image source={{uri:clickjugador}}  style={{ flex:1 }}></Image>
      </View>
    )
  }

}

const styles = StyleSheet.create({
    jugador: {
      ...Platform.select({
        web: {
          borderColor: 'black',
          borderWidth: 2,
          flex: 1
        },
        android: {
          borderColor: 'black',
          borderWidth: 2,
          flex: 1

        },
      }),

      },
})