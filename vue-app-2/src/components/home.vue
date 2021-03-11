<template>
  

  <div class="home">

    <h1>{{ msg }}</h1>
    <p><input type="number" name="name" id="name" v-model="name" placeholder="code postal"></p>
    <p><button class="button button1" @click="meteo" type="submit">Voir la météo</button></p>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
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
.button {
  background-color: #109CD1; 
  border: none;
  color: #109CD1;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.button1 {
  background-color: white; 
  color: #109CD1; 
  border: 2px solid #109CD1;
}

.button1:hover {
  background-color: #109CD1;
  color: white;
}

.button1:focus {
  outline: none;
  background-color: #109CD1;
  color: white;
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
</style>
