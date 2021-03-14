<template>
  <div class="home">

    <h1>{{ msg }}</h1>
    <p><input type="number" name="name" id="name" v-model="codePostal" placeholder="code postal"></p>
    <p>Le code postal choisi est le: {{ codePostal}} </p>
    <p><button class="button button1" @click="lerouteur" method="post">Voir la météo</button></p>
    
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    lerouteur: function() {
      this.$router.push({name: 'infos', params: {username: 'informations'}
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  background-color: white; 
  border: solid 2px #109CD1;
  color: #109CD1;
  padding: 10px 5px;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
}

input:focus {
  outline: none;
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
</style>
