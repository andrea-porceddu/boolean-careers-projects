const app = new Vue({ // const app per debug in console
	el: '#app',
	data: {
		discs: [],
		genresNoDuplicates: ['all'],
		genreSelected: 'all'
	},
	methods: {
		selectForGenre() {
			// console.log(this.genreSelected);
			this.discs.forEach((el) => {
				if (this.genreSelected === el.genre || this.genreSelected === 'all') {
					el.visible = true
				} else {
					el.visible = false
				} 
			})
		}
	},
	mounted() {
		axios.get('app/server.php')
		.then((resp) => {
			resp.data.forEach((obj) => {
				this.discs.push({
					"cover": obj.cover,
					"title": obj.title,
					"author": obj.author,
					"genre": obj.genre,
					"year": obj.year,
					"visible": true
				})
				this.discs.forEach((el) => {
					if (!this.genresNoDuplicates.includes(el.genre)) {
						this.genresNoDuplicates.push(el.genre)
					}
				})
			})
		})
		// .then(resp => console.log(resp))
    // .catch(err => console.log(err));
  }
})

Vue.config.devtools = true;

// console.log('funzia!');