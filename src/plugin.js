import Toast from './toast'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function ({ text = "", type = "default" }) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default = [text]
            toast.$mount()
            document.body.appendChild(toast.$el)
        };
    }
}