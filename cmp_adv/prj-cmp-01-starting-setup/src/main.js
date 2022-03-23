import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard';

const app = createApp(App);

app.component('BaseCard', BaseCard);

app.mount('#app');
