import { StyleSheet, Text, View,Platform } from 'react-native'
import Jugador from './jugador';
import Perfil from './perfil';
import React, { useEffect, useState } from 'react';



export default function Body({jugadores,clickEquipo,setClickjugador,clickjugador,setJugadores,desplegarCampeonesAndroid}) {



  if(Platform.OS == "android"){
    return (<View style={styles.body}>
      <Perfil clickjugador={clickjugador} desplegarCampeonesAndroid={desplegarCampeonesAndroid}  ></Perfil>
      <Jugador jugadores={jugadores} clickEquipo={clickEquipo} setClickjugador={setClickjugador} setJugadores={setJugadores} desplegarCampeonesAndroid={desplegarCampeonesAndroid}></Jugador>  
    </View>)
  }else {
    return (
      <View style={styles.body}>
          <Jugador jugadores={jugadores} clickEquipo={clickEquipo} setClickjugador={setClickjugador} setJugadores={setJugadores} desplegarCampeonesAndroid={desplegarCampeonesAndroid}></Jugador>
          <Perfil clickjugador={clickjugador}  ></Perfil>
      </View>
    )
  }

}

const styles = StyleSheet.create({
    body: {

        ...Platform.select({
          web: {
            borderColor: 'black',
            borderWidth: 2,
            flex:1,
            flexDirection:'row',
          },
          android: {
            flex:1,
            flexDirection:'colum'
          },
        }),
      }
})