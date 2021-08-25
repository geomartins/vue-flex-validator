import { createApp } from 'vue'
import App from './App.vue'
import VueFlexValidator from './install';

const app = createApp(App);
app.use(VueFlexValidator);
app.mount('#app')
