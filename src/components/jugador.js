import { StyleSheet, Text, View } from 'react-native'

export default function Jugador() {
  return (
    <View style={styles.asideStyle}>
        <Text style={styles.text}>Jugador 1.1</Text>
        <Text style={styles.text}>Jugador 1.2</Text>
        <Text style={styles.text}>Jugador 1.3</Text>
        <Text style={styles.text}>Jugador 1.4</Text>
        <Text style={styles.text}>Jugador 1.5</Text>
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