import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'board',
    component: function () {
      return import( '../views/HomeView.vue')
    },
    children : [{
      path : ':page', 
      component : function() {return import('../components/pageComponent.vue')}
    }]
    
  },
  {
    path: '/user/:user',
    name: 'user',

    component: function () {
      return import('../views/UserView.vue')
    }
  },
  {
    path: '/login/login',
    name: 'login',

    component: function () {
      return import('../views/LoginView.vue')
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
