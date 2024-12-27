//import components here and create routes
import HomePage from './components/HomePage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [ //array of objects
  {
    name: 'HomePage',
    component: HomePage,
    path: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;