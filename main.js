import Vue from 'vue'
import App from './App'
import store from "@/store/index.js";
import * as http from "@/lib/http.js";

Vue.config.productionTip = false

App.mpType = 'app'

Vue.prototype.$store = store;
Vue.prototype.$http = http;

const app = new Vue({
    ...App
})


app.$mount()
