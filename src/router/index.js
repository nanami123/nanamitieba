import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/comment'
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/test.vue')
  },
  {
    path: '/home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/tiezi',
    name: 'tiezi',
    component: () => import('../views/Home/tiezi.vue')
  },
  {
    path: '/floor',
    name: 'floor',
    component: () => import('../views/Home/Floor.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User/User.vue')
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import('../views/Edit/Edit.vue')
  },
  {
    path: '/comment',
    name: 'comment',
    component: () => import('../views/Edit/Comment.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/User/Register.vue')
  },
  {
    path: '/infosetting',
    name: 'infosetting',
    component: () => import('../views/User/Infosetting.vue')
  },
  {
    path: '/changename',
    name: 'changename',
    component: () => import('../views/User/Changename.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
