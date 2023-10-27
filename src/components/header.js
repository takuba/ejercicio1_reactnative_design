import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useState,useEffect } from 'react';

export default function Header({ clickEquipo,setClickEquipo }) {
  const [clickedHover,setClickedHover] = useState(styles.hoverClicked);
  const [hoverIn,setHoverIn] = useState(styles.hoverSimple);
  const [activado,setActivado] = useState(null);

  const [arrayEquipos, setArrayEquipos] = useState([
    { name: "Equipo1", isHovered: false, isClicked: false },
    { name: "Equipo2", isHovered: false, isClicked: false },
    { name: "Equipo3", isHovered: false, isClicked: false },
  ]);
  
  const handleHoverIn = (index) => {
    ////console.log("handleHoverIn INICIO");
    const updatedArray = [...arrayEquipos];
    updatedArray[index].isHovered = true;
    ////console.log("handleHoverIn FINAL");
    ////console.log(updatedArray);
    setArrayEquipos(updatedArray);
  };
  
  useEffect(() => {
    //console.log("useEffect INICIO");

    //console.log(arrayEquipos);
  }, [arrayEquipos]);

    const handleHoverOut = (index) => {

        //console.log("handleHoverOut INICIO");
        //console.log(arrayEquipos);
        if (arrayEquipos[index].isHovered == true) {
          const updatedArray = [...arrayEquipos];
          updatedArray[index].isHovered = false;
          setArrayEquipos(updatedArray)
        }

      
  };
  const handleButtonPress = (index) => {
    //console.log("handleButtonPress INICIO");

    const updatedArray = [...arrayEquipos];
    updatedArray[index].isClicked = true;
    updatedArray[index].isHovered = false;
    //console.log("handleButtonPress FINAL");
    

       updatedArray.map((data,index2) => {
        if(data.isClicked == true && index != index2) {
         data.isClicked = false;        
        }
      }

      );
     // //console.log(dataModifiet);
    setArrayEquipos(updatedArray);

  };


  const onlickEquipo = (index) => {
    setClickEquipo(index);
  }
  return (
    <View style={styles.header}>
      {arrayEquipos.map((equipo,index)=>( 
      <Pressable
      onHoverIn={() => handleHoverIn(index)}
      onPress={()=>{onlickEquipo(index); handleButtonPress(index) }} 
      onHoverOut={() => handleHoverOut(index)}
      key={index} >
          <Text style={[
            styles.hoverSimple,
            equipo.isHovered && styles.hoverInStyle,
            equipo.isClicked && styles.activeButton,

          ]}>
            {equipo.name}
          </Text>
      </Pressable>)
    )}
    </View>
  )
  
}

const styles = StyleSheet.create({

    header: {
        borderColor: 'black',
        borderWidth: 2,
        height:100,
        flexDirection:'row',
        alignItems:'center',
        
      },
      hoverSimple: {
        color: '#36395A',
        borderColor: 'black',
        borderWidth: 0,
        fontSize: 22,
        margin: 10,
        padding: 10,
        borderRadius: 4,
        backgroundColor:"#FCFCFD",
        boxShadow: 'rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset'

      },
      hoverInStyle: {
        color: '#36395A',
        borderColor: '#2641de',
        borderWidth: 2,
        fontSize: 22,
        margin: 10,
        padding: 10,
        borderRadius: 4,
        backgroundColor:"#FCFCFD",
        boxShadow: '-1px 0px 14px 4px rgba(0,51,237,0.72)'
      },
      activeButton: {
        color: '#ffffff',
        borderColor: 'black',
        borderWidth: 0,
        fontSize: 22,
        margin: 10,
        padding: 10,
        borderRadius: 4,
        backgroundColor:"black",
        boxShadow: 'rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #000000 0 -3px 0 inset'

      }
    
  });
  