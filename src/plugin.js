import Toast from './toast'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (obj) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: obj
            })
            toast.$mount()
            document.body.appendChild(toast.$el)
        };
    }
}