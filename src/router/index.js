import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/map'
    },
    {
      path: '/map',
      name: 'map',
      component: resolve => require(['@/components/common/map'], resolve),
      redirect: '/map/cyjc',
      children: [
        {
          path: '/map/cyjc',
          name: 'cyjc',
          component: resolve => require(['@/components/cyjc/cyjc'], resolve)
        },
        {
          path: '/map/lyzy',
          name: 'lyzy',
          component: resolve => require(['@/components/lyzy/lyzy'], resolve)
        }
      ]
    },
  ]
})
