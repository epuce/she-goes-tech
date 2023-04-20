import { createApp } from 'vue'
import App from './App.vue'
// import * as VueRouter from 'vue-router'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faPen)


// var router = VueRouter.createRouter({
//     history: VueRouter.createWebHistory(),
//     routes: [
//         {
//             path: '/',
//             component: function(){
//                 return import('./components/MainView.vue')
//             }
//         },
//         {
//             path: '/list',
//             component: function(){
//                 return import('./components/ListView.vue')
//             }
//         },
//         {
//             path: '/:pathMatch(.*)*',
//             redirect: '/'
//             }
//     ]
// })

var app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)

// app.use(router)

app.mount('#app')
