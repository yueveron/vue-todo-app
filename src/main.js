import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// import store from './model/store'
// store 定义为全局变量
// Vue.prototype.store = store

import { store } from './store/store'

Vue.config.productionTip = false

new Vue({
	store,
	render: h => h(App),
}).$mount('#app')
