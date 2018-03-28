import Vue from 'vue'
import Router from 'vue-router'
import My from '@/components/my/my'
import Recommend from '@/components/recommend/recommend'
import { setTitle } from '../util/setting'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/indexRecommend'
    },
    {
      path: '/indexMy',
      name: '个人中心',
      component: My
    },
    {
      path: '/indexRecommend',
      name: '推荐首页',
      component: Recommend
    }
  ]
})

router.beforeEach(function (to, from, next) {
  to.name && setTitle(to.name)
  next()
})

export default router
