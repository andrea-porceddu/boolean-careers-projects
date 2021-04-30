var app = new Vue({
	el: '#app',
	data: {
		list: [
			
		],
		item: '',
		index: 0
	},
	methods: {
		add: function() {
			let item = this.item
			this.list.push(item)
			this.index += 1
			this.item = ''
		},
		remove: function() {
			this.list.splice((this.index - 1), 1)
			this.index -= 1
			if (this.index < 0) {
				this.index = 0
			}
		}
	}
})

Vue.config.devtools = true