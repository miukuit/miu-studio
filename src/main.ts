import 'normalize.css'
import './assets/styles/global.scss';

import { createApp } from 'vue';
import App from './App.vue';

import { setupStore } from './store';
import { setupRouter } from './router';

async function bootstrap() {
  const app = createApp(App);
  // 挂载状态管理
  setupStore(app);
  // 路由准备就绪后挂载 APP 实例
  await setupRouter(app);
  app.mount('#app');
}

bootstrap();