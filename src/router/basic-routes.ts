import { RouteRecordRaw } from 'vue-router';
export const basicRoutes: RouteRecordRaw[] = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    name: 'Layout',
    path: '/',
    component: () => import('@/layout/index.vue'),
  }
]