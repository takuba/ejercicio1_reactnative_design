import { StyleSheet, Text, View } from 'react-native'
import Jugador from './jugador';
import Perfil from './perfil';

export default function Body() {
  return (
    <View style={styles.body}>
        <Jugador></Jugador>
        <Perfil></Perfil>
    </View>
  )
}

const styles = StyleSheet.create({
    body: {
        borderColor: 'black',
        borderWidth: 2,
        flex:1,
        flexDirection:'row'
      }
})