import Vue from 'vue'
import App from './App.vue'

// axios
import axios from 'axios'
// centralizzo axios in variabile interna a Vue, per accedere = this
Vue.prototype.$http = axios
Vue.prototype.$url = 'https://pokeapi.co/api/v2'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
