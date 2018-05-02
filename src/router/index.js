import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '$src/components/HelloWorld'
import Dashboard from '$src/routes/dashboard/index'
import CssAnimation from '$src/routes/dashboard/css-animation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/2',
      name: 'CssAnimation',
      component: CssAnimation
    }
  ]
})
