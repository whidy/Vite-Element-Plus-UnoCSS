import { createApp } from 'vue'
import App from './App.vue'
import '@unocss/reset/tailwind.css'
// import 'uno:preflights.css'
import 'uno:red.css'
import 'uno:blue.css'
import 'uno.css'
import '@/styles/index.scss'
const app = createApp(App)
app.mount('#app')
