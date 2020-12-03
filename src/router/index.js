import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ViewEmployee from '@/components/ViewEmployee'
import NewEmployee from '@/components/NewEmployee'
import EditEmployee from '@/components/EditEmployee'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes =  [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/new',
    name: 'new-employee',
    component: NewEmployee
  },
  {
    path: '/:employee_id',
    name: 'view-employee',
    component: ViewEmployee
  },
  {
    path: '/edit/:employee_id',
    name: 'edit-employee',
    component: EditEmployee
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
