import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Filtered from './components/Filtered.vue'
import Posts from './components/Posts.vue'

Vue.use(VueRouter);

const routes = [{
  path:'/',component: Posts, props: true
 
},
{
path:'/filtered',component: Filtered, props: true
 
}]
const router = new VueRouter({routes,})
Vue.config.productionTip = false

new Vue({
  
  render: h => h(App),
  router,
}).$mount('#app')
