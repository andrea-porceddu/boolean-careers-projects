var app = new Vue({
	el: '#app',
	data: {
		todoList: [],
		item: ''
	},
	methods: {
		add: function() {
      if (this.item !== '') {
        this.todoList.push(this.item)
      }
			this.item = ''
		},
		remove: function (i) {
			this.todoList.splice(i, 1);
		}
	}
})

Vue.config.devtools = true