import { View, Text, StyleSheet} from 'react-native'

export default function Header() {
  const arrayEquipos = ["Equipo1","Equipo2","Equipo3"];
  
  return (
    <View style={styles.header}>
      {arrayEquipos.map((equipo)=>( <Text style={styles.text}>{equipo}</Text>)
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
  