<template>
  <img alt="Vue logo" src="./assets/logo-meteo.png">
  <home msg="Météo par département"/>
  
</template>

<script>
//API METEO MATICS: https://www.meteomatics.com/en/weather-api/?msclkid=82611baf1cf31b251b4c7be8b6666c3a - attente de la validation de l'inscription
//API METEO CONCEPT: https://api.meteo-concept.com/documentation
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
