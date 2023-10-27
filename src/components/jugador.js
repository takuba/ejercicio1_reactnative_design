import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState,useEffect  } from 'react';

export default function Jugador({jugadores,clickEquipo,setClickjugador,setJugadores}) {
  const [arrayJugadores, setArrayJugadores] = useState(null);

  useEffect(() => {
    // Añadir los atributos "isHovered" e "isClicked" a cada objeto en cada sub-array
 const update=jugadores.map(subArray => 
    subArray.map(objeto => ({
      ...objeto,
      isHovered: false,
      isClicked: false
    }))
);
   setJugadores(update);

  }, []);

  const handleHoverIn = (index) => {
    // console.log(index);
    // console.log(clickEquipo);
    console.log(jugadores[clickEquipo][index].isHovered);
    const updatedArray = [...jugadores];
    updatedArray[clickEquipo][index].isHovered = true;

    setJugadores(updatedArray);
  };
  const handleHoverOut = (index) => {

    //console.log("handleHoverOut INICIO");
    //console.log(arrayEquipos);
    if (jugadores[clickEquipo][index].isHovered == true) {
      const updatedArray = [...jugadores];
      updatedArray[clickEquipo][index].isHovered = false;
      setJugadores(updatedArray);
    }

  
};
const handleButtonPress = (index) => {
  //console.log("handleButtonPress INICIO");

  const updatedArray = [...jugadores];
  updatedArray[clickEquipo][index].isClicked = true;
  updatedArray[clickEquipo][index].isHovered = false;
  //console.log("handleButtonPress FINAL");
  updatedArray.map(subArray => 
    subArray.map((data,index2) => {
      if(data.isClicked == true && index != index2) {
       data.isClicked = false;        
      }
    })
);

   // //console.log(dataModifiet);
  setArrayEquipos(updatedArray);

};
  useEffect(() => {
    // Esta función se ejecuta cuando jugadores cambia
    switch (clickEquipo) {
      case 0:
        // Haz algo para el Equipo1 si es necesario
        setArrayJugadores(jugadores[0]);
        break;
      case 1:
        setArrayJugadores(jugadores[1]);
        break;
      case 2:
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
        <Pressable
        onHoverIn={() => handleHoverIn(index)}
        onHoverOut={() => handleHoverOut(index)}
        onPress={()=>{setClickjugador(jugador.image),handleButtonPress(index)}}>
        <Text key={index} style={[
            styles.hoverSimple,
            jugador.isHovered && styles.hoverInStyle,
            jugador.isClicked && styles.activeButton,
          ]}>{jugador.name}</Text></Pressable>
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
  
    },
    hoverSimple: {
      color: 'red',
      borderColor: 'black',
      borderWidth: 1,
      fontSize: 22,
      margin: 10,
      padding: 4,
    },
    hoverInStyle: {
      color: 'red',
      borderColor: 'red',
      borderWidth: 2,
      fontSize: 22,
      margin: 10,
      padding: 4,
    },
    activeButton: {
      color: 'blue',
      borderColor: 'blue',
      borderWidth: 2,
      fontSize: 22,
      margin: 10,
      padding: 4,
    }
})