<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
		<!-- passo il componente e la variabile user -->
		<BasicComponent v-for="name in users" :user="name" :key="name"/>
		<!-- <basic-component> altro metodo per richiamare il componente -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
		<PokemonSection :pokemons="pokemons" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// importare componente
import BasicComponent from './components/BasicComponent.vue'
import PokemonSection from './components/PokemonSection.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
		// nome nuovo componente
		BasicComponent,
    PokemonSection
  },
	data: function() {
		return {
			users: ['pippo', 'topolino', 'pluto', 'paperino',],
			pokemons: []
		}
	},
	mounted() {
		this.$http.get(this.$url + '/pokemon')
			.then((result) => {
				console.log(result.data);
				this.pokemons = result.data.results
		})
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
