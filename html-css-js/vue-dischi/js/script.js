const app = new Vue({
	el: '#app',

	data: {
		listaDischi: [],
		listaDischiCopia: [], // creo una copia in modo da renderizzarla ongni volta all'evento on change
		isMounted: null,
		listaGeneri: ['All']
	},

	methods: {
		getGenre: function() {
			let choosenGenre = document.getElementById('musical-genres').value
			// console.log(`${choosenGenre}`);
			// console.log(typeof(`${choosenGenre}`));
			this.listaDischiCopia = this.listaDischi.filter((el) => {
				if (choosenGenre === 'All') {
					return this.listaDischi
				} else {
					return el.genre === choosenGenre
				}
			})
			return this.listaDischiCopia
		}
	},

	mounted() {
		const self = this
		axios.get('https://flynn.boolean.careers/exercises/api/array/music')
		.then((resp) => {

			// lista dischi diventa tutto l'array di oggetti response
			self.listaDischi = resp.data.response
			// console.log(resp.data.response)

			// lista dischi in un array copia
			self.listaDischiCopia = self.listaDischi

			// nel data array ListaGeneri pusho i generi musicali univoci
			// in modo da poterli mostrare nelle options del DOM 'input-genre' della select
			self.listaDischi.forEach((el) => {
				if (!self.listaGeneri.includes(el.genre)) {
					self.listaGeneri.push(el.genre)
				}
			})
			// console.log(self.listaDischi)
			// console.log(self.listaGeneri)

			self.isMounted = true // l'ho messo così tanto per provare

		})
	}
})

Vue.config.devtools = true