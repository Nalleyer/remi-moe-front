import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Debug from './views/Debug.vue'
import Games from './views/Games.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/games',
      name: 'games',
      component: Games,
    },
    {
      path: '/debug',
      name: 'debug',
      component: Debug,
    },
  ],
})
