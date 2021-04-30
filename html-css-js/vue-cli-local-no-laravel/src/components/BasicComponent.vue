<template>
	<!-- unico contenitore -->
	<div class="wecome-box">
		ciao {{ user }}
	</div>
</template>

<script>
export default {
	name: 'BasicComponent',
	props: {
		user: String
	}
}
</script>

<style>
/* css o scss */
.wecome-box {
	color: #42b983;
}
</style>
