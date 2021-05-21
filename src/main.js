import Vue from 'vue'
import App from './components/App/App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from "./vuex/store/Store"

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
