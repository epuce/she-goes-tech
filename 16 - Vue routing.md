## Vue router
```bash
# Installing the package
npm install vue-router
```

```JavaScript
// Add route setup to main.js
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
```

```HTML
<!-- Improve the layout to have the router-view initialized within App.vue-->
<template>
  <div>
    <p>
      <router-link to="/">Go to Home</router-link>
      <router-link to="/listView">list view</router-link>
      <router-link to="/not-found">route not found</router-link>
    </p>
    <router-view></router-view>
  </div>

</template>

<script>
export default defineComponent({
  name: 'App',
})
</script>
```

### Checkup

### Create a new vue app with the name task-vue-router (push the whole folder after the task has been finished)

* Modify the setup so that the router has been setup with the fallowing routes (apply some content to the pages so they can be distinguished)
    * `/` leads to the homepage
    * `/about` leads to the about page
    * `/products` leads to the products page
    * there is a fallback option when non existing rout is specified it redirects to the homepage
* Add link that can navigate between previous 4 scenarios
