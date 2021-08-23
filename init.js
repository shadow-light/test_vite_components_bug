
import Vue from 'vue'
import App from './App.vue'


window.onload = () => {
    const render = h => h(App)
    new Vue({render}).$mount('#app')
}
