import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'



library.add(faPen, faTrashAlt)





createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
