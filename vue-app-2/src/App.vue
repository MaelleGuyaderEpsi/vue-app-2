<template>
  <div class="divGauche">
    <img alt="Vue logo" src="./assets/logo-meteo.png">
    <home msg="Météo par ville"/>

    <p><button class="button button1" @click="routeInfo">Voir les infos</button></p>
  </div>
  
</template>

<script>
//API METEO MATICS: https://www.meteomatics.com/en/weather-api/?msclkid=82611baf1cf31b251b4c7be8b6666c3a - attente de la validation de l'inscription -> Nombre de requ^^etes très limités
//API METEO CONCEPT: https://api.meteo-concept.com/documentation -> indispo a cause de l'incendie OVH
//API PRISE -> https://openweathermap.org/current -> nb requêtes 

import home from './views/home.vue'

export default {
  name: 'App',
  components: {
    home
  },
  methods: {
    routeInfo: function () {
      this.$router.push({ name: 'infos', params: { name: 'InformationsApplications' }
      })
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #109CD1;
  margin-bottom: auto;
  height: 100%;
  top: 0;
}

#html {
  height: 100%;
  top: 0;

}
.button1 {
  background-color: white; 
  color: black; 
  border: 2px solid #109CD1;
}
.button1:hover {
  background-color: #109CD1;
  color: white;
}

.divGauche {
  width: 30%;
  background-color: white;
  height: 500%;
  border: 2px solid #99A7A3;
}
</style>
