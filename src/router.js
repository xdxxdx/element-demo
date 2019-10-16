import Vue from 'vue'
import Router from 'vue-router'
import TagList from './views/TagList.vue'
import TagAdd from './views/TagAdd.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/tag/list'
    },
    {
      path: '/tag/list',
      name: 'tagList',
      component: TagList
    },
    {
      path: '/tag/add',
      name: 'tagAdd',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: TagAdd
    }
  ]
})
