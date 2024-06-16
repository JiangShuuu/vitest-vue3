import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/erik',
    name: 'Erik',
    component: () => import('@/views/erik.vue'),
  },
  {
    path: '/ithome',
    name: 'Ithome',
    component: () => import('@/views/ithome.vue'),
  },
  {
    path: '/element',
    name: 'Element',
    component: () => import('@/views/element.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: () => import('@/views/error.vue'),
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export { routes }
export default router
