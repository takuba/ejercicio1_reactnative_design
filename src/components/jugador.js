import { Pressable, StyleSheet, Text, View, Platform } from 'react-native'
import React, { useState,useEffect  } from 'react';

export default function Jugador({jugadores,clickEquipo,setClickjugador,setJugadores,desplegarCampeonesAndroid}) {
  const [arrayJugadores, setArrayJugadores] = useState(null);
  //console.log(clickEquipo);
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
   setJugadores(updatedArray);

};
  useEffect(() => {
    // Esta función se ejecuta cuando jugadores cambia
    jugadores.map((jugador,index)=>{
      //console.log(index);
      //console.log(jugadores);
      switch (clickEquipo) {
        case index:
          setArrayJugadores(jugadores[index]);
          break;
      
        default:
          break;
      }
    })

  }, [clickEquipo]); // Asegúrate de que useEffect se ejecute cuando jugadores cambie

  return (
    <View style={styles.asideStyle}>
      {arrayJugadores && (arrayJugadores.map((jugador,index)=>(
        <Pressable
        key={index}
        onHoverIn={() => handleHoverIn(index)}
        onHoverOut={() => handleHoverOut(index)}
        onPress={()=>{setClickjugador(jugador.image),handleButtonPress(index)}}>
          {(desplegarCampeonesAndroid == true && Platform.OS =="android") && ( // Agrega esta condición
        <Text key={index} style={[
          styles.hoverSimple,
          jugador.isHovered && styles.hoverInStyle,
          jugador.isClicked && styles.activeButton,
        ]}>{jugador.name}</Text>
          )}
         {(Platform.OS =="web") && ( // Agrega esta condición
        <Text key={index} style={[
          styles.hoverSimple,
          jugador.isHovered && styles.hoverInStyle,
          jugador.isClicked && styles.activeButton,
        ]}>{jugador.name}</Text>
          )}
</Pressable>
      )))}

  </View> 
  )
}

const styles = StyleSheet.create({
    asideStyle: {

        ...Platform.select({
          web: {
            borderColor: 'black',
            borderWidth: 2,
            width: 200,
          },
          android: {
            
          },
        }),
      },
    hoverSimple: {
      ...Platform.select({
        web: {
          color: '#36395A',
          borderColor: 'black',
          borderWidth: 0,
          fontSize: 22,
          margin: 10,
          fontWeight: 'bold',
          padding: 10,
          borderRadius: 4,
          backgroundColor:"#FCFCFD",
          boxShadow: 'rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset'
        },
        android: {
          color: '#36395A',
          borderColor: 'black',
          borderWidth: 1,
          fontSize: 22,
          margin: 10,
          padding: 10,
          borderRadius: 4,
          backgroundColor: "#FCFCFD",
          elevation: 20,
          textAlign: 'center'
        },
      }),

    },
    hoverInStyle: {
      color: '#36395A',
      borderColor: '#2641de',
      borderWidth: 2,
      fontSize: 22,
      margin: 10,
      fontWeight: 'bold',
      padding: 10,
      borderRadius: 4,
      backgroundColor:"#FCFCFD",
      boxShadow: '-1px 0px 14px 4px rgba(0,51,237,0.72)'
    },
    activeButton: {
      ...Platform.select({
        web: {
          color: '#ffffff',
          borderColor: 'black',
          borderWidth: 0,
          fontSize: 22,
          margin: 10,
          fontWeight: 'bold',
          padding: 10,
          borderRadius: 4,
          backgroundColor:"black",
          boxShadow: 'rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #000000 0 -3px 0 inset'
        },
        android: {
          color: '#ffffff',
          borderColor: 'black',
          borderWidth: 0,
          fontSize: 22,
          margin: 10,
          padding: 10,
          borderRadius: 4,
          backgroundColor:"black",
        },
      }),


    }
})