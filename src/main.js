import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

//default user
if (localStorage.Users === undefined) {
  let user = [{
    username: "Admin",
    email: "admin@gmail.com",
    password: "admin"
  }]
  localStorage.setItem('Users', JSON.stringify(user))
}

export const bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

