import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

var app = createApp(App)


library.add(faTrash, faPenToSquare)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')