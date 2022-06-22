import Vue from "vue";
import App from "./App.vue";
import Uicard from "./components/UiCard.vue";

//* Bootstrap
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;
Vue.component("ui-card", Uicard);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
