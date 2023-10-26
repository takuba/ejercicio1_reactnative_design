import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useState } from 'react';

export default function Header({ clickEquipo,setClickEquipo }) {
  
  const arrayEquipos = ["Equipo1","Equipo2","Equipo3"];
  
  const onlickEquipo = (equipo)=>{
    setClickEquipo(equipo);
  
   }

  return (
    <View style={styles.header}>
      {arrayEquipos.map((equipo,index)=>( <Pressable key={index} onPress={()=>onlickEquipo(equipo)}><Text style={styles.text}>{equipo}</Text></Pressable>)
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
      text: {
      color:'red',
      borderColor:'black',
      borderWidth:1,
      fontSize:22,
      margin:10,
      padding:4
  
    }
  });
  