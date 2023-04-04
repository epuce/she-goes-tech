import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'

var router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/',
            component: function() {
                return import('./components/SubscribeLog.vue')
            }
        },
        {
            path: '/members',
            component: function() {
                return import('./components/MemberList.vue')
            }
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
})

var app = createApp(App)

app.use(router)

app.mount('#app')