import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import scrollAnimation from './directives/scroll-animation'

const app = createApp(App)

app.directive('scroll-animation', scrollAnimation);

app.mount('#app')
