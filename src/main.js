import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vimeo from './views/Vimeo.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSoundcloud, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faSoundcloud, faFacebookF, faInstagram, faBars)

createApp(App)
.use(router)
.component("font-awesome-icon", FontAwesomeIcon)
.component("vimeo", Vimeo)
.mount('#app')
