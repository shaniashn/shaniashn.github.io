import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedinIn, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';

library.add({ faLinkedinIn, faDribbble, faGithub, faFile});

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
