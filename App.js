import { StyleSheet, Text, View, Image } from 'react-native';
import Header from './src/components/header';
import Body from './src/components/body';
import Footer from './src/components/footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor:'black',
    borderWidth:2,

  
  }
});
