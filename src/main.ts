import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "uno.css";
import "@unocss/reset/tailwind.css";
import "@/assets/styles/index.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
