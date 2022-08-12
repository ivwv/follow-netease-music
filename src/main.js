import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入vant.js
import getVant from './plugins/vant'
// axios
import axios from 'axios'

const app = createApp(App)
// 挂载sxios
// axios.defaults.baseURL = 'https://netcloudapi.herokuapp.com/'
axios.defaults.baseURL = 'http://124.221.62.120:5000/'
// app.config.globalProperties.$http = axios
app.provide('$http', axios)

app.use(store)
app.use(router)
getVant(app)

app.mount('#app')
