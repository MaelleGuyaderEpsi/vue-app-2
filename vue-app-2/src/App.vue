<template>
  <img alt="Vue logo" src="./assets/logo-meteo.png">
  <home msg="Météo par ville"/>
  
</template>

<script>
//API METEO MATICS: https://www.meteomatics.com/en/weather-api/?msclkid=82611baf1cf31b251b4c7be8b6666c3a - attente de la validation de l'inscription -> Nombre de requ^^etes très limités
//API METEO CONCEPT: https://api.meteo-concept.com/documentation -> indispo a cause de l'incendie OVH
//API PRISE -> https://openweathermap.org/current -> nb requêtes 

import home from './components/home.vue'

export default {
  name: 'App',
  components: {
    home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #109CD1;
  margin-top: 60px;
}
</style>
