import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import vuetify from '@/plugins/vuetify'
import './plugins'
import axios from 'axios'
Vue.prototype.$Axios = axios;
Vue.config.productionTip = false;
import VueSession from 'vue-session'

var sessionOptions = {
  persist: true
}

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
Vue.use(VueSession, sessionOptions)
