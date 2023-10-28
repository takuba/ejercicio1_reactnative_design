import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './src/components/header';
import Body from './src/components/body';
import Footer from './src/components/footer';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { getArrayOfChampions,getRamdomsChampions } from './src/components/helperFuntions';



export default function App() {
  const [jugadores, setJugadores] = useState('');
  const [clickEquipo,setClickEquipo] = useState('');
  const [clickjugador,setClickjugador] = useState(null);
  const [cantidadNombres,setCantidadNombres] = useState(6);
  const [desplegarCampeonesAndroid,setDesplegarCampeonesAndroid] = useState(null);
  useEffect(() => {
    // Realiza una solicitud para obtener los datos del campeón
    fetch(`https://ddragon.leagueoflegends.com/cdn/13.21.1/data/es_ES/champion.json`)
      .then(response => response.json())
      .then(data => {
        const championsFromurl = getRamdomsChampions(data,cantidadNombres);
        setJugadores(getArrayOfChampions(championsFromurl));
      })
      .catch(error => {
        console.error('Error al obtener datos del campeón', error);
      });
      console.log(Platform.OS);
  }, []);
  

  
  return (

      <View style={styles.container}>
        <Header clickEquipo={clickEquipo} setClickEquipo={setClickEquipo} setDesplegarCampeonesAndroid={setDesplegarCampeonesAndroid}></Header>
        {jugadores &&  (
        <Body jugadores={jugadores} clickEquipo={clickEquipo} setClickjugador={setClickjugador} clickjugador={clickjugador} setJugadores={setJugadores} desplegarCampeonesAndroid = {desplegarCampeonesAndroid}></Body>
        )}

        <Footer></Footer>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor:'black',
    borderWidth:1,
    ...Platform.select({
      android: {
        marginTop: 10, // Elevación para dispositivos Android
      },
    }),
  }
});
