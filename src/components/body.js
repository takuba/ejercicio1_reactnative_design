import { StyleSheet, Text, View } from 'react-native'
import Jugador from './jugador';
import Perfil from './perfil';



export default function Body({jugadores,clickEquipo,setClickjugador,clickjugador}) {
  return (
    <View style={styles.body}>
        <Jugador jugadores={jugadores} clickEquipo={clickEquipo} setClickjugador={setClickjugador}></Jugador>
        <Perfil clickjugador={clickjugador} ></Perfil>
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