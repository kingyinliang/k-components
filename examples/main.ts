import Vue from 'vue'
import App from './App.vue'
import router from './router'
import KComponents from 'packages/main'

Vue.use(KComponents)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
