import Vue from 'vue'
import Button from './button'
import Row from './row'
import Col from './col'
Vue.component('r-button', Button)
Vue.component('r-row', Row)
Vue.component('r-col', Col)
Vue.component('r-grid', Grid)
new Vue({
    el: '#app'
})