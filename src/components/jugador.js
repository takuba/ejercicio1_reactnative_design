import { StyleSheet, Text, View } from 'react-native'

export default function Jugador() {
  const arrayJugadores = ["Jugador 1.1","Jugador 1.2","Jugador 1.3","Jugador 1.4","Jugador 1.5","Jugador 1.6"];

  return (
    <View style={styles.asideStyle}>
      {arrayJugadores.map((jugador)=>(
        <Text style={styles.text}>{jugador}</Text>
      ))}

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