import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrash, faPen, faXmark } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faPen, faXmark)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
