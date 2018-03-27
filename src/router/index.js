import Vue from 'vue'
import Router from 'vue-router'
import My from '@/components/my'
import Recommend from '@/components/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    }
  ]
})
