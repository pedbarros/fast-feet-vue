import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import pcds from "pcds";
import "pcds/dist/pedro-design-system.css";
import Vue from "vue";
import App from "./App.vue";
import "./assets/scss/global.scss";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.use(pcds);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
