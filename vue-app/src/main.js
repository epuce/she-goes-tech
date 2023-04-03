import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'

var router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            component: function() {
                return import('./components/MainView.vue')
            }
        },
        {
            path: '/list',
            component: function() {
                return import('./components/ListView.vue')
            }
        },
        {
            path: '/:pathMatch(.*)*', // 404 page not found
            redirect: '/'
        }
    ]
})

var app = createApp(App)

app.use(router)
// createApp(App).mount('#app')

app.mount('#app')
