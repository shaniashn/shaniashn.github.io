// import './assets/'

import { createApp } from 'vue'
import App from './App.vue'
// import router here

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add({ faLinkedinIn, faUserSecret });

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
