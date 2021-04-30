new Vue({
	el: '#app',
	data: {
		emailCount: '',
		emailList: []
	},
	methods: {
		generateEmails: function() {
			let self = this
			this.emailList = []
			for (let i = 0; i < this.emailCount; i++) {
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then(function(resp) {
					self.emailList.push(resp.data.response)
				})
			}
		}
	}
})

Vue.config.devtools = true