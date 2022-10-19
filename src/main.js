import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import 'animate.css'

import router from '@/router/index'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')