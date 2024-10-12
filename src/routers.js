//import components here and create routes
import HomePage from './components/HomePage.vue';
import { createRouter, createWebHashHistory } from 'vue-router';



const routes = [ //array of objects
  {
    name: 'HomePage',
    component: HomePage,
    path: '/'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;