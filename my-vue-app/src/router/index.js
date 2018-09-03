import Vue from 'vue'
import Router from 'vue-router'
const Resume = () => import('../components/Resume')
const Home = () => import('../components/Home')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
