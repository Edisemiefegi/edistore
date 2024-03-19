import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {
  Quasar,
  Dialog
} from 'quasar'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'



import './style.css'
import App from './App.vue'
import 'primeicons/primeicons.css'
import router from './router'; 

import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/dist/quasar.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {
    Dialog
  }, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
myApp.use(pinia).use(router).mount('#app')




