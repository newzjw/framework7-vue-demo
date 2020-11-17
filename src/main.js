import Vue from 'vue'
import App from './App.vue'
// Import F7
import Framework7 from "framework7/framework7.esm.bundle.js";
// Import F7 Vue Plugin
import Framework7Vue from "framework7-vue/framework7-vue.esm.bundle.js";
import "framework7/css/framework7.bundle.min.css";
import 'framework7-icons';
Framework7.use(Framework7Vue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
