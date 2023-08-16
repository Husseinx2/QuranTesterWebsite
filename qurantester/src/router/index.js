import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TestView from '../views/TestView.vue'
import chapterTestView from '../views/ChapterTestView'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path:'/test',
    name:'test',
    component:TestView
  },
  {
    path:'/chapterTest/:id',
    name:'chaptertest',
    component:chapterTestView
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router