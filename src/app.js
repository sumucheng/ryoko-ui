import Vue from 'vue'
import Button from './button'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Sider from './sider'
import Content from './content'
import Toast from './toast'
import plugin from './plugin'
Vue.use(plugin)

Vue.component('r-button', Button)
Vue.component('r-row', Row)
Vue.component('r-col', Col)
Vue.component('r-grid', Grid)
Vue.component('r-layout', Layout)
Vue.component('r-header', Header)
Vue.component('r-footer', Footer)
Vue.component('r-sider', Sider)
Vue.component('r-content', Content)
Vue.component('r-toast', Toast)

new Vue({
    el: '#app'
})