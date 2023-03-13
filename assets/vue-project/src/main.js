import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router';


const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
		{ 
			path: `/`,
			component: () =>
				import('./components/MainView.vue'),
		},
        {
            path: `/listView`,
			component: () =>
				import('./components/ListView.vue'),
        },
        {
            path: '/:pathMatch(.*)*', // redirect when path not found
            redirect: '/',
        }
    ]
})

var app = createApp(App)
app.use(router)
app.mount('#app')
