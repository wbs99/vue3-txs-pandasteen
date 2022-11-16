import { createApp } from 'vue'
import { App } from './App'
import { router } from './router'
import '@svgstore';


const app = createApp(App)
app.use(router)
app.mount('#app')