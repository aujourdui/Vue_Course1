import { createApp } from 'vue';
import { createStore } from 'vuex';
import { counterModule, authModule } from './module';

import App from './App.vue';

const store = createStore({
  modules: {
    numbers: counterModule,
    auth: authModule,
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
