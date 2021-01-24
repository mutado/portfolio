import { createApp } from 'vue'
import App from './App.vue'
import router from './router'



const app = createApp(App);

const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => app.component(key.split('/').pop().split('.')[0], files(key).default))

app.use(router).mount('#app');