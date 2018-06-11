import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import HelloWorld from '@/components/HelloWorld'
import App from '@/components/App'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: App },
    { path: '/HelloWorld', component: HelloWorld },
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
})
