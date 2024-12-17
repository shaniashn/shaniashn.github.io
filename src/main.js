import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedinIn, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faArrowLeft, faXmark, faBars }  from '@fortawesome/free-solid-svg-icons';


library.add({ faLinkedinIn, faDribbble, faGithub, faFile, faArrowLeft, faArrowRight, faXmark, faBars});

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');
