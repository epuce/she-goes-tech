import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


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
            path: '/:pathMatch(.*)*',
            redirect: '/'
        }
    ]
})

var app = createApp(App)

library.add(faHatWizard)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
