import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/UI/BaseBadge.vue";
import BaseCard from "./components/UI/BaseCard.vue";

const app = createApp(App);

app.component("BaseBadge", BaseBadge);
app.component("BaseCard", BaseCard);

app.mount("#app");
