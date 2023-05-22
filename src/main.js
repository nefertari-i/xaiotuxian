import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 全局指令注册
import { lazyPlugin } from '@/directives/lazyPlugin'

import App from './App.vue'
import router from './router'
const app = createApp(App)
// import './assets/main.css'
import '@/styles/common.scss';

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.mount('#app')
