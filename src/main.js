import Vue from 'vue'
import App from './App'
import mpvueToastRegistry from 'mptoast/registry'
import {post} from './utils/requestMethod.js'

Vue.prototype.$post = post
mpvueToastRegistry(Vue)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
