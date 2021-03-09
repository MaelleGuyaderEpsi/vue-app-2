<template>
  <div class="home">
  	<div>
  		<p>ESSAI ROUTEUR</p>
  		<router-link to="/about/maelle">Aller à About</router-link>
  		<p><button @click="testRouter">Route vers Lily</button></p>
  		<p><button @click="testRouterWithQuery">Route avec query</button></p>
  	</div>

  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
  	testRouter: function () {
  		this.$router.push({ name: 'about', params: { username: 'Lily' }
  		})
  	},
  	testRouterWithQuery: function () {
  		this.$router.push({ name: 'about', query: { nom: 'Maëlle GUYADER' }
  		})
  	}
  }

}
</script>