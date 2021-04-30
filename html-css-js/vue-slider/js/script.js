var app = new Vue({
  el: '#app',
  data: {
		slider: [
			'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg',
			'https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg',
			'https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg',
			'https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg'
		],
		index: 0
	},
	methods: {
    // indexFirst: function () {
    //   return this.index // app.indexFirst() - tirorna il valore di index ossia 0
    // },
		// indexLast: function() {
		// 	return this.slider.length // app.indexLast() - tirorna la lunghezza dell'array slider ossia 4
    // },
		next: function() {
      this.index = this.index + 1
			if (this.index >= this.slider.length) {
				this.index = 0
      }
		},
		prev: function() {
			this.index = this.index - 1
			if (this.index < 0) {
				this.index = this.slider.length - 1
      }
		},
		dotSelected: function(dotIndex) {
			this.index = dotIndex
		}
	}
})

Vue.config.devtools = true