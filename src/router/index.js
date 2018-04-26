import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '$src/components/HelloWorld'
import Dashboard from '$src/routes/dashboard/index'

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
    }
  ]
})
