import { Platform } from "react-native";

//3 arrays in 1, each one has 5 objects champions. 
export const getArrayOfChampions = (champions) => {
    const chunkSize = 5;
    const dividedArrays = [];
    for (let i = 0; i < champions.length; i += chunkSize) {
      const chunk = champions.slice(i, i + chunkSize);
      dividedArrays.push(chunk);
    }
    return dividedArrays;
}
//get 15 ramdom champions in one array
export const getRamdomsChampions = (data,cantidadNombres) => {
    const campeones = data.data;
    const campeonesKeys = Object.keys(campeones);
    const randomCampeones = [];
    // Obtén la cantidad de campeones aleatorios especificada por el cliente
    const campeonesNumero = 5;
    const numero = campeonesNumero*cantidadNombres;
    for (let i = 0; i < numero; i++) {
      const randomIndex = Math.floor(Math.random() * campeonesKeys.length);
      const randomCampeonKey = campeonesKeys[randomIndex];
      const randomCampeon = campeones[randomCampeonKey];
      randomCampeon.image = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${randomCampeon.id}_0.jpg`;
      randomCampeones.push(randomCampeon);
    }
    return randomCampeones;
}

export const navigateToSecondScreen = (typePlataforme) => {
  if (Platform.OS == "android") {
      //navigation.navigate('Details')
  }
}