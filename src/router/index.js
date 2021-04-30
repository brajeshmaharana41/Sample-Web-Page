import Vue from 'vue'
import VueRouter from 'vue-router'
import Project_list from '../views/Project_list.vue'
import Project_detail from '../views/Project_detail.vue'
import Team from '../views/Team.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'project_list',
    component: Project_list
  },
  {
    path: '/Project_detail',
    name: 'project_detail',
    component: Project_detail
  },
  {
    path: '/team',
    name: 'team',
    component: Team
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
