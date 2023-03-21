import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './styles.scss'

const myApp = createApp(App)

myApp.use(createPinia()).mount('#app')
