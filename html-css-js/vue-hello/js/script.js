var app = new Vue({
  el: '#app',
  data: {
		message: 'Hello Vue!',
		url: 'https://vuejs.org/images/logo.png'
  },
	methods: {
		sayHello() {
			alert('Hello Vue!')
		}
	}
})

Vue.config.devtools = true