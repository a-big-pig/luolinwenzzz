import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import homepage from '@/components/homepage'
import luolinwen1 from '@/components/luolinwen1'
import showgoods from '@/components/showgoods'
import shopcar from '@/components/shopcar'



Vue.use(Router)

export default new Router({
  routes: [
    {
    path:'/',
    name:'homepage',
    component:homepage
    },
    {//需要跳转的页面
      path:'/test',
      name:'test',
      component:test//组件名字
    },
    {
      path:'/luolinwen1',
      name:'luolinwen1',
      component:luolinwen1//组件名字
    },
    {
      path:'owgoods',
      name:'showgoods',
      component:showgoods//组件名字
    },
    {
      path:'opcar',
      name:'shopcar',
      component:shopcar
    }

  ]
})