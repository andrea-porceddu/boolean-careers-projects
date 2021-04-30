<template>
	<div class="pokemon-card">
		<h4>{{ pokemon.name }}</h4>
	</div>
</template>

<script>
export default {
	name: 'PokemonCard',
	props: {
		pokemon: Object
	}
}
</script>

<style>
	.pokemon-card {
		color: #006eff;
		text-transform: uppercase;
	}
</style>
