import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState,useEffect  } from 'react';

export default function Jugador({jugadores,clickEquipo,setClickjugador}) {
  const [arrayJugadores, setArrayJugadores] = useState(null);

  useEffect(() => {
    // Esta función se ejecuta cuando jugadores cambia
    switch (clickEquipo) {
      case "Equipo1":
        // Haz algo para el Equipo1 si es necesario
        setArrayJugadores(jugadores[0]);
        break;
      case "Equipo2":
        setArrayJugadores(jugadores[1]);
        break;
      case "Equipo3":
        setArrayJugadores(jugadores[2]);
        break;
      default:
        // Haz algo para el caso por defecto si es necesario
        break;
    }
  }, [clickEquipo]); // Asegúrate de que useEffect se ejecute cuando jugadores cambie

  return (
    <View style={styles.asideStyle}>
      {arrayJugadores && (arrayJugadores.map((jugador,index)=>(
        <Pressable onPress={()=>{setClickjugador(jugador.image)}}><Text key={index} style={styles.text}>{jugador.name}</Text></Pressable>
      )))}

  </View> 
  )
}

const styles = StyleSheet.create({
    asideStyle: {
        borderColor: 'black',
        borderWidth: 2,
        width: 200
      },
      text: {
      color:'red',
      borderColor:'black',
      borderWidth:1,
      fontSize:22,
      margin:10,
      padding:4
  
    }
})