import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './src/components/header';
import Body from './src/components/body';
import Footer from './src/components/footer';
import React, { useEffect, useState } from 'react';

const dividirChamps = (champ)=>{
  const chunkSize = 5;
  const dividedArrays = [];
  
  for (let i = 0; i < champ.length; i += chunkSize) {
    const chunk = champ.slice(i, i + chunkSize);
    dividedArrays.push(chunk);
  }
  return dividedArrays;
 }



export default function App() {
  const [jugadores, setJugadores] = useState('');
  const [clickEquipo,setClickEquipo] = useState('');
  const [clickjugador,setClickjugador] = useState('');

  const cantidadNombres = 3;
  // Función para recibir datos del componente hijo
  useEffect(() => {
    // Realiza una solicitud para obtener los datos del campeón
    fetch(`http://localhost:3000/api/campeones/random/${cantidadNombres}`)
      .then(response => response.json())
      .then(data => {
        // Accede a la URL de la imagen desde los datos del campeón
        setJugadores(dividirChamps(data));
        
      })
      .catch(error => {
        console.error('Error al obtener datos del campeón', error);
      });
      
  }, []);
  useEffect(() => {
    //console.log(clickjugador);
  }, [clickjugador]);



  return (
    <View style={styles.container}>
      <Header clickEquipo={clickEquipo} setClickEquipo={setClickEquipo}></Header>
      {jugadores &&  (
      <Body jugadores={jugadores} clickEquipo={clickEquipo} setClickjugador={setClickjugador} clickjugador={clickjugador} setJugadores={setJugadores}></Body>
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

  
  }
});
