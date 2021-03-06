import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Attractions from '../views/Attractions.vue'
import Reviews from '../views/Reviews.vue'
import Story from '../views/Story.vue'
import Villas from '../views/Villas.vue'
import Booking from '../views/Booking.vue'
import Info from '../views/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/selection',
    name: 'selection',
    component: Villas
  },
  {
    path: '/selection/:id',
    name: 'info',
    component: Info
  },
  {
    path: '/local-attractions',
    name: 'attractions',
    component: Attractions
  },
  {
    path: '/our-story',
    name: 'our-story',
    component: Story
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: Reviews
  },
  {
    path: '/booking',
    name: 'booking',
    component: Booking
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
