<template>
	<section>
		<PokemonCard v-for="(pokemon, i) in pokemons" 
			:key="i"
			:pokemon="pokemon" />
	</section>
</template>

<script>
import PokemonCard from './PokemonCard.vue'
export default {
	name: 'PokemonSection',
	props: {
		pokemons: Array,
	},
	components: {
		PokemonCard
  }
}
</script>

<style>

</style>
