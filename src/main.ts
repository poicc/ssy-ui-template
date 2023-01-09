import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import SSYUI from "ssy-poicc-ui-vite";
import "ssy-poicc-ui-vite/style.css";

createApp(App).use(SSYUI).mount("#app");
