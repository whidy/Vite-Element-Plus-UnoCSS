import { createApp } from "vue";
import App from "./App.vue";
import "@unocss/reset/normalize.css";
import "uno.css";
import "@/styles/index.scss";
const app = createApp(App);
app.mount("#app");
