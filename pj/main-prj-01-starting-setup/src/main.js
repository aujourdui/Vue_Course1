import { createApp } from 'vue';

import router from './router';
import store from './store/index';
import App from './App';
import BaseCard from './components/ui/BaseCard';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('BaseCard', BaseCard);

app.mount('#app');
