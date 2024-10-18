import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import { basicRoutes } from './basic-routes';

export const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export async function setupRouter(app: App) {
  app.use(router);
}