new Vue({
	el: '#app',
	data: {
		numbersList: [],
		numeroPari: 'numero-pari',
		numeroDispari: 'numero-dispari',
		listaInvitati: [],
		userInput: ''
	},
	methods: {

		/* snack 1
		generateNumber: function() {
		const self = this
			axios.get('https://flynn.boolean.careers/exercises/api/random/int')
				.then(function(resp) {
					self.numbersList.push(resp.data.response)
					console.log(self.numbersList);
			})
		},
		snack 1 */

		/* snack 2 */
		check: function() {
			for (let y = 0; y < this.listaInvitati.length; y++) {
				if (!this.listaInvitati.includes(this.userInput)) {
					document.getElementsByClassName('response')[0].innerHTML = 'Accesso negato'
				} else {
					document.getElementsByClassName('response')[0].innerHTML = 'Benvenuto'
				}
			}
		}
		/* snack 2 */
	},
	/* snack 2 */
	mounted() {
		const self = this
		for (let i = 0; i < 10; i++) {
			axios.get('https://flynn.boolean.careers/exercises/api/random/name')
			.then(function(resp) {
				self.listaInvitati.push(resp.data.response)
			})
		}
	}
	/* snack 2 */
})

Vue.config.devtools = true