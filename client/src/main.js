import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
