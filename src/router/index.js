import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component:()=>import('../components/Notice.vue')
    },
    {
      path: '/notice',
      component:()=>import('../components/Notice.vue')
    },
    {
      path: '/randomDuty',
      component:()=>import('../components/RandomDuty.vue')
    },
    {
      path: '/messageBoard',
      component:()=>import('../components/MessageBoard.vue')
    },
    {
      path: '/content',
      name:'content',
      component:()=>import('../components/Content.vue')
    },
    {
      path:'/maintain',
      name:'maintain',
      component:()=>import('../components/Maintain.vue')
    },
    {
      path: '*',
      redirect:'/notice'
    }
  ]
})
