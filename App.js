import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Equipo 1</Text>
        <Text style={styles.text}>Equipo 2</Text>
        <Text style={styles.text}>Equipo 3</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.asideStyle}>
          <Text style={styles.text}>Jugador 1.1</Text>
          <Text style={styles.text}>Jugador 1.2</Text>
          <Text style={styles.text}>Jugador 1.3</Text>
          <Text style={styles.text}>Jugador 1.4</Text>
          <Text style={styles.text}>Jugador 1.5</Text>
        </View> 
        <View style={styles.jugador}>
          <Image source={require('./assets/chaval.png')}  style={{ flex:1 }}></Image>
        </View>
      </View>
      <View style={styles.footer}>
         <Text style={styles.text}>www.equipo.com</Text>
         <Text style={styles.text}>123456789</Text> 
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor:'black',
    borderWidth:2,

  
  },
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

  },
  body: {
    borderColor: 'black',
    borderWidth: 2,
    flex:1,
    flexDirection:'row'
  },
  asideStyle: {
    borderColor: 'black',
    borderWidth: 2,
    width: 200
  },
  jugador: {
    borderColor: 'black',
    borderWidth: 2,
    flex: 1
  },
  footer: {
    borderColor: 'black',
    borderWidth: 2,
    height:100,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

  },
});
