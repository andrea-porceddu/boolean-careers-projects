/* Vuejs --------------------------------------------------------------------------------------------------------------- */
new Vue({
	el: '#app',
	data: {
		randomNum: ''
	},
	methods: {
		
	},
	mounted() {
		const self = this // scope interno
		// console.log('ho montato l\'app')
		axios.get('https://flynn.boolean.careers/exercises/api/random/int')
			.then(function(resp) {
				// console.log(resp);
				// console.log(resp.data);
				// console.log(resp.data.response);
				self.randomNum = resp.data.response
		})
	}
})

Vue.config.devtools = true
/* Vuejs --------------------------------------------------------------------------------------------------------------- */

/* JS es6 ------------------------------------------------------------------------------------------------------------------
// oggetto pronto per l'uso
let xhr = new XMLHttpRequest()

let DOMelement = document.getElementsByClassName('random-number')[0]

// listener
xhr.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		// console.log(this.response)
		let responseObj = JSON.parse(this.response)
		// console.log(responseObj)
		// console.log(responseObj.response)
		DOMelement.innerText = responseObj.response
	}
}

xhr.open("GET", "https://flynn.boolean.careers/exercises/api/random/int", true) // senza/con true chiamata sincrona/asincrona

xhr.send()
JS es6 ------------------------------------------------------------------------------------------------------------------ */

/* JQuery es6 ----------------------------------------------------------------------------------------------------------- 

$.ajax({
	// url: "https://flynn.boolean.careers/exercises/api/random/int",

	url: "https://flynn.boolean.careers/exercises/api/uhuhuhuh/int", // per log dello stato e dell'errore su link sbagliato

	method: "GET",
	success: function(data, status) { // data, stato jQuery passa il data gia parsato
		// console.log(data);
		$(".random-number-1").html(data.response)
	},
	error: function(request, status, errors) { // richiesta, stato, errori
		console.log(status);
		console.log(errors);
	}
})

/* JQuery es6 ----------------------------------------------------------------------------------------------------------- */