import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Pages from '@/components/Pages'
import Apps from '@/components/Apps'
import Login from '@/components/Login'
import Components from '@/components/Components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/apps',
      name: 'Apps',
      component: Apps
    },
    {
      path: '/pages',
      name: 'Pages',
      component: Pages
    },
    {
      path: '/components',
      name: 'Components',
      component: Components
    }

  ]
})
