var app = new Vue({
	el: '#app',
	data: {
		boxClass: 'box',
		titleColor: 'lightcoral',
		color: 'lightgreen',
		nome: '',
		cognome: '',
		colorList: ['AliceBlue', 'Aqua', 'Aquamarine', 'BlueViolet', 'Chartreuse', 'Coral', 'DarkGoldenRod', 'DarkOrange', 'DeepPink'],
		colorSelected: '#ccc',
		inputName: 'Scrivi il tuo nome'
	},
	methods: {
		saluta: function() {
			alert('Ciao')
		},
		cambiaColore: function() {
			this.titleColor = 'lightblue'
		},
		randomNumber: function(min, max) {
			let result = Math.floor(Math.random() * (max + 1 - min) + min)
			return result
		},
		cambiaColori: function() {
			let indexColorSelected = this.randomNumber(0, this.colorList.length - 1)
			console.log(indexColorSelected)
			this.colorSelected = this.colorList[indexColorSelected]
			console.log(this.colorSelected)
		}
	}

})

Vue.config.devtools = true