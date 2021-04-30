const app = new Vue({
	el: '#app',

	data: {
		userQuery: '',
		userApiKey: '3ed936b322714eaba9c1444572e9f68a',

		queryResults: [],
		movies: [],
		tvSeries: [],

		languageAbbr: [
			'en',
			'es',
			'ru',
			'fr',
			'de',
			'it',
			'be'
		],

		castForId: [],

		allGenres: [],
		movieGenres: [],
		tvGenres: []
	},

	methods: {
		search() {
			this.getFilm()
			this.getTvSeries()

			this.movies = []
			this.tvSeries = []
			
			this.userQuery = ''
		},

		// funzione che controlla se il campo di ricerca è vuoto
		isNotUserQueryEmpty(stringa) {
			if (stringa.length !== 0) {
				return true
			}
		},

		getFilm() {
			if (this.isNotUserQueryEmpty(this.userQuery)) {
				const url = 'https://api.themoviedb.org/3/search/movie'
				axios.get(url, {
					params: {
						api_key: this.userApiKey,
						query: this.userQuery,
						language: 'it-IT',
					}
				})
				.then((resp) => {
					resp.data.results.forEach((obj) => {
						this.movies.push({
							"id": obj.id,
							"type": 'movie',
							"title": obj.title, 
							"originalTitle": obj.original_title,
							"overview": obj.overview,
							"originalLanguage": obj.original_language,
							"flagLanguage": this.getLangFlag(obj.original_language),
							"voteAverage": obj.vote_average,
							"stars": this.getStars(obj.vote_average),
							"posterPath": this.getPoster(obj.poster_path),
							"genres": this.getGenreName(obj.genre_ids),
							"visible": true
						})
						this.queryResults = [...this.movies, ...this.tvSeries]
					})
				})
				// .catch((error) => {
				// 	console.log(error.toJSON());
				// });
			}
		},

		getTvSeries() {
			if (this.isNotUserQueryEmpty(this.userQuery)) {
				const url = 'https://api.themoviedb.org/3/search/tv'
				axios.get(url, {
					params: {
						api_key: this.userApiKey,
						query: this.userQuery,
						language: 'it-IT'
					}
				})
				.then((resp) => {
					resp.data.results.forEach((obj) => {
						this.tvSeries.push({
							"id": obj.id,
							"type": 'tv',
							"title": obj.name, 
							"originalTitle": obj.original_name,
							"originalLanguage": obj.original_language,
							"overview": obj.overview,
							"flagLanguage": this.getLangFlag(obj.original_language),
							"voteAverage": obj.vote_average,
							"stars": this.getStars(obj.vote_average),
							"posterPath": this.getPoster(obj.poster_path),
							"genres": this.getGenreName(obj.genre_ids),
							"visible": true
						})
						this.queryResults = [...this.movies, ...this.tvSeries]
					})
				})
			}
		},

		getLangFlag(lang) {
			if (this.languageAbbr.includes(lang)) {
				return './img/4x3/' + lang + '.svg'
			}
			return './img/4x3/unknown-flag.png'
		},

		getStars(average) {
			return Math.floor(average / 2)
		},

		getPoster(path) {
			if (path) {
				return 'https://image.tmdb.org/t/p/w185' + path
			}
			return './img/poster-not-found185x278.png'
		},

		getCast(id, type) {
			let url = 'https://api.themoviedb.org/3/' + type + '/' + id + '/credits'
			axios.get(url, {
				params: {
					api_key: '3ed936b322714eaba9c1444572e9f68a',
				}
			})
			.then((resp) => {
				/* -----------------------------------------------------------------------------------
				filtro oggetto resp.data.cast e ritorno con filter un array di nomi (attori) 
				solo se id di queryResults e id di resp.data.cast coincidono.
				caso limite: il problema è che ad ogni mousehover lo script esegue una chiamata
				-------------------------------------------------------------------------------------*/
				this.castForId = resp.data.cast.filter((obj) => {
					this.queryResults.forEach((el) => {
						if (el.id === resp.data.id) {
							return obj.original_name
						}
					})
					return this.castForId
				})
			})
		},

		// funzione che mostra solo i primi 5 elementi di un array
		getFirst5Actors(array) {
			return array.slice(0, 5)
		},

		/* -----------------------------------------------------------------------------------
		in questa funzione passo direttamente il valore della key genre_ids (un array di ids)
		e li confronto con i valori della key id dell'array caricato in mounted (allGenres)
		ad ogni uguaglianza ogni valore dell'array genre_id viene sostituito con il valore della key 
		nome dell'array allGenres - dopodichè ritorno l'array con i nomi sostituiti agli ids
		-------------------------------------------------------------------------------------*/
		getGenreName(array) {
			for (let i = 0; i < array.length; i++) {
				this.allGenres.forEach((el) => {
					if (array[i] === el.id) {
						array[i] = el.name
					}
				})
			}
			return array
		},

		/* -----------------------------------------------------------------------------------
		// funzione che rende visibile o meno un box (card)
		// viene passato alla funzione un value della select che contine i generi caricati in mounted
		// successivamente viene iterato l'array queryResult.genres (adesso ha i nomi non più di ids)
		// se il value è incluso in queryResult.genres viene mostrato il box altrimenti viene nascosto
		// (nella ricostruzione dell'oggetto queryResult ho inserito una proprietà "visible": true)
		-------------------------------------------------------------------------------------*/
		filterForGenre(genreName) {
			this.queryResults.forEach((el) => {
				if (!el.genres.includes(genreName)) {
					el.visible = false
				} else {
					el.visible = true
				}
			})			
		}

	},

	mounted() {
		// carico generi movies e tvs da inserire nella select
		const movieGenresUrl = 'https://api.themoviedb.org/3/genre/movie/list'
		axios.get(movieGenresUrl, {
			params: {
				api_key: this.userApiKey
			}
		})
		.then((resp) => {
			this.movieGenres = resp.data.genres
			this.allGenres = [...this.movieGenres, ...this.tvGenres]
		})
		const tvGenresUrl = 'https://api.themoviedb.org/3/genre/tv/list'
		axios.get(tvGenresUrl, {
			params: {
				api_key: this.userApiKey
			}
		})
		.then((resp) => {
			this.tvGenres = resp.data.genres
			this.allGenres = [...this.movieGenres, ...this.tvGenres]
		})
	}
})

Vue.config.devtools = true